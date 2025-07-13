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
    { name: 'Forum', path: '/forum' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-lg shadow-xl shadow-primary/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/assets/Logo.png" alt="FitThenics Club Logo" className="h-16 w-auto drop-shadow-lg" />
            <span className="font-heading text-4xl text-foreground tracking-normal">
              FitThenics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-body font-medium uppercase tracking-widest text-sm transition-colors duration-300 hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-secondary-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="bg-transparent border border-primary text-primary font-heading font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-primary/10 text-sm"
            >
              Login
            </Link>
            <Link
              to="/membership"
              className="bg-primary text-primary-foreground font-heading font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out text-sm"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-foreground hover:text-primary transition-colors"
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
            className="md:hidden bg-background/95 backdrop-blur-md"
          >
            <div className="px-4 py-6 space-y-6 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block font-body font-medium uppercase tracking-widest text-lg transition-colors duration-300 hover:text-primary ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-secondary-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="bg-transparent border border-primary text-primary font-heading font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-primary/10 w-full text-lg"
              >
                Login
              </Link>
              <Link
                to="/membership"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-primary-foreground font-heading font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out w-full text-lg"
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
