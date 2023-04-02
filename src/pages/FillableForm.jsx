import Button from '@/components/ui/button';
import ContactForm from '@/components/contact-us/contact-form';
import ContactBg from '@/components/contact-us/contact-bg';

const FillableForm = () => {
    return (
        <div>
            <div className="container pb-[72px]">
                <h1 className="text-[32px] leading-none text-center text-black-dark my-8">Online Fillable Forms</h1>
                <p className="text-base text-black-dark leading-[150%] text-center max-w-[930px] mx-auto mb-8">
                    Please choose a link below to open a PDF version of the chosen form. This PDF can be filled on your
                    computer, printed, and then FAXed or Emailed to N&M Nationwide.
                </p>
                <Button additionalClasses="mx-auto">Click here to request a rate quote today!</Button>
            </div>
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
        </div>
    );
};

export default FillableForm;
