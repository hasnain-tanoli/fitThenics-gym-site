import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const Trainers = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const trainers = [
    {
      name: 'Alex Mercer',
      specialty: 'Strength & Conditioning',
      imgSrc: 'https://images.unsplash.com/photo-1574680096145-f0545020ceb7?q=80&w=800&auto=format&fit=crop',
      qualifications: ['NSCA-CSCS', 'M.S. Exercise Science'],
      bio: 'Alex is a seasoned strength coach with a decade of experience in helping athletes and fitness enthusiasts reach their peak performance. His philosophy is built on a foundation of scientific principles and personalized programming.'
    },
    {
      name: 'Maria Rodriguez',
      specialty: 'Yoga & Mobility',
      imgSrc: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=800&auto=format&fit=crop',
      qualifications: ['E-RYT 500', 'Functional Range Conditioning'],
      bio: 'Maria believes that movement is medicine. She combines traditional yoga with modern mobility techniques to help clients build resilience, reduce pain, and improve their overall quality of life.'
    },
    {
      name: 'David Chen',
      specialty: 'HIIT & Functional Fitness',
      imgSrc: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800&auto=format&fit=crop',
      qualifications: ['ACE Certified Personal Trainer', 'CrossFit Level 2'],
      bio: 'David brings infectious energy to every session. He specializes in high-intensity interval training (HIIT) and functional fitness to help clients burn fat, build muscle, and improve their athletic capacity.'
    },
  ];

  const openModal = (trainer) => {
    setSelectedTrainer(trainer);
  };

  const closeModal = () => {
    setSelectedTrainer(null);
  };

  return (
    <>
      <Helmet>
        <title>Meet Our Expert Team - FitThenics Club</title>
        <meta name="description" content="Our team of certified, professional trainers at FitThenics Club is here to guide you on your fitness journey. Find the perfect trainer for your goals." />
      </Helmet>

      <div className="bg-primary text-white">
        {/* Header */}
        <header className="py-24 text-center bg-secondary">
          <AnimatedSection animation="fadeIn">
            <h1 className="font-display text-5xl md:text-7xl tracking-wider">
              Meet Our <span className="text-accent">Expert Team</span>
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mt-4" />
          </AnimatedSection>
        </header>

        {/* Trainer Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={index * 0.1}>
                <motion.div
                  onClick={() => openModal(trainer)}
                  className="group relative bg-secondary rounded-lg overflow-hidden cursor-pointer shadow-lg"
                  whileHover={{ y: -10 }}
                >
                  <img src={trainer.imgSrc} alt={trainer.name} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-display text-3xl text-accent transition-colors duration-300 group-hover:text-white">{trainer.name}</h3>
                    <p className="font-body text-lg text-light">{trainer.specialty}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <AnimatedSection animation="fadeIn" className="text-center">
            <div className="bg-black p-10 rounded-lg max-w-4xl mx-auto">
              <h2 className="font-display text-4xl md:text-5xl text-accent mb-4">Find Your Perfect Trainer</h2>
              <p className="font-body text-xl text-light mb-8">Ready to take the next step? Let us match you with a trainer who fits your goals and personality.</p>
              <motion.button
                className="bg-accent text-primary font-bold font-body py-3 px-10 rounded-full text-lg"
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #FFEA00" }}
                whileTap={{ scale: 0.9 }}
              >
                Book a Free Consultation
              </motion.button>
            </div>
          </AnimatedSection>
        </section>
      </div>

      {/* Trainer Modal */}
      <AnimatePresence>
        {selectedTrainer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-secondary rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={closeModal} className="absolute top-4 right-4 text-light hover:text-accent transition-colors">
                <X size={28} />
              </button>
              <div className="text-center">
                <img src={selectedTrainer.imgSrc} alt={selectedTrainer.name} className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-accent mb-4" />
                <h2 className="font-display text-4xl text-accent">{selectedTrainer.name}</h2>
                <p className="font-body text-xl text-light mb-6">{selectedTrainer.specialty}</p>
              </div>
              <div className="mb-6">
                <h3 className="font-display text-2xl text-white mb-2">Bio</h3>
                <p className="font-body text-light/90">{selectedTrainer.bio}</p>
              </div>
              <div className="mb-8">
                <h3 className="font-display text-2xl text-white mb-2">Qualifications</h3>
                <ul className="list-disc list-inside font-body text-light/90">
                  {selectedTrainer.qualifications.map((q, i) => <li key={i}>{q}</li>)}
                </ul>
              </div>
              <motion.button
                className="w-full bg-accent text-primary font-bold font-body py-3 rounded-full text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Session with {selectedTrainer.name.split(' ')[0]}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Trainers;
