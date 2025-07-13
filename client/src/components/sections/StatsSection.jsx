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
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              animation="fade-in-up"
              delay={index * 0.1}
              className="text-center"
            >
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 0 20px hsl(var(--primary) / 0.4)' }}
                className="bg-secondary p-8 rounded-lg border border-primary/10 transition-all duration-300 hover:scale-105"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="font-heading text-6xl text-primary font-bold mb-2">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={3}
                  />
                </div>
                <p className="font-body text-secondary-foreground font-medium uppercase tracking-widest">
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
