import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, User, Shield, Bell } from "lucide-react";
import Logo from "@/components/Logo";
import AuthButtons from "@/components/AuthButtons";

const Profile = () => {
  return (
    <div className="min-h-screen bg-qdark p-8">
      <Logo />
      <AuthButtons />
      
      <div className="container mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-qblue to-qpink">
            Quantum Profile
          </h1>

          <div className="grid gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="text-qblue" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Email</span>
                  <span className="text-white">user@example.com</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Member Since</span>
                  <span className="text-white">January 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="text-qpink" />
                  Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Language</span>
                  <span className="text-white">English</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Time Zone</span>
                  <span className="text-white">UTC-8</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;