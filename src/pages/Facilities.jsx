import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Heart, Wind, Droplets, ShoppingCart, Lock, Users, Bath } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const Facilities = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const facilities = [
    {
      title: 'Weightlifting',
      description: 'State-of-the-art strength training equipment for all levels.',
      imgSrc: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2071&auto=format&fit=crop',
    },
    {
      title: 'Cardio Deck',
      description: 'A full range of cardio machines to get your heart pumping.',
      imgSrc: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'CrossFit & MMA',
      description: 'Dedicated space for high-intensity CrossFit and MMA training.',
      imgSrc: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Boxing Ring',
      description: 'Train like a champion in our professional-grade boxing area.',
      imgSrc: 'https://images.unsplash.com/photo-1598632640487-6ea4a4e8b963?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  const amenities = [
    {
      icon: Droplets,
      title: 'Steam & Sauna',
      description: 'Relax and recover in our modern steam and sauna baths.',
    },
    {
      icon: Wind,
      title: 'Rooftop Restaurant',
      description: 'Enjoy healthy meals with a view. Open to families on Sundays.',
    },
    {
      icon: ShoppingCart,
      title: 'Pro Shop',
      description: 'Get the latest gear and apparel from top fitness brands.',
    },
    {
      icon: Lock,
      title: 'Secure Lockers',
      description: 'Keep your belongings safe while you work out.',
    },
    {
      icon: Users,
      title: 'Ladies Timings',
      description: 'Separate timings for ladies in the afternoon for privacy and comfort.',
    },
    {
      icon: Bath,
      title: 'Restrooms',
      description: 'Clean and well-maintained restrooms available for all members.',
    },
  ];

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      <Helmet>
        <title>Our Facilities - FitThenics Club</title>
        <meta name="description" content="Explore the world-class facilities at FitThenics Club, from our state-of-the-art gym floor to our serene yoga studio." />
      </Helmet>

      <div className="bg-primary text-white">
        {/* Header */}
        <header className="py-24 text-center bg-secondary">
          <AnimatedSection animation="fadeIn">
            <h1 className="font-display text-5xl md:text-7xl tracking-wider">
              Explore Our <span className="text-accent">World-Class</span> Facilities
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mt-4" />
          </AnimatedSection>
        </header>

        {/* Interactive Gallery */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Main Display */}
            <AnimatedSection animation="fadeIn" className="mb-8 relative h-[60vh] w-full overflow-hidden rounded-lg shadow-golden">
              <AnimatePresence initial={false}>
                <motion.img
                  key={selectedImageIndex}
                  src={facilities[selectedImageIndex].imgSrc}
                  alt={facilities[selectedImageIndex].title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h2 className="font-display text-4xl text-accent">{facilities[selectedImageIndex].title}</h2>
                <p className="font-body text-lg text-light max-w-lg">{facilities[selectedImageIndex].description}</p>
              </div>
            </AnimatedSection>

            {/* Thumbnail Grid */}
            <AnimatedSection animation="slideUp">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {facilities.map((facility, index) => (
                  <motion.div
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`relative overflow-hidden rounded-lg cursor-pointer border-2 transition-all duration-300 ${selectedImageIndex === index ? 'border-accent' : 'border-transparent'}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src={facility.imgSrc} alt={facility.title} className="w-full h-32 object-cover" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <h3 className="font-display text-xl text-white">{facility.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-20 px-4 bg-secondary">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeIn" className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl">Key <span className="text-accent">Amenities</span></h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {amenities.map((item, index) => (
                <AnimatedSection key={index} animation="slideUp" delay={index * 0.1}>
                  <div className="text-center p-6 group">
                    <div className="flex justify-center mb-4">
                      <item.icon className="w-16 h-16 text-light transition-colors duration-300 group-hover:text-accent" />
                    </div>
                    <h3 className="font-display text-2xl mb-2 text-light transition-colors duration-300 group-hover:text-accent">{item.title}</h3>
                    <p className="font-body text-light/80">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Facilities;
