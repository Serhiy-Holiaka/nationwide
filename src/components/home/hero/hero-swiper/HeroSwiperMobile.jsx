import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper';
import HeroSlideMobile from './HeroSlideMobile';
import { HERO_SLIDER_LIST } from '@/constants/slder.constants';
import ArrowDownIcon from '@/components/ui/icons/ArrowDownIcon';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const HeroSwiperMobile = () => {
    return (
        <div className="relative w-full h-full ml-auto">
            <Swiper
                modules={[Autoplay, Navigation, EffectFade]}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                }}
                autoHeight={true}
                effect="fade"
                loop={true}
                navigation={{
                    prevEl: '#prev',
                    nextEl: '#next',
                }}
                className="h-full"
            >
                {HERO_SLIDER_LIST.map(({ title, href, image }, i) => (
                    <SwiperSlide key={i}>
                        <HeroSlideMobile title={title} href={href} image={image} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="w-full flex justify-center h-[80px] z-10 bg-black-dark">
                <div className="flex items-center">
                    <div className="flex">
                        <button
                            id="prev"
                            className="is-clickable flex items-center justify-center w-[36px] h-[36px] mr-4 rounded-full [&>svg]:hover:h-[10px] transition"
                        >
                            <ArrowDownIcon className="w-auto h-2 [&>path]:stroke-white transition-all rotate-90" />
                        </button>
                        <button
                            id="next"
                            className="is-clickable flex items-center justify-center w-[36px] h-[36px] ml-4 rounded-full [&>svg]:hover:h-[10px] transition"
                        >
                            <ArrowDownIcon className="w-auto h-2 [&>path]:stroke-white transition-all -rotate-90" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSwiperMobile;
