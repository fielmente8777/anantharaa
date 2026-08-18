"use client";

import { TestimonialsProps } from "@/@types/landingPageTypes";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Autoplay } from "swiper/modules";

const ReviewSlider: React.FC<{
  reviews: TestimonialsProps["reviews"];
}> = ({ reviews }) => {
  return (
    <div className="w-full">
      <SwiperCarousel
        data={reviews}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={18}
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
          <div className="flex min-h-[188px] flex-col rounded-xl bg-white p-5">
            
            {/* Stars */}
            <p className="text-sm tracking-[2px] text-p1">
              ★★★★★
            </p>

            {/* Review */}
            <p className="mt-5 text-sm leading-6 text-[#40362F]">
              "{item.review}"
            </p>

            {/* Bottom */}
            <div className="mt-auto pt-4">
              <div className="h-px w-full bg-[#DFD6C9]" />

              <div className="mt-3">
                <p className="text-sm font-medium text-[#241610]">
                  {item.name}
                </p>

                <p className="mt-0.5 text-xs text-[#80766D]">
                  {item.location}
                </p>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default ReviewSlider;