"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import slide1 from '../../src/assets/slider1.png';
import slide2 from '../../src/assets/slider2.png';
import slide3 from '../../src/assets/slider3.png';
import styles from './index.module.scss';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const data = [{ img: slide1, src: '', alt: 'Фирменные макарон' },
{img: slide2, src: '', alt: 'Шоколадные наборы'}, {img: slide3, src: '', alt: 'Сладости и комплименты'}]

export default function BannerSlider() {
  return (
    <section className={styles.section}>
      <Swiper className={styles.slider} autoplay={{delay: 2000, disableOnInteraction: false}} pagination={{clickable: true}} navigation={true} modules={[Autoplay, Pagination, Navigation]}>
      {data.map((slide) => <SwiperSlide className={styles.slide}>
        <a href={slide.src}>
        <Image src={slide.img}
        alt={slide.alt}
        width={100}
        height={100}
        sizes="100vw" />
      </a></SwiperSlide>)}
      </Swiper>
    </section>
  );
}
