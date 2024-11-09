import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Stethoscope, Wallet, Salad, GraduationCap, Home, Car, 
  Shield, MessageSquare, Zap, Tv, Briefcase, Users
} from "lucide-react";

const lifeAreas = [
  { 
    title: "Healthcare", 
    icon: Stethoscope, 
    color: "text-qblue",
    description: "Revolutionary quantum-powered health monitoring that adapts to your unique wellness journey"
  },
  { 
    title: "Banking & Finance", 
    icon: Wallet, 
    color: "text-qpink",
    description: "Seamlessly integrated financial solutions that transform how you interact with wealth"
  },
  { 
    title: "Health & Nutrition", 
    icon: Salad, 
    color: "text-qblue",
    description: "Personalized nutrition intelligence that elevates your daily wellness experience"
  },
  { 
    title: "Education", 
    icon: GraduationCap, 
    color: "text-qpink",
    description: "Immersive learning experiences that unlock your full potential"
  },
  { 
    title: "Housing", 
    icon: Home, 
    color: "text-qblue",
    description: "Intelligent living spaces that respond intuitively to your lifestyle"
  },
  { 
    title: "Transportation", 
    icon: Car, 
    color: "text-qpink",
    description: "Effortless mobility solutions that redefine your journey experience"
  },
  { 
    title: "Security", 
    icon: Shield, 
    color: "text-qblue",
    description: "Advanced protection systems that seamlessly safeguard your digital life"
  },
  { 
    title: "Communication", 
    icon: MessageSquare, 
    color: "text-qpink",
    description: "Breakthrough connectivity that brings people closer in profound new ways"
  },
  { 
    title: "Energy", 
    icon: Zap, 
    color: "text-qblue",
    description: "Sustainable power solutions that harmoniously energize your world"
  },
  { 
    title: "Entertainment", 
    icon: Tv, 
    color: "text-qpink",
    description: "Extraordinary experiences that transport you to new realms of delight"
  },
  { 
    title: "Work & Career", 
    icon: Briefcase, 
    color: "text-qblue",
    description: "Innovative workspace solutions that elevate your professional journey"
  },
  { 
    title: "Social Connection", 
    icon: Users, 
    color: "text-qpink",
    description: "Meaningful interactions that create lasting bonds in remarkable ways"
  }
];

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
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 50
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="glass-card p-8 hover:scale-105 transition-transform duration-300 relative group cursor-pointer"
              onClick={() => handleAreaClick(area.title)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-qblue/10 to-qpink/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <motion.div 
                className={`${area.color} mb-6 relative`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <area.icon className="w-12 h-12 animate-glow" />
                <div className="absolute -inset-2 bg-gradient-to-r from-qblue to-qpink opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity" />
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold mb-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {area.title}
              </motion.h3>
              <p className="text-gray-400">
                {area.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAreas;