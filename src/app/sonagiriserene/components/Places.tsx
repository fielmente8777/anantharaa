"use client";

import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { FillLocationIcon, LocationIcon } from "@/utils/icons";
import Image from "next/image";

interface LocationSectionProps {
  tagline: string;
  title: string;
  description: string;
  image: string;
  location: string;
  places: {
    title: string;
    distance: string;
  }[];
  buttons: {
    label: string;
    link: string;
  }[];
}

const Place: React.FC<LocationSectionProps> = ({
  tagline,
  title,
  description,
  places,
  buttons,
  image,
  location,
}) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="bg-p1"
      containerClassName="py-10 md:py-16"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        {/* LEFT CONTENT */}
        <div className="flex flex-col">
          {/* Tagline */}
          <p className="mb-4 text-[11px] uppercase text-white/80 ">{tagline}</p>

          {/* Title */}
          <h2 className="max-w-[560px] font-primary text-4xl text-white md:text-5xl lg:text-[48px]">
            {title}
          </h2>
          <div className="relative mt-8 aspect-[1.24] w-full overflow-hidden rounded-2xl lg:hidden">
            <Image
              src={image}
              alt="Girivalam Road, Tiruvannamalai"
              fill
              className="object-cover"
            />
          </div>

          {/* Description */}
          <p className="mt-7 max-w-[560px] text-sm leading-6 text-white/75 md:text-[16px]">
            {description}
          </p>

          {/* Places */}
          <div className="mt-6 max-w-[560px]">
            {places.map((place, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-5 border-t border-white/15 py-3.5"
              >
                <span className="text-sm text-white/85">{place.title}</span>

                <span className="shrink-0 text-sm text-white/70">
                  {place.distance}
                </span>
              </div>
            ))}
          </div>

          {/* Location */}
          <div className="mt-5 flex items-center gap-2 text-sm text-white/70">
            <FillLocationIcon />
            <span>{location}</span>
          </div>

          {/* Buttons */}
          {/* <div className="mt-8 hidden lg:flex items-center gap-3">
            {buttons.map((button, index) => (
              <LinkButton
                key={button.label}
                href={button.link}
                label={button.label}
                whatsAppIcon={index === 0}
                calendarIcon={index === 1}
                className={`
                  !w-auto
                  whitespace-nowrap
                  rounded-md
                  px-4
                  py-2
                  text-[11px]!
                  justify-center
                  ${
                    index === 0
                      ? "bg-white text-p1"
                      : "border border-white bg-transparent text-white"
                  }
                `}
              />
            ))}
          </div> */}
          <ul className="hidden md:grid grid-cols-2 max-w-sm gap-4 mt-4 justify-center ">
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
                        ? "bg-white text-p1 "
                        : "border border-white bg-transparent text-white"
                    }
                    `}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative hidden md:block w-full overflow-hidden rounded-2xl aspect-[4.75/4.2]">
          <Image
            src={image}
            alt="Girivalam Road, Tiruvannamalai"
            fill
            className="object-cover"
          />
        </div>
        {/* Buttons */}
        {/* <div className="mt-8 lg:hidden flex items-center gap-3">
            {buttons.map((button, index) => (
              <LinkButton
                key={button.label}
                href={button.link}
                label={button.label}
                whatsAppIcon={index === 0}
                calendarIcon={index === 1}
                className={`
                  !w-auto
                  whitespace-nowrap
                  rounded-md
                  px-4
                  py-2
                  text-[11px]!
                  justify-center
                  ${
                    index === 0
                      ? "bg-white text-p1"
                      : "border border-white bg-transparent text-white"
                  }
                `}
              />
            ))}
          </div> */}
        <ul className="grid grid-cols-1 lg:hidden md:grid-cols-2 max-w-sm gap-4 justify-center ">
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
                        ? "bg-white text-p1 "
                        : "border border-white bg-transparent text-white"
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

export default Place;
