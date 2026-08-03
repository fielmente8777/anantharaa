import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { TempleIcon } from "@/utils/icons";
import Image from "next/image";

export interface AboutSectionProps {
  tagline: string;
  title: string;
  description: string;
  image: string;
  stats: {
    value: string;
    label: string;
  }[];
  buttons: {
    label: string;
    link: string;
  }[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  tagline,
  title,
  description,
  stats,
  buttons,
  image,
}) => {
  return (
    <SectionWithContainer sectionClassName="relative">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-8">
        <div className="hidden lg:block relative aspect-[4/2.81]">
          <Image src={image} alt="about" fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <p className="uppercase text-p1 text-xs tracking-widest">
              {tagline}
            </p>
            <SectionHeading title={title} />
          </div>
          <p className="text-light">{description}</p>
          <div className="lg:hidden block relative aspect-[4/2.81]">
            <Image src={image} alt="about" fill className="object-cover" />
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2  gap-4 border-t border-[#DFD6C9] py-8">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                value={stat.value}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 max-w-sm gap-4 justify-center ">
            {buttons.map((button, index) => (
              <li key={index}>
                <LinkButton
                  href={button.link}
                  label={button.label}
                  whatsAppIcon={index === 0}
                  calendarIcon={index === 1}
                  className={`rounded-md w-full justify-center
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
      <div className="hidden lg:block absolute bottom-0 right-0">
        <TempleIcon />
      </div>
    </SectionWithContainer>
  );
};

export default AboutSection;

export const StatsCard: React.FC<
  AboutSectionProps["stats"][0] & { index: number }
> = ({ value, label, index }) => {
  return (
    <div
      className={`flex flex-col gap-2 max-lg:items-center ${index === 2 ? "max-lg:col-span-2 max-lg:items-center" : ""}`}
    >
      <p className="text-dark text-3xl font-primary">{value}</p>
      <p className="text-light">{label}</p>
    </div>
  );
};
