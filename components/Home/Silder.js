import { useRef } from 'react';
import Image from 'next/image';
import SwiperCore, { EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
SwiperCore.use([Navigation]);

function Slider({ slides }) {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const scrollDown = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    return (
        <div className='w-full h-screen md:h-screen md:px-7'>
            <Swiper
                style={{ height: '100%' }}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                effect={'fade'}
                modules={[EffectFade]}
                loop={true}
                speed={500}
            >
                {slides.map((slide, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <img
                                src={slide.image}
                                className='h-full object-cover relative md:w-full select-none'
                                alt={slide.title}
                            />
                            <div className='absolute bottom-16 md:bottom-24 text-white transform -translate-x-1/2 left-1/2 flex-center flex-col'>
                                <h3 className='font-serif text-3xl mb-6 md:mb-9 font-semibold md:text-5xl text-center'>
                                    {slide.title}
                                </h3>
                                <button className='text-xs px-4 py-2 border-2 border-white font-semibold tracking-wider hover:bg-white hover:text-black duration-700 md:text-sm'>
                                    READ THIS STORY
                                </button>
                            </div>
                        </SwiperSlide>
                    );
                })}

                <span
                    className='navigation-center left-0 md:block hidden'
                    ref={navigationPrevRef}
                >
                    <Image src='/prev.svg' alt='prev' width={20} height={30} />
                </span>
                <span
                    className='navigation-center right-0 md:block hidden'
                    ref={navigationNextRef}
                >
                    <Image src='/next.svg' alt='next' width={20} height={30} />
                </span>
                <a
                    onClick={scrollDown}
                    className='absolute right-10 bottom-2 z-10 md:block hidden cursor-pointer'
                >
                    <Image src='/down.svg' width={22} height={100} alt='down' />
                </a>
            </Swiper>
        </div>
    );
}

export default Slider;
