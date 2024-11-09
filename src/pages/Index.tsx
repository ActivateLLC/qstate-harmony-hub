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
    <div className="min-h-screen bg-qdark">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-qblue/10 via-qdark to-qdark opacity-80" />
          <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-qdark to-transparent" />
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.1)_0%,transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-qblue via-white to-qpink animate-glow">
                Activate Qstate
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Enter the future of automated living. Experience the world's first quantum-powered state.
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-qblue to-transparent animate-pulse" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-qpink to-transparent opacity-20" />
      </section>

      {/* Life Areas Grid */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,160,0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink animate-glow">
              Essential Systems
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {lifeAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 hover:scale-105 transition-transform duration-300 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-qblue/10 to-qpink/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <div className={`${area.color} mb-6 relative`}>
                  <area.icon className="w-12 h-12 animate-glow" />
                  <div className="absolute -inset-2 bg-gradient-to-r from-qblue to-qpink opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-gray-400">
                  Advanced quantum automation for your {area.title.toLowerCase()} needs
                </p>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;