import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import CountUp from '../ui/CountUp';
import { Users, Trophy, Award, Target } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: 1000,
      suffix: '+',
      label: 'Elite Members',
    },
    {
      icon: Trophy,
      value: 50,
      suffix: '+',
      label: 'Expert Trainers',
    },
    {
      icon: Award,
      value: 98,
      suffix: '%',
      label: 'Success Rate',
    },
    {
      icon: Target,
      value: 15,
      suffix: '+',
      label: 'Years of Excellence',
    }
  ];

  return (
    <section className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              animation="slideUp"
              delay={index * 0.1}
              className="text-center"
            >
              <motion.div
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(255, 234, 0, 0.1)' }}
                className="bg-secondary p-8 rounded-lg border border-light/10 transition-all duration-300"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-accent" />
                <div className="font-display text-6xl text-accent font-bold mb-2">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={3}
                  />
                </div>
                <p className="font-body text-light/70 font-medium uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
