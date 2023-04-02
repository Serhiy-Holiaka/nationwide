import ContactForm from '@/components/contact-us/contact-form';
import ContactBg from '@/components/contact-us/contact-bg';

const ContactUs = () => {
    return (
        <section className="relative">
            <ContactBg>
                <ContactForm />
                <div className="grid tablet:grid-cols-2 gap-8 text-center tablet:text-left my-[52px]">
                    <div>
                        <p className="text-base leading-none text-black-dark mb-5">For Customer Service Please Call:</p>
                        <h5 className="text-2xl text-black-dark leading-[130%]">800-236-3230</h5>
                    </div>
                    <div>
                        <p className="text-base leading-none text-black-dark mb-5">Address</p>
                        <h5 className="text-xl desktop:text-2xl text-black-dark leading-[130%] break-words">
                            N&M Nationwide | 630 Muttart Road | Neenah, WI 54956
                        </h5>
                    </div>
                </div>
            </ContactBg>
        </section>
    );
};

export default ContactUs;
