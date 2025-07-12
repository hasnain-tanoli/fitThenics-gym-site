import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react'; // Using Zap for a more energetic feel

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Membership', path: '/membership' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/90 backdrop-blur-lg shadow-xl shadow-accent/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/assets/Logo.png" alt="FitThenics Club Logo" className="h-16 w-auto drop-shadow-lg shadow-white/50" />
            <span className="font-display text-4xl text-white tracking-normal">
              FitThenics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-body font-medium uppercase tracking-widest text-sm transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-accent'
                    : 'text-light hover:text-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/membership"
              className="bg-accent text-primary font-body font-bold py-2 px-6 rounded-full uppercase text-sm tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-light hover:text-accent transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary/95 backdrop-blur-md"
          >
            <div className="px-4 py-6 space-y-6 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block font-body font-medium uppercase tracking-widest text-lg transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-accent'
                      : 'text-light hover:text-accent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/membership"
                onClick={() => setIsOpen(false)}
                className="w-full bg-accent text-primary font-body font-bold py-3 rounded-full uppercase tracking-wider mt-4 text-lg block text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
