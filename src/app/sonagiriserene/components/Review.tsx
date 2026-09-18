"use client";

import { TestimonialsProps } from "@/@types/landingPageTypes";
import { SectionWithContainer } from "@/components/sectionComponants";
import ReviewSlider from "./slider/ReviewSlider";

const Review: React.FC<TestimonialsProps> = ({
  tagline,
  title,
  reviews,
}) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="bg-dark"
      containerClassName="py-16 md:py-20 lg:py-24"
    >
      <div className="space-y-8 lg:space-y-10">
        
        {/* Heading */}
        <div className="space-y-4">
          <p className="uppercase text-[10px] tracking-[0.3em] text-white/70">
            {tagline}
          </p>

          <h2 className="font-primary text-3xl leading-tight text-white md:text-4xl lg:text-[42px]">
            {title}
          </h2>
        </div>

        {/* Reviews */}
        <ReviewSlider reviews={reviews} />
      </div>
    </SectionWithContainer>
  );
};

export default Review;