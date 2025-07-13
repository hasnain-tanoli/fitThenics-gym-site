import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Ahmad Khan',
      role: 'Fitness Enthusiast',
      rating: 5,
      text: "The best fitness canter in Haripur. Fitthenics provide verity of facilities that include cardio, weight lifting, cross fit, boxing, MMA, steam, sauna and much more. Highly recommended",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Fatima Ali',
      role: 'Member',
      rating: 5,
      text: "Very clean, hygienic and every machine is working fine",
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Usman Tariq',
      role: 'Long-term Member',
      rating: 5,
      text: "First proper gym in the town with greatest ambiance and full facilities. Fitness, cardio, indoor sports, marshal arts, trainer, suana n steam bath etc. The place is very well managed with ample parking outside the gym building at Jahaz Chowk, Haripur. Timings are early morning to late night with separate timings for ladies in the afternoon. Sunday is an OFF usually. The cleanliness and workout atmosphere is up to the mark. The management is very humble, cooperative and provides healthy environment for its customers. An ideal place! 💪 Package charges are 5000/- per month only. Now, a rooftop restaurant facility has also been added for the member with an offer to families on Sundays only.",
      image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Sana Khan',
      role: 'New Member',
      rating: 5,
      text: "Excellent facilities with state of the art machinery. Cleanliness is outstanding",
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <AnimatedSection animation="fade-in-up" className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="font-body text-lg text-secondary-foreground max-w-3xl mx-auto">
            Hear from our members who have transformed their lives and achieved their fitness dreams with us.
          </p>
        </AnimatedSection>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 0 20px hsl(var(--primary) / 0.4)' }}
                className="bg-secondary rounded-lg p-8 h-full flex flex-col border border-primary/10 transition-all duration-300 hover:scale-105"
              >
                <Quote className="w-10 h-10 text-primary/50 mb-4" />
                <p className="font-body text-secondary-foreground mb-6 flex-grow">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center mt-auto">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary" />
                  <div>
                    <h4 className="font-heading text-xl text-foreground tracking-wider">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination-custom text-center mt-8"></div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
