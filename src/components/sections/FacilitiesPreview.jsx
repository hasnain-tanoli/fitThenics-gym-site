import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Dumbbell, Heart, Users, Zap } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const FacilitiesPreview = () => {
  const facilities = [
    {
      icon: Dumbbell,
      title: 'Strength Arena',
      description: 'State-of-the-art equipment for building muscle and power.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: Heart,
      title: 'Cardio Deck',
      description: 'Advanced cardio machines for optimal heart health and endurance.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: Zap,
      title: 'Functional Zone',
      description: 'Dynamic spaces for functional training and HIIT workouts.',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Engaging group sessions led by our world-class instructors.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <h2 className="font-display text-5xl lg:text-6xl text-white uppercase tracking-wider mb-4">
            World-Class <span className="text-accent">Facilities</span>
          </h2>
          <p className="font-body text-lg text-light/70 max-w-3xl mx-auto">
            Experience the finest equipment and training environments, meticulously designed for those who are serious about their fitness goals.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <AnimatedSection
              key={index}
              animation="slideUp"
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-lg bg-primary border border-light/10 h-full flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300" />
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <facility.icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-2">
                    {facility.title}
                  </h3>
                  <p className="font-body text-light/70 text-sm flex-grow">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeIn" delay={0.4} className="text-center mt-16">
          <Link to="/facilities">
            <motion.button
              whileHover={{ scale: 1.05, color: '#000000', backgroundColor: '#FFEA00', borderColor: '#FFEA00' }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-accent text-accent font-body font-bold py-3 px-8 rounded-full uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>Explore All Facilities</span>
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FacilitiesPreview;
