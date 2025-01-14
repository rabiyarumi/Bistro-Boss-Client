import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper/modules";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle";

const Category = () => {
  return (
    <section className="max-w-screen-xl mx-auto w-[80%] my-10">
      <SectionTitle heading={"order online"} subHeading={"From 11:00am to 10:00pm"} />
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
        <SwiperSlide className=" ">
          <img src={slide2} alt="Food Category" className="w-full max-h-[440px]" />
          <h4 className="uppercase   text-white font-bold text-center -mt-16   drop-shadow-2xl text-2xl">Pizza</h4>
        </SwiperSlide>
        <SwiperSlide className=" relative">
          <img src={slide3} alt="Food Category" className="w-full max-h-[440px]"/>
          <h4 className="uppercase text-center -mt-16  text-white font-bold   drop-shadow-2xl text-2xl">Soup</h4>
        </SwiperSlide>
        <SwiperSlide className=" relative">
          <img src={slide4} alt="Food Category" className="w-full max-h-[440px]"/>
          <h4 className="uppercase text-center -mt-16 text-white font-bold   drop-shadow-2xl text-2xl">Desserts</h4>
        </SwiperSlide>
        <SwiperSlide className=" relative">
          <img src={slide1} alt="Food Category" className="w-full max-h-[440px]" />
          <h4 className="uppercase text-center -mt-16 text-white font-bold   drop-shadow-2xl text-2xl">Salad</h4>
        
        </SwiperSlide>
        
        
      </Swiper>
    </section>
  );
};

export default Category;
