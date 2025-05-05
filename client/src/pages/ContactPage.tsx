import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Good Friend Mortgage</title>
        <meta name="description" content="Contact Good Friend Mortgage for personalized mortgage advice. Reach our Alpharetta office at 678-762-0127 or email at loans@goodfriendmortgage.com." />
      </Helmet>
      
      <section className="py-16 px-4 bg-neutral-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
              Contact Us
            </h1>
            <p className="text-neutral-700">
              Reach out to our mortgage experts for personalized advice and guidance. We're here to help you make informed decisions about your mortgage.
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

export default ContactPage;
