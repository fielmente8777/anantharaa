import { TestimonialsProps } from "@/@types/landingPageTypes";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import TestimonialsSlider from "./slider/TestimonialsSlider";

const Testimonials: React.FC<TestimonialsProps> = ({ tagline, title, reviews }) => {
  return (
    <SectionWithContainer containerClassName="space-y-8 lg:space-y-12">
      <div className="space-y-4">
        <p className="uppercase text-p1 text-xs tracking-widest">{tagline}</p>
        <SectionHeading title={title} />
      </div>
      <TestimonialsSlider reviews={reviews} />
    </SectionWithContainer>
  );
};

export default Testimonials;
