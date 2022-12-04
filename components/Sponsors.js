
import React, { useEffect } from 'react';
import styles from './slider.module.css'

import sponsor1 from 'assets/images/sponsor1.png';
import sponsor2 from 'assets/images/sponsor2.png';
import sponsor3 from 'assets/images/sponsor3.png';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Sponsors = ({ banner }) => {


    useEffect(() => {
        console.log(banner)
    }, [])


    return (
        <div className={styles.slider}>
            <div className='container pt-30 pb-30'>
                <div className='flex jfy-end'><span className='fs-24 text-color-dark-05 pb-10 pt-10'>Спонсоры</span></div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    style={{ alignItems: 'center' }}
                >
                    <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}><Image style={{ maxWidth: 250 }} src={sponsor1} alt='sponsor' /></SwiperSlide>
                    <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}><Image style={{ maxWidth: 250 }} src={sponsor2} alt='sponsor' /></SwiperSlide>
                    <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}><Image style={{ maxWidth: 250 }} src={sponsor3} alt='sponsor' /></SwiperSlide>
                    <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}><Image style={{ maxWidth: 250 }} src={sponsor1} alt='sponsor' /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Sponsors;