import React from 'react';
import { motion } from 'framer-motion';
import TypingAnimation from '../ui/TypingAnimation';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center text-foreground overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url('/hero.png')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-4"
        >
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary animate-fade-in">
            Elevate Your Fitness
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="mb-8"
        >
          <p className="font-body text-lg md:text-xl text-secondary-foreground max-w-3xl mx-auto">
            <TypingAnimation text="Unleash Your Potential. The Ultimate Training Experience." />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px hsl(var(--primary) / 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground font-heading font-bold py-4 px-8 rounded-lg transition-all duration-300 ease-in-out"
          >
            Join Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px hsl(var(--primary) / 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-primary text-primary font-heading font-bold py-4 px-8 rounded-lg transition-all duration-300 ease-in-out hover:bg-primary/10"
          >
            View Membership
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
