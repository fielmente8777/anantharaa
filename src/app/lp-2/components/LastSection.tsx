import Form1 from "@/components/forms/Form1";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

import { landingPageData } from "./pageData";

interface FinalCtaProps {
  title: string;
  description: string;
}

const LastSection: React.FC<FinalCtaProps> = ({ title, description }) => {
  return (
    <Section defaultPadding={false} className="w-full bg-dark border-b border-white">
      <Container>
        <div className="flex flex-col items-center px-4 py-10 text-center md:py-20 lg:py-24">
          <p
            className="text-white/85 mb-4 md:mb-0 uppercase text-sm md:text-[16px] "
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <SectionHeading
            titleClassName="text-[22px] md:text-3xl"
            title={title}
            titleColor="white"
            wrapperClassName="max-w-7xl"
          />

          <div
            className="bg-white/30 border max-lg:hidden border-white/40 backdrop-blur-xs py-6 px-1.5 rounded-[20px] mt-20 flex flex-col gap-5"
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
        </div>npm run 


      </Container>
    </Section>
  );
};

export default LastSection;
