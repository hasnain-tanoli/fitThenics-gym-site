import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import FacilitiesPreview from '../components/sections/FacilitiesPreview';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>FitThenics Club Haripur - Unleash the Beast Within</title>
        <meta name="description" content="Transform your body at Haripur's premier fitness center. Modern facilities, expert trainers, and programs for everyone." />
      </Helmet>
      
      <HeroSection />
      <StatsSection />
      <FacilitiesPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Home;