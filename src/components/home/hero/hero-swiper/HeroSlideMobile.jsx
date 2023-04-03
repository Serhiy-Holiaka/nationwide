import { memo } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/button/Button';

const HeroSlideMobile = ({ image, title }) => {
    const navigate = useNavigate();
    return (
        <div className="relative flex flex-col h-full w-full bg-white">
            <div className="flex flex-col justify-center items-center text-center px-4 tablet:px-8 pb-8">
                <h1 className="text-[30px] tablet:text-[40px] text-black-dark leading-[130%] font-medium">{title}</h1>
                <p className="text-base text-black-dark leading-[150%] opacity-70 py-6">
                    With the expansion of the NM Nationwide Brokerage division, we are now offering comprehensive
                    Logistics services. Partnering with only the best domestic and global providers, we have become your
                    one-stop transportation solution.
                </p>
                <div>
                    <Button onClick={() => navigate('/contact-us')}>Contact Us</Button>
                </div>
            </div>
            <div className="relative px-4">
                <div className="relative min-h-[300px] h-full">
                    <img
                        className="absolute w-full h-full object-cover rounded-[45px] overflow-hidden z-10"
                        width={945}
                        height={760}
                        src={`${import.meta.env.BASE_URL}images/slider/${image}`}
                        alt="slide-img"
                    />
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-black-dark" />
        </div>
    );
};

HeroSlideMobile.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
};

export default memo(HeroSlideMobile);
