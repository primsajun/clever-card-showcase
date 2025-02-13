
import { motion } from "framer-motion";

const StatsCard = () => {
  return (
    <div className="min-h-screen w-full bg-card-dark flex items-center justify-center p-4 sm:p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl bg-card-dark rounded-2xl overflow-hidden shadow-2xl flex flex-col-reverse lg:flex-row"
      >
        <div className="p-8 lg:p-16 lg:w-1/2 flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Get <span className="text-card-accent">insights</span> that help your business grow.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-card-text text-lg mb-12 leading-relaxed"
          >
            Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">10k+</h2>
              <p className="text-card-text uppercase text-sm tracking-wider">Companies</p>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">314</h2>
              <p className="text-card-text uppercase text-sm tracking-wider">Templates</p>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">12M+</h2>
              <p className="text-card-text uppercase text-sm tracking-wider">Queries</p>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:w-1/2 relative">
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
