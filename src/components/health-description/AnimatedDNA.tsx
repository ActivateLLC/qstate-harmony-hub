import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Dna } from "lucide-react";
import * as d3 from "d3";

const AnimatedDNA = () => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      const svg = d3.select(d3Container.current);
      svg.selectAll("*").remove();
      
      const width = 400;
      const height = 200;
      
      svg.attr("width", width).attr("height", height);
      
      const points = Array.from({ length: 20 }, (_, i) => ({
        x: (i / 20) * width,
        y1: height / 2 + Math.sin((i / 20) * Math.PI * 4) * 50,
        y2: height / 2 + Math.sin((i / 20) * Math.PI * 4 + Math.PI) * 50
      }));

      function updateHelix() {
        svg.selectAll("*").remove();
        
        points.forEach((point, i) => {
          if (i < points.length - 1) {
            svg.append("line")
              .attr("x1", point.x)
              .attr("y1", point.y1)
              .attr("x2", points[i + 1].x)
              .attr("y2", points[i + 1].y1)
              .attr("stroke", "#00f0ff")
              .attr("stroke-width", 2);
              
            svg.append("line")
              .attr("x1", point.x)
              .attr("y1", point.y2)
              .attr("x2", points[i + 1].x)
              .attr("y2", points[i + 1].y2)
              .attr("stroke", "#ff00a0")
              .attr("stroke-width", 2);
          }
        });

        // Add animated DNA icons
        points.forEach((point, i) => {
          if (i % 3 === 0) {
            svg.append("g")
              .attr("transform", `translate(${point.x - 8}, ${point.y1 - 8})`)
              .append("path")
              .attr("d", "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z")
              .attr("fill", "#00f0ff")
              .attr("class", "animate-spin-slow");
          }
        });
      }

      updateHelix();
      
      d3.timer((elapsed) => {
        points.forEach((point, i) => {
          point.y1 = height / 2 + Math.sin((i / 20) * Math.PI * 4 + elapsed / 1000) * 50;
          point.y2 = height / 2 + Math.sin((i / 20) * Math.PI * 4 + elapsed / 1000 + Math.PI) * 50;
        });
        updateHelix();
      });
    }
  }, []);

  return (
    <div className="relative">
      <svg ref={d3Container} className="w-full max-w-lg mx-auto" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <Dna className="w-12 h-12 text-qblue animate-float" />
      </motion.div>
    </div>
  );
};

export default AnimatedDNA;