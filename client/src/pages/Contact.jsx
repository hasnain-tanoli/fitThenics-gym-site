import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const Contact = () => {
  const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email('Invalid email format'),
    message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
  });

  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
  };

  const contactDetails = [
    { icon: Phone, text: '+92 335 4455789', link: 'tel:+923354455789' },
    { icon: Mail, text: 'contact@fitthenics.com', link: 'mailto:contact@fitthenics.com' },
    { icon: MapPin, text: 'Sawat chuwk, Darvesh, Harīpur, 22640, Pakistan', link: 'https://www.google.com/maps/place/FitThenics+Club+Haripur/@33.9947289,72.9321983,17z/data=!3m2!1e3!4b1!4m6!3m5!1s0x38dfa67c19621e3d:0x1b9f5a5b4b0b1e3c!8m2!3d33.9947289!4d72.9347732!16s%2Fg%2F11c2111111?entry=ttu' },
  ];

  const socialIcons = [
    { icon: Instagram, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - FitThenics Club</title>
        <meta name="description" content="Get in touch with FitThenics Club. We're here to help with any questions you have about memberships, training, or our facilities." />
      </Helmet>

      <div className="bg-background text-foreground min-h-screen">
        {/* Header */}
        <header className="py-24 text-center bg-secondary">
          <AnimatedSection animation="fade-in-up">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="font-body text-lg text-secondary-foreground mt-4">We're here to help.</p>
          </AnimatedSection>
        </header>

        {/* Main Content */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection animation="fade-in-up">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-secondary p-8 rounded-lg shadow-lg shadow-primary/20">
                <div>
                  <label htmlFor="name" className="font-body text-secondary-foreground mb-2 block">Name</label>
                  <input
                    id="name"
                    {...register('name')}
                    className="w-full bg-background p-4 rounded-md border border-primary/20 focus:border-primary focus:ring-primary focus:outline-none transition-all text-foreground"
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-primary mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="font-body text-secondary-foreground mb-2 block">Email</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="w-full bg-background p-4 rounded-md border border-primary/20 focus:border-primary focus:ring-primary focus:outline-none transition-all text-foreground"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-primary mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="font-body text-secondary-foreground mb-2 block">Message</label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows="5"
                    className="w-full bg-background p-4 rounded-md border border-primary/20 focus:border-primary focus:ring-primary focus:outline-none transition-all resize-none text-foreground"
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="text-primary mt-1">{errors.message.message}</p>}
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-primary-foreground font-heading font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out w-full"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px hsl(var(--primary) / 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
                {isSubmitSuccessful && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-primary text-center mt-4 flex items-center justify-center"
                  >
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Message Sent! We'll be in touch soon.
                  </motion.p>
                )}
              </form>
            </AnimatedSection>

            {/* Contact Info & Map */}
            <AnimatedSection animation="fade-in-up" delay={0.2} className="space-y-12">
              {/* Contact Details */}
              <div className="space-y-6">
                {contactDetails.map((item, index) => (
                  <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group transition-transform duration-300 hover:scale-105">
                    <item.icon className="w-8 h-8 text-primary transition-colors duration-300 group-hover:text-foreground" />
                    <span className="font-body text-lg text-secondary-foreground transition-colors duration-300 group-hover:text-primary">{item.text}</span>
                  </a>
                ))}
              </div>

              {/* Interactive Map */}
              <div className="h-80 rounded-lg overflow-hidden shadow-lg shadow-primary/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.940338399964!2d72.9321983152136!3d33.9947289806224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa67c19621e3d%3A0x1b9f5a5b4b0b1e3c!2sFitThenics%20Club%20Haripur!5e0!3m2!1sen!2s!4v1672864594377!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  aria-label="FitThenics Club Haripur Location on Google Maps"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FitThenics Club Location"
                ></iframe>
              </div>

              {/* Social Media */}
              <div className="flex space-x-6 justify-center lg:justify-start">
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: 'hsl(var(--primary))' }}
                    className="text-secondary-foreground transition-colors duration-300"
                  >
                    <social.icon className="w-8 h-8" />
                  </motion.a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
