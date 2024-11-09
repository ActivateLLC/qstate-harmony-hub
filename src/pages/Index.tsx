import { motion } from "framer-motion";
import { 
  Stethoscope, Wallet, Salad, GraduationCap, Home, Car, 
  Shield, MessageSquare, Zap, Tv, Briefcase, Users
} from "lucide-react";

const lifeAreas = [
  { title: "Healthcare", icon: Stethoscope, color: "text-qblue" },
  { title: "Banking & Finance", icon: Wallet, color: "text-qpink" },
  { title: "Health & Nutrition", icon: Salad, color: "text-qblue" },
  { title: "Education", icon: GraduationCap, color: "text-qpink" },
  { title: "Housing", icon: Home, color: "text-qblue" },
  { title: "Transportation", icon: Car, color: "text-qpink" },
  { title: "Security", icon: Shield, color: "text-qblue" },
  { title: "Communication", icon: MessageSquare, color: "text-qpink" },
  { title: "Energy", icon: Zap, color: "text-qblue" },
  { title: "Entertainment", icon: Tv, color: "text-qpink" },
  { title: "Work & Career", icon: Briefcase, color: "text-qblue" },
  { title: "Social Connection", icon: Users, color: "text-qpink" }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-qdark z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-text bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink">
              Welcome to Qstate
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of automated living across all essential aspects of life.
              Welcome to the world's first quantum-powered state.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Life Areas Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 glow-text text-white">
            Essential Life Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {lifeAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className={`${area.color} mb-4`}>
                  <area.icon className="w-12 h-12 animate-glow" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-gray-400">
                  Automated solutions for your {area.title.toLowerCase()} needs
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;