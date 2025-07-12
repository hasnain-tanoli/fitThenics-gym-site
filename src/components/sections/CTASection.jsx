import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const CTASection = () => {
  return (
    <section 
      className="py-24 bg-secondary"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFEA00' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn" className="text-center bg-primary p-12 rounded-lg shadow-2xl border border-accent/20">
          <h2 className="font-display text-5xl lg:text-7xl text-white uppercase tracking-wider mb-4">
            Your <span className="text-accent">Transformation</span> Awaits
          </h2>
          <p className="font-body text-lg text-light/70 max-w-2xl mx-auto mb-10">
            Stop waiting. Start doing. Become the strongest version of yourself. Join a community that will push you to your limits and support you every step of the way.
          </p>

          <div className="flex justify-center">
            <Link to="/membership">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px #FFEA00' }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-primary font-body font-bold py-4 px-10 rounded-full uppercase tracking-wider transition-all duration-300 flex items-center space-x-3 text-lg"
              >
                <span>Become a Member</span>
                <ArrowRight size={22} />
              </motion.button>
            </Link>
          </div>
          
          <p className="font-body text-sm text-light/50 mt-8">
            Special introductory offers available for a limited time.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
