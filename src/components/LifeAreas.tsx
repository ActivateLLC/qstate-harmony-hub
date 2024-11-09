import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AreaCard from "./life-areas/AreaCard";
import { lifeAreas } from "./life-areas/areaData";

const LifeAreas = () => {
  const navigate = useNavigate();

  const handleAreaClick = (title: string) => {
    if (title === "Health & Nutrition") {
      navigate("/health-nutrition-description");
    }
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,160,0.1)_0%,transparent_50%)]" />
      </div>
      <div className="container mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink animate-glow">
            Essential Systems
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {lifeAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ 
                once: true, 
                margin: "-20%",
                amount: 0.4
              }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <AreaCard
                title={area.title}
                description={area.description}
                icon={area.icon}
                color={area.color}
                onClick={() => handleAreaClick(area.title)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAreas;