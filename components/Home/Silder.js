import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import db from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import SwiperCore, { EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
SwiperCore.use([Navigation]);

function Slider() {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const [slides, setSlides] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const querySnapshot = await getDocs(collection(db, 'Slide'));
            querySnapshot.forEach((doc) => {
                setSlides((prev) => [...prev, doc.data()]);
            });
        }
        fetchData();
    }, []);

    return (
        <div className='w-full h-screen px-7 pt-14'>
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
                speed={1000}
            >
                {slides.map((slide, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <img
                                src={slide.image}
                                className='w-full relative bottom-24'
                                alt={slide.title}
                            />
                            <div className='absolute bottom-24 text-white transform -translate-x-1/2 left-1/2 flex-center flex-col'>
                                <h3 className='font-serif text-5xl mb-9 font-semibold'>
                                    {slide.title}
                                </h3>
                                <button className='px-4 py-2 border-2 border-white text-sm font-semibold tracking-wider hover:bg-white hover:text-black duration-700'>
                                    READ THIS STORY
                                </button>
                            </div>
                        </SwiperSlide>
                    );
                })}

                <span
                    className='navigation-center left-0'
                    ref={navigationPrevRef}
                >
                    <Image src='/prev.svg' alt='prev' width={20} height={30} />
                </span>
                <span
                    className='navigation-center right-0'
                    ref={navigationNextRef}
                >
                    <Image src='/next.svg' alt='next' width={20} height={30} />
                </span>
                <span className='absolute right-10 bottom-2 z-10'>
                    <Image src='/down.svg' width={22} height={100} alt='down' />
                </span>
            </Swiper>
        </div>
    );
}

export default Slider;
