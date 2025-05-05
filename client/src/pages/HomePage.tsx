import Hero from "@/components/home/Hero";
import ValueProposition from "@/components/home/ValueProposition";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import MortgageCalculator from "@/components/calculators/MortgageCalculator";
import Testimonials from "@/components/home/Testimonials";
import Cta from "@/components/home/Cta";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Good Friend Mortgage - Alpharetta & Roswell GA Mortgage Broker</title>
        <meta name="description" content="Good Friend Mortgage is a 5-star rated mortgage broker serving Alpharetta and Roswell, GA areas with personalized mortgage services and expert consulting." />
      </Helmet>
      
      <Hero />
      <ValueProposition />
      <Services />
      <Process />
      <MortgageCalculator />
      <Testimonials />
      <Cta />
      
      <section id="contact" className="py-16 px-4 bg-neutral-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
              Contact Us
            </h2>
            <p className="text-neutral-700">
              Reach out to our mortgage experts for personalized advice and guidance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
