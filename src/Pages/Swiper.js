import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import BannerImage from "../assets/img/aboutbanner.jpg"
import Banner from "../component/banner/Banner";
import { Container } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperPage = () => {
    return (
        <>
            <Header />
            <Banner title="Swiper Slider" image={BannerImage} />
            <Container className="mt-4">
            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
      autoplay={{ delay: 3000 }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
    </Container>
            <Footer />
        </>
    )
}

export default SwiperPage;