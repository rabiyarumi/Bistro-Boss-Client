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
       
        <SwiperSlide className=" relative">
          <img src={slide2} alt="Food Category" />
          <h4 className="uppercase absolute bottom-5 left-1/2 -translate-x-1/2  text-white font-bold   drop-shadow-2xl text-2xl">Pizza</h4>
        </SwiperSlide>
        <SwiperSlide className=" relative">
          <img src={slide3} alt="Food Category" />
          <h4 className="uppercase absolute bottom-5 left-1/2 -translate-x-1/2  text-white font-bold   drop-shadow-2xl text-2xl">Soup</h4>
        </SwiperSlide>
        <SwiperSlide className=" relative">
          <img src={slide4} alt="Food Category" />
          <h4 className="uppercase absolute bottom-5 left-1/2 -translate-x-1/2  text-white font-bold   drop-shadow-2xl text-2xl">Desserts</h4>
        </SwiperSlide>
        <SwiperSlide className=" relative">
          <img src={slide1} alt="Food Category" className=" " />
          <h4 className="uppercase absolute bottom-5 left-1/2 -translate-x-1/2  text-white font-bold   drop-shadow-2xl text-2xl">Salad</h4>
        
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  );
};

export default Category;
