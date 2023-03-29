import { memo } from 'react';
import PropTypes from 'prop-types';
import Button from '@/components/ui/button/Button';

const HeroSlideMobile = ({ image, title }) => {
    return (
        <div className="relative flex flex-col h-full w-full bg-white">
            <div className="flex flex-col justify-center items-center text-center px-8 pb-8">
                <h1 className="text-[40px] text-black-dark leading-[130%] font-medium">{title}</h1>
                <p className="text-base text-black-dark leading-[150%] opacity-70 py-6">
                    With the expansion of the NM Nationwide Brokerage division, we are now offering comprehensive
                    Logistics services. Partnering with only the best domestic and global providers, we have become your
                    one-stop transportation solution.
                </p>
                <div>
                    <Button>Contact Us</Button>
                </div>
            </div>
            <div className="relative rounded-[45px] overflow-hidden min-h-[300px] h-full">
                <img
                    className="absolute w-full h-full object-cover z-10"
                    width={945}
                    height={760}
                    src={`/images/slider/${image}`}
                    alt="slide-img"
                />
            </div>
        </div>
    );
};

HeroSlideMobile.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
};

export default memo(HeroSlideMobile);
