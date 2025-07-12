import React from 'react';
import { motion } from 'framer-motion';
import TypingAnimation from '../ui/TypingAnimation';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-accent uppercase tracking-wider">
            Elevate Your Fitness
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          <p className="font-body text-lg md:text-xl lg:text-2xl text-light max-w-3xl mx-auto mt-4">
            <TypingAnimation text="Unleash Your Potential. The Ultimate Training Experience." />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#e6d300', boxShadow: '0 0 20px #FFEA00' }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-primary font-body font-bold py-3 px-8 rounded-full uppercase tracking-wider transition-all duration-300"
          >
            Join Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, color: '#000000', backgroundColor: '#FFEA00', borderColor: '#FFEA00' }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-accent text-accent font-body font-bold py-3 px-8 rounded-full uppercase tracking-wider transition-all duration-300"
          >
            View Membership
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
