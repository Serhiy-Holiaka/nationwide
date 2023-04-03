import { memo } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/button/Button';

const HeroSlide = ({ image, title }) => {
    const navigate = useNavigate();

    return (
        <div className="relative grid grid-cols-2 h-full w-full bg-white">
            <div className="flex flex-col justify-center max-w-[725px] pl-8 pr-6 pb-[86px] desktop:ml-auto">
                <h1 className="text-[52px] text-black-dark leading-[130%] font-medium">{title}</h1>
                <p className="text-base text-black-dark leading-[150%] opacity-70 py-6">
                    With the expansion of the NM Nationwide Brokerage division, we are now offering comprehensive
                    Logistics services. Partnering with only the best domestic and global providers, we have become your
                    one-stop transportation solution.
                </p>
                <div>
                    <Button onClick={() => navigate('/contact-us')}>Contact Us</Button>
                </div>
            </div>
            <div className="relative desktop:col-span-1 desktop:rounded-l-[45px] overflow-hidden">
                <img
                    className="absolute w-full h-full object-cover z-10"
                    width={945}
                    height={760}
                    src={`${import.meta.env.BASE_URL}images/slider/${image}`}
                    alt="slide-img"
                />
            </div>
            <div className="absolute w-full h-[86px] bg-black-dark self-end" />
        </div>
    );
};

HeroSlide.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
};

export default memo(HeroSlide);
