import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Brain, Cpu, Database } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-qdark p-8">
      <Logo />
      <AuthButtons />
      
      <div className="container mx-auto mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink"
        >
          Quantum Dashboard
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="text-qblue" />
                  Quantum Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-qblue">99.9%</div>
                <p className="text-gray-400">System Efficiency</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="text-qpink" />
                  AI Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-qpink">1.2M</div>
                <p className="text-gray-400">Operations/Second</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="text-qblue" />
                  Data Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-qblue">850TB</div>
                <p className="text-gray-400">Processed Today</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;