import RequestForm from '@/components/request-quote';

const RateQuotes = () => {
    return (
        <div className="container max-w-[930px] mx-auto pb-[52px]">
            <h1 className="text-[32px] leading-none text-center text-black-dark my-8">Online Fillable Forms</h1>
            <p className="text-base text-black-dark leading-[150%] text-center  mb-8">
                Besides having the best service record in the industry, N&M&apos;s rates are among the most
                competitive.To receive a quote on our shipping rates, please complete the form below and press the
                &apos;Submit Quote Request&apos; button. An e-mail will be sent to one of our customer service
                representatives for processing, and will provide you with a quote in the manner of your choosing (via
                Email or Phone Call).
            </p>
            <p className="text-base text-red leading-[150%] text-center">
                Note: If you have more than 3 rate quote requests or you prefer to speak to someone directly, please
                call 800-236-3230We will accept website quotes on Monday through Friday. 7 AM to 4:30 PM.
            </p>
            <RequestForm />
        </div>
    );
};

export default RateQuotes;
