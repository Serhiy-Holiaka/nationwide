import ContactForm from '@/components/contact-us/contact-form';
import Button from '@/components/ui/button';

const FillableForm = () => {
    return (
        <div>
            <div className="container">
                <h1 className="text-[32px] leading-none text-center text-black-dark my-8">Online Fillable Forms</h1>
                <p className="text-base text-black-dark leading-[150%] text-center mb-8">
                    Please choose a link below to open a PDF version of the chosen form. This PDF can be filled on your
                    computer, printed, and then FAXed or Emailed to N&M Nationwide.
                </p>
                <Button additionalClasses="mx-auto">Click here to request a rate quote today!</Button>
            </div>
            <div className="flex flex-col items-center py-24">
                <ContactForm />
                <div className="grid tablet:grid-cols-2 gap-7 max-w-[690px] mt-12 mx-auto">
                    <div className="text-center tablet:text-left">
                        <p className="text-base leading-none text-black-dark mb-5">E-Mail</p>
                        <h5 className="text-base desktop:text-xl text-black-dark leading-[130%] break-words">
                            nmnationwide@nmtransfer.com
                        </h5>
                    </div>
                    <div className="text-center tablet:text-left">
                        <p className="text-base leading-none text-black-dark mb-5">Address</p>
                        <h5 className="text-base desktop:text-xl text-black-dark leading-[130%]">
                            N&M Nationwide | 630 Muttart Road | Neenah, WI 54956
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FillableForm;
