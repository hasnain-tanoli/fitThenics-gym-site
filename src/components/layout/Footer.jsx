import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com/fithenicsclub', label: 'Facebook' },
    { icon: Instagram, url: 'https://instagram.com/fithenicsclub', label: 'Instagram' },
    { icon: Youtube, url: 'https://youtube.com/fithenicsclub', label: 'YouTube' },
  ];

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Membership', path: '/membership' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-secondary border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Socials */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <Zap className="h-8 w-8 text-accent" />
              <span className="font-display text-3xl text-white tracking-wider">
                FitThenics
              </span>
            </Link>
            <p className="font-body text-light/70">
              The ultimate training experience for those who demand the best.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#FFEA00' }}
                  className="text-light/70 transition-colors"
                  aria-label={label}
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-white uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-body text-light/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-white uppercase tracking-widest">Contact Us</h3>
            <div className="space-y-4 font-body text-light/70">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span>123 Fitness Avenue, Metropolis, 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span>contact@fithenics.com</span>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-white uppercase tracking-widest">Stay Updated</h3>
            <p className="font-body text-light/70">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full bg-primary/50 border border-light/20 rounded-l-md py-2 px-4 text-light focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent text-primary font-bold py-2 px-4 rounded-r-md hover:bg-yellow-300 transition-colors">
                Go
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="font-body text-light/50 text-sm">
            &copy; {currentYear} FitThenics Club. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-light/50 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-light/50 hover:text-accent text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
