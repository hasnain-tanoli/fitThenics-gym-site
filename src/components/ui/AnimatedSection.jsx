import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({
  children,
  className = '',
  animation = 'slideUp',
  delay = 0,
  duration = 0.6
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const animations = {
    slideUp: {
      initial: { y: 60, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    },
    slideDown: {
      initial: { y: -60, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    },
    slideLeft: {
      initial: { x: 60, opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
    slideRight: {
      initial: { x: -60, opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    scale: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
    },
  };

  const selectedAnimation = animations[animation] || animations.slideUp;

  return (
    <motion.div
      ref={ref}
      initial={selectedAnimation.initial}
      animate={inView ? selectedAnimation.animate : selectedAnimation.initial}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;