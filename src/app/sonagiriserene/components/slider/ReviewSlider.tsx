"use client";

import { TestimonialsProps } from "@/@types/landingPageTypes";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { useState } from "react";
import { Autoplay } from "swiper/modules";

const ReviewSlider: React.FC<{
  reviews: TestimonialsProps["reviews"];
}> = ({ reviews }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setExpandedIndex((current) =>
      current === index ? null : index
    );
  };

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
        renderSlide={(item, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div className="flex min-h-[188px] flex-col rounded-xl bg-white p-5">
              {/* Stars */}
              <p className="text-sm tracking-[2px] text-p1">
                ★★★★★
              </p>

              {/* Review */}
              <p
                className={`
                  mt-5
                  text-sm
                  leading-6
                  text-[#40362F]
                  ${isExpanded ? "" : "line-clamp-3"}
                `}
              >
                "{item.review}"
              </p>

              {/* Read More */}
              <button
                type="button"
                onClick={() => toggleDescription(index!)}
                className="
                  mt-1
                  w-fit
                  text-sm
                  font-medium
                  text-gold
                  underline
                  underline-offset-4
                  transition-colors
                  hover:text-gold/80
                "
              >
                {isExpanded ? "Show Less" : "Read More"}
              </button>

              {/* Bottom */}
              <div className="mt-auto pt-4">
                <div className="h-px w-full bg-[#DFD6C9]" />

                <div className="mt-3">
                  <p className="text-sm font-medium text-[#241610]">
                    {item.name}
                  </p>
                </div>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default ReviewSlider;