"use client";

import { TestimonialsProps } from "@/@types/landingPageTypes";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Autoplay } from "swiper/modules";

const TestimonialsSlider: React.FC<{
  reviews: TestimonialsProps["reviews"];
}> = ({ reviews }) => {
  return (
    <div className="w-full">
      <SwiperCarousel
        data={reviews}
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerView={1}
        spaceBetween={26}
        loop
        className="p-1!"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        renderSlide={(item) => (
          <div className="rounded-2xl  backdrop-blur-sm border border-[#DFD6C9] bg-background-dark-2 p-6 flex flex-col gap-5">
            <p className="text-p1">★★★★★</p>
            <p className="text-dark">{item.review}</p>
            <div className="w-full h-px bg-[#DFD6C9]" />
            <p className="text-lg text-dark capitalize">{item.name}</p>
          </div>
        )}
      />
    </div>
  );
};

export default TestimonialsSlider;
