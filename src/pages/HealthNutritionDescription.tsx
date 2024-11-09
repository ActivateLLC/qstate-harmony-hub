import { motion } from "framer-motion";
import { useRive } from '@rive-app/react-canvas';
import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Brain, Heart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import healthAnimation from '../assets/animations/health.json';
import { useEffect, useRef } from "react";
import * as d3 from 'd3';

const HealthNutritionDescription = () => {
  const navigate = useNavigate();
  const { RiveComponent } = useRive({
    src: 'https://public.rive.app/community/runtime-files/2244-4437-animated-login-screen.riv',
    autoplay: true,
  });

  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      const svg = d3.select(d3Container.current);
      
      // Create DNA helix animation
      const width = 400;
      const height = 200;
      
      svg.attr('width', width).attr('height', height);
      
      const points = Array.from({ length: 20 }, (_, i) => ({
        x: (i / 20) * width,
        y1: height / 2 + Math.sin((i / 20) * Math.PI * 4) * 50,
        y2: height / 2 + Math.sin((i / 20) * Math.PI * 4 + Math.PI) * 50
      }));

      function updateHelix() {
        svg.selectAll('*').remove();
        
        points.forEach((point, i) => {
          if (i < points.length - 1) {
            svg.append('line')
              .attr('x1', point.x)
              .attr('y1', point.y1)
              .attr('x2', points[i + 1].x)
              .attr('y2', points[i + 1].y1)
              .attr('stroke', '#00f0ff')
              .attr('stroke-width', 2);
              
            svg.append('line')
              .attr('x1', point.x)
              .attr('y1', point.y2)
              .attr('x2', points[i + 1].x)
              .attr('y2', points[i + 1].y2)
              .attr('stroke', '#ff00a0')
              .attr('stroke-width', 2);
              
            svg.append('line')
              .attr('x1', point.x)
              .attr('y1', point.y1)
              .attr('x2', point.x)
              .attr('y2', point.y2)
              .attr('stroke', '#ffffff20')
              .attr('stroke-width', 1);
          }
        });
      }

      updateHelix();
      
      // Animate the helix
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
    <div className="min-h-screen bg-qdark text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,160,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink animate-glow">
              Quantum Health & Nutrition
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of personalized wellness through quantum computing and AI-driven insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 space-y-6"
          >
            <h2 className="text-2xl font-bold text-qblue flex items-center gap-2">
              <Brain className="w-6 h-6" /> Meal Planning & Tracking
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-qblue mt-1 flex-shrink-0" />
                Daily meal scheduler with smart suggestions
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-qblue mt-1 flex-shrink-0" />
                Calorie and macro tracking with real-time insights
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-qblue mt-1 flex-shrink-0" />
                AI-powered recipe suggestions based on preferences
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-qblue mt-1 flex-shrink-0" />
                Automated shopping list generation
              </li>
            </ul>
            <div className="h-48 relative overflow-hidden rounded-xl">
              <RiveComponent className="w-full h-full" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8 space-y-6"
          >
            <h2 className="text-2xl font-bold text-qpink flex items-center gap-2">
              <Heart className="w-6 h-6" /> Progress Tracking
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-qpink mt-1 flex-shrink-0" />
                Comprehensive body measurements tracking
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-qpink mt-1 flex-shrink-0" />
                Secure before/after photo storage
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-qpink mt-1 flex-shrink-0" />
                Goal setting with milestone tracking
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-qpink mt-1 flex-shrink-0" />
                Gamified achievement system with rewards
              </li>
            </ul>
            <div className="h-48 relative overflow-hidden rounded-xl">
              <Lottie animationData={healthAnimation} loop={true} />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-8 mb-20"
        >
          <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Leaf className="w-6 h-6 text-qblue" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink">
              Smart Recommendations
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2 text-qblue">AI-Powered Insights</h3>
              <p className="text-gray-300">Personalized meal suggestions based on your preferences and goals</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2 text-qpink">Supplement Guide</h3>
              <p className="text-gray-300">Custom supplement recommendations for optimal nutrition</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2 text-qblue">Wellness Integration</h3>
              <p className="text-gray-300">Hydration reminders and exercise nutrition planning</p>
            </div>
          </div>
          <div className="flex justify-center">
            <svg ref={d3Container} className="w-full max-w-lg" />
          </div>
        </motion.div>

        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Nutrition?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us and experience the future of personalized nutrition planning.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <Button
              onClick={() => navigate('/login')}
              className="bg-gradient-to-r from-qblue to-qpink hover:opacity-90 text-white px-8 py-6 rounded-full text-lg font-bold group"
            >
              Get Started Now
              <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HealthNutritionDescription;