import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper/modules";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div className="w-[80%] mx-auto">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="Food Category" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Food Category" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="Food Category" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="Food Category" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="Food Category" />
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  );
};

export default Category;
