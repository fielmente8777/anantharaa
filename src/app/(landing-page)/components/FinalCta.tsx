import Form1 from "@/components/forms/Form1";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { landingPageData } from "./pageData";

interface FinalCtaProps {
  image: string;
  title: string;
  description: string;
}

const FinalCta: React.FC<FinalCtaProps> = ({ image, title, description }) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full lg:aspect-16/6 aspect-[4/5.2] overflow-hidden"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 z-10 bg-black/30" />
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <Container>
          <SectionHeading
            title={title}
            titleColor="white"
            wrapperClassName="max-w-2xl"
          />
          <p
            className="text-white/85"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div
            className="bg-white/30 border  max-lg:hidden border-white/40 backdrop-blur-xs py-6 px-1.5 rounded-[20px] mt-20 flex flex-col gap-5"
            id="form"
          >
            <Form1 />
            <p
              className="text-sm text-white tracking-widest text-center"
              dangerouslySetInnerHTML={{
                __html: landingPageData.hero.benefits,
              }}
            />
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default FinalCta;
