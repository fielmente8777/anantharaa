import { SectionHeading } from "@/components/typography";
import SectionWithContainer from "../../../components/sectionComponants/SectionWithContainer";
import LinkButton from "@/components/buttons/LinkButton";
import Image from "next/image";

export interface WhyAnantharaaProps {
  tagline: string;
  title: string;
  description: string;
  buttons: {
    label: string;
    link: string;
  }[];
  features: {
    category: string;
    title: string;
    description: string;
    image: string;
  }[];
}

const WhyAnantharaa: React.FC<WhyAnantharaaProps> = ({
  tagline,
  title,
  description,
  buttons,
  features,
}) => {
  return (
    <SectionWithContainer>
      <div className="flex flex-col gap-8 lg:gap-12">
        <div className="grid lg:grid-cols-[1.2fr_1fr] grid-cols-1">
          <div className="space-y-2">
            <p className="uppercase text-p1 text-xs tracking-widest">
              {tagline}
            </p>
            <SectionHeading title={title} />
            <p className="text-light">{description}</p>
          </div>
          <ul className="lg:grid hidden grid-cols-1 md:grid-cols-2 w-full gap-2 justify-center mt-auto ml-auto max-w-sm">
            {buttons.map((button, index) => (
              <li key={index}>
                <LinkButton
                  href={button.link}
                  label={button.label}
                  whatsAppIcon={index === 0}
                  calendarIcon={index === 1}
                  className={`rounded-md w-full text-nowrap text-sm! justify-center
                    ${
                      index === 0
                        ? "bg-transparent text-p1"
                        : "border border-primary text-white bg-p1"
                    }
                    `}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {features.map((feature, index) => (
            <WhyAnantharaaCard key={index} {...feature} />
          ))}
          <ul className="lg:hidden grid  grid-cols-1 md:grid-cols-2 w-full gap-2 justify-center mt-auto ml-auto max-w-sm">
            {buttons.map((button, index) => (
              <li key={index}>
                <LinkButton
                  href={button.link}
                  label={button.label}
                  whatsAppIcon={index === 0}
                  calendarIcon={index === 1}
                  className={`rounded-md w-full text-nowrap text-sm! justify-center
                    ${
                      index === 0
                        ? "bg-transparent text-p1"
                        : "border border-primary text-white bg-p1"
                    }
                    `}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default WhyAnantharaa;

export const WhyAnantharaaCard: React.FC<WhyAnantharaaProps["features"][0]> = ({
  category,
  title,
  description,
  image,
}) => {
  return (
    <div className="relative w-full aspect-4/2.5 rounded-2xl overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 z-10 bg-linear-to-t from-20% from-black/60 via-black/10 via-50% to-0% to-black/0 text-white">
        <div className="flex flex-col gap-2 p-8 absolute bottom-0 z-20">
          <p className="text-white/85 tracking-widest uppercase">{category}</p>
          <p className="lg:text-3xl text-2xl font-primary">{title}</p>
          <p className="text-white/85">{description}</p>
        </div>
      </div>
    </div>
  );
};
