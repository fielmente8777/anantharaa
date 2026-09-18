import ImageBanner from "@/components/banners/ImageBanner";
import { SectionWithContainer } from "@/components/sectionComponants";
import Form1 from "@/components/forms/Form1";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import LocationSection from "../(landing-page)/components/LocationSection";
import Testimonials from "../(landing-page)/components/Testimonials";
import Faq from "../(landing-page)/components/Faq";
import FinalCta from "../(landing-page)/components/FinalCta";
import { landingPageData } from "./components/pageData";
import ImageB from "@/components/banners/Image";
import Room from "./components/Room";
import About from "./components/About";
import Place from "./components/Places";
import Amenities from "./components/Amenities";
import Review from "./components/Review";
import LastSection from "./components/LastSection";

export default function LandingPage() {
  return (
    <main className="bg-background">
      <ImageB {...landingPageData.hero} />
      <SlidingTitle items={landingPageData.step} />
      <div
        className="bg-dark border max-lg:hidden border-white/40 backdrop-blur-xs py-6 px-1.5 flex flex-col gap-5"
        id="form"
      >
        <Form1 />
        <p
          className="text-sm text-white tracking-widest text-center"
          dangerouslySetInnerHTML={{ __html: landingPageData.hero.benefits }}
        />
      </div>
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
      <About {...landingPageData.aboutSection} />
      <Room {...landingPageData.roomsSection} />
      {/* <SectionWithContainer containerClassName="grid lg:hidden grid-cols-2 gap-4">
        {landingPageData.hero.highlights.map((highlight, index) => (
          <div
            key={index}
            className="flex items-center flex-col gap-2 border-b p-2"
          >
            <p className="text-dark font-primary">{highlight.label}</p>
            <p className="text-3xl font-primary text-p1">{highlight.value}</p>
            <p
              className=" text-light max-w-3xl"
              dangerouslySetInnerHTML={{ __html: highlight.description }}
            />
          </div>
        ))}
      </SectionWithContainer> */}
      {/* <WhyAnantharaa {...landingPageData.whyAnantharaaSection} /> */}
      <Place {...landingPageData.locationSection} />
      <Amenities {...landingPageData.amenitiesSection} />
      <Review {...landingPageData.testimonials} />
      <Faq {...landingPageData.faq} />
      <LastSection {...landingPageData.finalCta} />
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
