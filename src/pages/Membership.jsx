import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ChevronDown } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-secondary">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-5 px-6 text-left"
      >
        <span className="font-body text-lg text-light">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-accent" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0">
              <p className="font-body text-light/80">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Membership = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const plans = [
    {
      name: 'Monthly',
      price: '5000',
      features: [
        { text: 'Access to All Equipment', included: true },
        { text: 'Cardio, Weightlifting, CrossFit', included: true },
        { text: 'Locker Rooms & Showers', included: true },
        { text: 'Steam & Sauna Access', included: true },
        { text: 'Personal Training Session (1/month)', included: false },
      ],
      isBestValue: true,
    },
  ];

  const faqs = [
    {
      question: 'Can I freeze my membership?',
      answer: 'Yes, you can freeze your membership for up to 3 months per year. Please contact our front desk for assistance.'
    },
    {
      question: 'What are the gym hours?',
      answer: 'Our gym is open 24/7, so you can work out whenever it fits your schedule.'
    },
    {
      question: 'Is personal training included?',
      answer: 'Our Pro and Elite plans include personal training sessions. You can also purchase additional sessions separately.'
    },
    {
      question: 'Do you offer trial passes?',
      answer: 'Yes, we offer a free 3-day trial pass for new members. Sign up at the front desk to get started!'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Membership Plans - FitThenics Club</title>
        <meta name="description" content="Find the perfect membership plan at FitThenics Club. Transparent pricing and flexible options to help you achieve your fitness goals." />
      </Helmet>

      <div className="bg-primary text-white">
        {/* Header */}
        <header className="py-24 text-center bg-secondary">
          <AnimatedSection animation="fadeIn">
            <h1 className="font-display text-5xl md:text-7xl tracking-wider">
              Find Your <span className="text-accent">Perfect Plan</span>
            </h1>
            <p className="font-body text-xl text-light/80 mt-4 max-w-2xl mx-auto">
              Unlock your potential with a plan that's tailored to your fitness journey.
            </p>
          </AnimatedSection>
        </header>

        {/* Pricing Cards */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {plans.map((plan, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={index * 0.1}>
                <div className={`bg-secondary rounded-lg p-8 h-full transition-all duration-300 ${plan.isBestValue ? 'border-2 border-accent shadow-golden' : 'border-2 border-secondary'}`}>
                  {plan.isBestValue && (
                    <div className="text-center mb-4">
                      <span className="bg-accent text-primary font-bold font-body py-1 px-4 rounded-full text-sm">BEST VALUE</span>
                    </div>
                  )}
                  <h3 className="font-display text-4xl text-center text-white mb-2">{plan.name}</h3>
                  <p className="text-center mb-6">
                    <span className="font-display text-6xl text-accent">${plan.price}</span>
                    <span className="font-body text-light/70">/mo</span>
                  </p>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        {feature.included ? <Check className="w-6 h-6 text-accent mr-3" /> : <X className="w-6 h-6 text-light/30 mr-3" />}
                        <span className={`font-body ${feature.included ? 'text-light' : 'text-light/50'}`}>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    className={`w-full font-bold font-body py-3 rounded-full text-lg ${plan.isBestValue ? 'bg-accent text-primary' : 'bg-primary border-2 border-accent text-accent'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join Now
                  </motion.button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Timings Section */}
        <section className="py-20 px-4 bg-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fadeIn" className="mb-12">
              <h2 className="font-display text-4xl md:text-5xl">Operating <span className="text-accent">Hours</span></h2>
            </AnimatedSection>
            <AnimatedSection animation="fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-primary p-6 rounded-lg">
                  <h3 className="font-display text-2xl text-accent mb-4">General Hours</h3>
                  <ul className="font-body text-light/80 space-y-2">
                    <li><strong>Monday:</strong> 3:30 PM - 8:00 PM</li>
                    <li><strong>Tuesday:</strong> 3:30 PM - 8:00 PM</li>
                    <li><strong>Wednesday:</strong> 3:30 PM - 6:00 AM</li>
                    <li><strong>Thursday:</strong> 3:30 PM - 6:00 PM</li>
                    <li><strong>Friday:</strong> 3:30 PM - 8:00 PM</li>
                    <li><strong>Saturday:</strong> 3:30 PM - 8:00 PM</li>
                    <li><strong>Sunday:</strong> Closed</li>
                  </ul>
                </div>
                <div className="bg-primary p-6 rounded-lg">
                  <h3 className="font-display text-2xl text-accent mb-4">Ladies Timings</h3>
                  <p className="font-body text-light/80">Separate timings are available for ladies in the afternoon for complete privacy and comfort.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};

export default Membership;
