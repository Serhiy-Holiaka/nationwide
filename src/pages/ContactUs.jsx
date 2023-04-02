import ContactForm from '@/components/contact-us/contact-form';
import ContactInfo from '@/components/contact-us/contact-info';

const ContactUs = () => {
    return (
        <section className="relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-20 bg-contact-map-bg bg-no-repeat bg-[center_top]" />
            <div className="relative container w-full max-w-[690px] mx-auto mt-8">
                <ContactForm subTitle="This page provides information regarding the many ways you can contact us." />
            </div>
            <ContactInfo />
        </section>
    );
};

export default ContactUs;