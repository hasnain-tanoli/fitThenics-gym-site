import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Shield, Users, Dumbbell, Star, Zap } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { useScroll, useTransform } from 'framer-motion';

// Parallax background component
const ParallaxImage = ({ src, yOffset = 100 }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, yOffset]);

  return (
    <motion.div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        y,
      }}
    />
  );
};

const About = () => {
  const missionText = "Our mission is to empower individuals to achieve their fittest selves through unparalleled support, state-of-the-art facilities, and a motivating community.".split(" ");

  const whyFitThenics = [
    {
      icon: Dumbbell,
      title: 'World-Class Equipment',
      description: 'Top-tier machines and free weights for every fitness goal.',
    },
    {
      icon: Star,
      title: 'Expert Trainers',
      description: 'Certified professionals dedicated to your success.',
    },
    {
      icon: Shield,
      title: 'Pristine Environment',
      description: 'Impeccably clean and hygienic workout spaces.',
    },
    {
      icon: Zap,
      title: 'Dynamic Classes',
      description: 'Engaging group sessions to keep you motivated.',
    },
  ];

  const leadershipTeam = [
    {
      name: 'Wajid Khan Tanoli',
      title: 'CEO & Founder',
      imgSrc: 'https://via.placeholder.com/300x300/000/FFEA00?text=WKT',
      bio: 'With over 15 years in the fitness industry, Wajid founded FitThenics with a vision to create a world-class fitness hub in Haripur.'
    },
    {
      name: 'Jane Doe',
      title: 'Head of Operations',
      imgSrc: 'https://via.placeholder.com/300x300/000/FFEA00?text=JD',
      bio: 'Jane ensures the smooth operation of all facilities, maintaining the highest standards of quality and member satisfaction.'
    },
    {
      name: 'John Smith',
      title: 'Lead Trainer',
      imgSrc: 'https://via.placeholder.com/300x300/000/FFEA00?text=JS',
      bio: 'A certified master trainer, John designs our innovative fitness programs and leads our team of expert coaches.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Journey - FitThenics Club</title>
        <meta name="description" content="Discover the story, mission, and values that define FitThenics Club. Meet our team and learn why we are the premier fitness destination." />
      </Helmet>

      <div className="bg-primary text-white">
        {/* Header */}
        <header className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
          <ParallaxImage src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" yOffset={-100} />
          <div className="absolute inset-0 bg-black/70 z-10" />
          <AnimatedSection animation="fadeIn" className="relative z-20 px-4">
            <h1 className="font-display text-6xl md:text-8xl tracking-wider">
              DEFINING <span className="text-accent">EXCELLENCE</span>
            </h1>
          </AnimatedSection>
        </header>

        {/* Storytelling Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideInLeft">
              <img src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop" alt="Founders" className="rounded-lg shadow-golden" />
            </AnimatedSection>
            <AnimatedSection animation="slideInRight">
              <h2 className="font-display text-4xl md:text-5xl mb-4">Our <span className="text-accent">Journey</span></h2>
              <p className="font-body text-light leading-relaxed">
                FitThenics Club Haripur is described as a well-managed gym with outstanding cleanliness, excellent facilities, and state-of-the-art machinery. It is an ideal place for fitness enthusiasts, offering a healthy and cooperative environment. We are dedicated to providing a wide range of services and facilities to help our members achieve their goals, fostering a supportive community where everyone can thrive.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 bg-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fadeIn">
              <h2 className="font-display text-4xl md:text-5xl mb-8">Our <span className="text-accent">Mission</span></h2>
              <p className="font-body text-2xl md:text-3xl text-light leading-tight">
                {missionText.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: i / 10,
                    }}
                    key={i}
                    className={`${el.toLowerCase().includes("empower") || el.toLowerCase().includes("unparalleled") || el.toLowerCase().includes("motivating") ? "text-accent font-bold" : ""}`}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Why FitThenics? */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeIn" className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl">Why <span className="text-accent">FitThenics?</span></h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {whyFitThenics.map((item, index) => (
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

        {/* Team Introduction */}
        <section className="py-20 px-4 bg-secondary">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeIn" className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl">Meet The <span className="text-accent">Leadership</span></h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadershipTeam.map((member, index) => (
                <AnimatedSection key={index} animation="slideUp" delay={index * 0.1}>
                  <div className="group relative overflow-hidden rounded-lg text-center">
                    <img src={member.imgSrc} alt={member.name} className="w-full h-auto transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="font-display text-3xl text-accent">{member.name}</h3>
                      <p className="font-body text-lg text-white mb-4">{member.title}</p>
                      <p className="font-body text-light/90 text-sm">{member.bio}</p>
                    </div>
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

export default About;
