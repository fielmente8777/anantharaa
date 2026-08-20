"use client";

import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";

interface AmenitiesProps {
  tagline: string;
  title: string;
  amenities: {
    icon: React.ReactNode;
    label: string;
  }[];
  note: string;
  buttons: {
    label: string;
    link: string;
  }[];
}

const Amenities = ({
  tagline,
  title,
  amenities,
  buttons,
  note,
}: AmenitiesProps) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="bg-background"
      containerClassName="py-10 md:py-16"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="mb-3 text-[11px] uppercase text-p1">{tagline}</p>

          <h2 className="font-primary text-3xl  text-[#241610] md:text-4xl lg:text-5xl">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex min-h-[100px] flex-col justify-between border border-[#DFD6C9] bg-[#FEFBF5] p-5"
            >
              <div className="text-p1">{amenity.icon}</div>

              <p className="mt-5 text-sm text-[#40362F]">{amenity.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-xs text-[#80766D]">{note}</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-2 max-w-sm mx-auto mt-4">
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
    </SectionWithContainer>
  );
};

export default Amenities;
