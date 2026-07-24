import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface LocationSectionProps {
  tagline: string;
  title: string;
  description: string;
  image: string;
  places: {
    title: string;
    distance: string;
  }[];
  buttons: {
    label: string;
    link: string;
  }[];
}

const LocationSection: React.FC<LocationSectionProps> = ({
  title,
  description,
  places,
  buttons,
  image,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-p1">
      <div className="grid  lg:grid-cols-2 grid-cols-1 items-center gap-8 lg:gap-12">
        <div className="flex flex-col gap-8">
          <div className="w-full max-w-[218px] relative aspect-4/2.5 max-lg:mx-auto">
            <Image
              src="/temple-white.png"
              alt="temple"
              fill
              className="object-cover"
            />
          </div>
          <SectionHeading title={title} titleColor="white" smTextCenter />
          <div className=" lg:hidden block relative aspect-4/4.75 rounded-2xl overflow-hidden">
            <Image src={image} alt="temple" fill className="object-cover" />
          </div>
          <p className="text-white/85 max-lg:text-center">{description}</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
            {places.map((place, index) => (
              <li
                key={index}
                className="flex justify-between gap-2 border-b-[0.8px] border-white/15 pb-3"
              >
                <span className="text-white/85">{place.title}</span>
                <span className="text-white/85 text-sm!">{place.distance}</span>
              </li>
            ))}
          </ul>
          <ul className="grid grid-cols-1 md:grid-cols-2 w-full gap-2 justify-center max-w-sm">
            {buttons.map((button, index) => (
              <li key={index}>
                <LinkButton
                  href={button.link}
                  label={button.label}
                  whatsAppIcon={index === 0}
                  calendarIcon={index === 1}
                  className={`rounded-md w-full text-nowrap uppercase text-sm! justify-center
                    ${
                      index === 0
                        ? "bg-white text-p1"
                        : "border border-primary text-white bg-p1"
                    }
                    `}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block relative aspect-4/4.75 rounded-2xl overflow-hidden">
          <Image src={image} alt="temple" fill className="object-cover" />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default LocationSection;
