import Hero from '@/components/home/hero';
import Button from '@/components/ui/button';
import ContactUs from '@/components/contact-us';

const Home = () => {
    return (
        <>
            <Hero />
            <section className="relative block w-full bg-black-dark pt-[40px] desktop:pt-[80px] pb-[72px]">
                <div className="text-base text-white leading-[150%] text-center max-w-[962px] px-4 mx-auto">
                    As a third party organization, our staff has the ability to negotiate very competitive rates while
                    maintaining quality service standards. Our carriers know and agree with our philosophy that
                    exceptional service does not cost more. If anything, through efficiency, it costs less than an
                    inefficient system. Staff members at N&M Nationwide are responsive to questions regarding tonnage
                    that has moved, or is about to move. Dispatch is on call 24 hours, seven days a week. You will find
                    that your company will be well represented by our organization. We understand that customer
                    satisfaction is the key to developing and maintaining a strong partnership.
                </div>
                <hr className="w-[48px] my-6 mx-auto" />
                <Button additionalClasses="mx-auto">Click here to request a rate quote today!</Button>
            </section>
            <ContactUs />
        </>
    );
};

export default Home;
