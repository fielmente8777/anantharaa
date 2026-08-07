"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { useMemo, useState } from "react";

interface RoomsSectionProps {
  tagline: string;
  title: string;
  cards: {
    images: string[];
    location: string;
    imageOnly?: boolean;
    title?: string;
    description?: string;
    amenities?: {
      label: string;
    }[];
    buttons?: {
      label: string;
      link: string;
    }[];
  }[];
}

const RoomsSection: React.FC<RoomsSectionProps> = ({
  tagline,
  title,
  cards,
}) => {
  const locations = useMemo(
    () => [...new Set(cards.map((card) => card.location))],
    [cards]
  );

  const [selectedLocation, setSelectedLocation] = useState(locations[0] ?? "");

  const filteredCards = cards.filter(
    (card) => card.location === selectedLocation
  );
  return (
    <SectionWithContainer sectionClassName="border-y border-p1 bg-background2">
      <div className="flex flex-col gap-8 lg:gap-12">
        <div className="space-y-2 text-center">
          <p className="uppercase text-p1 text-xs tracking-widest">{tagline}</p>
          <SectionHeading title={title} />
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => setSelectedLocation(location)}
              className={`rounded-md border px-5 py-2 text-sm transition-all duration-300 ${
                selectedLocation === location
                  ? "bg-p1 text-white border-p1"
                  : "bg-transparent text-p1 border-p1"
              }`}
            >
              {location}
            </button>
          ))}
        </div>
        {selectedLocation === "LOCATION 2: SONAGIRI 2BHK VILLA" ? (
          <div className="flex flex-col gap-8">
            {/* Images */}
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7">
              {filteredCards.flatMap((card) =>
                card.images.map((image, index) => (
                  <div
                    key={`${card.location}-${index}`}
                    className="relative aspect-[4/3.5] overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={image}
                      alt={`Villa ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              {filteredCards[0]?.buttons?.map((button, index) => (
                <LinkButton
                  key={index}
                  href={button.link}
                  label={button.label}
                  whatsAppIcon={index === 0}
                  calendarIcon={index === 1}
                  className={`rounded-md px-6 justify-center ${
                    index === 0
                      ? "bg-transparent text-p1"
                      : "bg-p1 text-white border border-primary"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            {filteredCards.map((card, index) => (
              <RoomsCard key={index} {...card} />
            ))}
          </div>
        )}
      </div>
    </SectionWithContainer>
  );
};

export default RoomsSection;

export const RoomsCard: React.FC<RoomsSectionProps["cards"][0]> = ({
  location,
  title,
  description,
  amenities,
  buttons,
  images,
}) => {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden box-shadow">
      <div className="w-full relative aspect-4/3.5">
        <Image src={images[0]} alt={title ?? "Room"} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-3 border border-[#DFD6C9] bg-white p-4 rounded-b-2xl">
        <p className="text-dark text-3xl font-primary">{title}</p>
        <p className="text-light max-lg:text-sm">{description}</p>
        <ul className="flex items-center gap-6 my-2">
          {amenities?.map((amenity, index) => (
            <li key={index} className="text-light text-sm">
              {amenity.label}
            </li>
          ))}
        </ul>
        <div className="w-full h-px bg-[#DFD6C9] mb-3 mt-1" />
        <ul className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 justify-center ">
          {buttons?.map((button, index) => (
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
  );
};
