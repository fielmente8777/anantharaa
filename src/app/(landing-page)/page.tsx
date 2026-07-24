import AboutSection from "./components/AboutSection";
import Faq from "./components/Faq";
import LocationSection from "./components/LocationSection";
import { landingPageData } from "./components/pageData";
import RoomsSection from "./components/RoomsSection";
import Testimonials from "./components/Testimonials";
import WhyAnantharaa from "./components/WhyAnantharaa";
import FinalCta from "./components/FinalCta";
import ImageBanner from "@/components/banners/ImageBanner";
import { SectionWithContainer } from "@/components/sectionComponants";
import Form1 from "@/components/forms/Form1";
import SlidingTitle from "@/components/sliders/SlidingTitle";

export default function LandingPage() {
  return (
    <main className="bg-background">
      <ImageBanner {...landingPageData.hero} />
      <SlidingTitle items={landingPageData.step} />
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="py-8 border-b border-primary lg:hidden"
        containerClassName="space-y-4"
      >
        <Form1 />
        <p
          className="text-sm text-light max-w-3xl text-center mx-auto"
          dangerouslySetInnerHTML={{ __html: landingPageData.hero.benefits }}
        />
      </SectionWithContainer>
      <AboutSection {...landingPageData.aboutSection} />
      <RoomsSection {...landingPageData.roomsSection} />
      <SectionWithContainer containerClassName="grid lg:hidden grid-cols-2 gap-4">
        {landingPageData.hero.highlights.map((highlight, index) => (
          <div key={index} className="flex items-center flex-col gap-2 border-b p-2">
            <p className="text-dark font-primary">{highlight.label}</p>
            <p className="text-3xl font-primary text-p1">{highlight.value}</p>
            <p
              className=" text-light max-w-3xl"
              dangerouslySetInnerHTML={{ __html: highlight.description }}
            />
          </div>
        ))}
      </SectionWithContainer>
      <WhyAnantharaa {...landingPageData.whyAnantharaaSection} />
      <LocationSection {...landingPageData.locationSection} />
      <Testimonials {...landingPageData.testimonials} />
      <Faq {...landingPageData.faq} />
      <FinalCta {...landingPageData.finalCta} />
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="py-8 border-b border-primary lg:hidden"
        containerClassName="space-y-4"
      >
        <Form1 />
        <p
          className="text-sm text-light max-w-3xl text-center mx-auto"
          dangerouslySetInnerHTML={{ __html: landingPageData.hero.benefits }}
        />
      </SectionWithContainer>
    </main>
  );
}
