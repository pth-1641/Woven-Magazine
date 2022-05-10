import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function SlideDetail({ images }) {
    return (
        <Swiper
            pagination={{
                clickable: true,
            }}
            navigation={true}
            loop={true}
            modules={[Pagination, Navigation]}
        >
            {images?.map((img) => (
                <SwiperSlide key={img}>
                    <img src={img} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SlideDetail;
