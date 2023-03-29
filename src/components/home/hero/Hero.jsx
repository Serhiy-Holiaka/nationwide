import HeroSwiper from './hero-swiper/HeroSwiper';
import HeroSwiperMobile from './hero-swiper/HeroSwiperMobile';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const Hero = () => {
    const isMobile = useMediaQuery('(max-width: 1000px)');

    return (
        <section className="desktop:h-screen desktop:max-h-[765px] bg-black-dark">
            {isMobile ? <HeroSwiperMobile /> : <HeroSwiper />}
        </section>
    );
};

export default Hero;
