import React from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '../components/ui/AnimatedSection';
import MembershipForm from '../components/forms/MembershipForm';

const Membership = () => {
  return (
    <>
      <Helmet>
        <title>Membership - FitThenics Club</title>
        <meta name="description" content="Join FitThenics Club and start your fitness journey. Fill out the form to get started." />
      </Helmet>

      <div className="bg-background text-foreground">
        {/* Header */}
        <header className="py-24 text-center bg-secondary">
          <AnimatedSection animation="fade-in-up">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Find Your <span className="text-primary">Perfect Plan</span>
            </h1>
            <p className="font-body text-lg text-secondary-foreground mt-4 max-w-2xl mx-auto">
              Choose the membership that best fits your fitness goals and lifestyle.
            </p>
          </AnimatedSection>
        </header>

        {/* Pricing Cards Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Pricing Card 1 */}
            <AnimatedSection animation="fade-in-up" delay={0.1}>
              <div className="bg-secondary p-8 rounded-lg text-center border border-primary/10 shadow-lg shadow-primary/10 transition-transform duration-300 hover:scale-105">
                <h3 className="font-heading text-3xl text-foreground mb-4">Standard</h3>
                <p className="font-heading text-6xl text-primary mb-6">$49<span className="text-secondary-foreground text-xl">/month</span></p>
                <ul className="text-left font-body text-secondary-foreground space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-primary mr-2">✔</span> Access to Gym Floor</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✔</span> Basic Group Classes</li>
                  <li className="flex items-center"><span className="text-secondary-foreground/50 mr-2">✖</span> Personal Trainer Sessions</li>
                  <li className="flex items-center"><span className="text-secondary-foreground/50 mr-2">✖</span> Steam & Sauna Access</li>
                </ul>
                <button onClick={() => document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' })} className="bg-transparent border border-primary text-primary font-heading font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-primary/10 w-full">Join Now</button>
              </div>
            </AnimatedSection>

            {/* Example Pricing Card 2 (Recommended) */}
            <AnimatedSection animation="fade-in-up" delay={0.2}>
              <div className="bg-secondary p-8 rounded-lg text-center border-2 border-primary shadow-lg shadow-primary/20 relative transition-transform duration-300 hover:scale-105">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-bold py-1 px-4 rounded-full text-sm uppercase">Best Value</div>
                <h3 className="font-heading text-3xl text-foreground mb-4">Pro</h3>
                <p className="font-heading text-6xl text-primary mb-6">$79<span className="text-secondary-foreground text-xl">/month</span></p>
                <ul className="text-left font-body text-secondary-foreground space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-primary mr-2">✔</span> All Standard Features</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✔</span> 2 Personal Trainer Sessions/month</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✔</span> Steam & Sauna Access</li>
                  <li className="flex items-center"><span className="text-secondary-foreground/50 mr-2">✖</span> Exclusive Workshops</li>
                </ul>
                <button onClick={() => document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' })} className="bg-primary text-primary-foreground font-heading font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out w-full animate-pulse">Join Now</button>
              </div>
            </AnimatedSection>

            {/* Example Pricing Card 3 */}
            <AnimatedSection animation="fade-in-up" delay={0.3}>
              <div className="bg-secondary p-8 rounded-lg text-center border border-primary/10 shadow-lg shadow-primary/10 transition-transform duration-300 hover:scale-105">
                <h3 className="font-heading text-3xl text-foreground mb-4">Elite</h3>
                <p className="font-heading text-6xl text-primary mb-6">$129<span className="text-secondary-foreground text-xl">/month</span></p>
                <ul className="text-left font-body text-secondary-foreground space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-primary mr-2">✔</span> All Pro Features</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✔</span> Unlimited Personal Training</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✔</span> Exclusive Workshops</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✔</span> Nutritional Guidance</li>
                </ul>
                <button className="bg-transparent border border-primary text-primary font-heading font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-primary/10 w-full">Join Now</button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Registration Form Section */}
        <section id="registration-form" className="py-20 px-4 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in-up">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground text-center mb-8">Sign Up for <span className="text-primary">Membership</span></h2>
              <div className="bg-background p-8 rounded-lg shadow-lg shadow-primary/20">
                <MembershipForm isRegistration={true} />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in-up" className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Frequently Asked <span className="text-primary">Questions</span></h2>
            </AnimatedSection>
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <AnimatedSection animation="fade-in-up" delay={0.1}>
                <details className="group bg-secondary p-6 rounded-lg cursor-pointer border border-primary/10 hover:border-primary transition-all duration-300">
                  <summary className="flex justify-between items-center font-heading text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    What are your operating hours?
                    <span className="transform transition-transform duration-300 group-open:rotate-180">▼</span>
                  </summary>
                  <p className="font-body text-secondary-foreground mt-4">
                    Our club is open from 6 AM to 10 PM on weekdays, and 8 AM to 8 PM on weekends. Please check our facilities page for specific timings for ladies.
                  </p>
                </details>
              </AnimatedSection>

              {/* FAQ Item 2 */}
              <AnimatedSection animation="fade-in-up" delay={0.2}>
                <details className="group bg-secondary p-6 rounded-lg cursor-pointer border border-primary/10 hover:border-primary transition-all duration-300">
                  <summary className="flex justify-between items-center font-heading text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    Do you offer trial memberships?
                    <span className="transform transition-transform duration-300 group-open:rotate-180">▼</span>
                  </summary>
                  <p className="font-body text-secondary-foreground mt-4">
                    Yes, we offer a complimentary one-day trial pass for new visitors. Please contact us to schedule your visit.
                  </p>
                </details>
              </AnimatedSection>

              {/* FAQ Item 3 */}
              <AnimatedSection animation="fade-in-up" delay={0.3}>
                <details className="group bg-secondary p-6 rounded-lg cursor-pointer border border-primary/10 hover:border-primary transition-all duration-300">
                  <summary className="flex justify-between items-center font-heading text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    Can I bring a guest?
                    <span className="transform transition-transform duration-300 group-open:rotate-180">▼</span>
                  </summary>
                  <p className="font-body text-secondary-foreground mt-4">
                    Members are welcome to bring guests. Guest passes can be purchased at the front desk.
                  </p>
                </details>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Membership;
