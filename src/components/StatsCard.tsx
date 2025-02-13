
import { motion } from "framer-motion";

const StatsCard = () => {
  return (
    <div className="min-h-screen w-full bg-card-dark flex items-center justify-center p-4 sm:p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl bg-card-dark rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-card-accent mix-blend-multiply opacity-75"></div>
          <img 
            src="/lovable-uploads/e77ce123-6f53-49db-8e2a-64b5746fb845.png"
            alt="Team working on analytics"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default StatsCard;
