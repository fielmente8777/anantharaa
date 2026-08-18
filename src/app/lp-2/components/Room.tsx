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
    imageOnly?: boolean;
    title?: string;
    description?: string;
    price?: string;
    amenities?: {
      label: string;
    }[];
    buttons?: {
      label: string;
      link: string;
    }[];
  }[];
}

const Room: React.FC<RoomsSectionProps> = ({ tagline, title, cards }) => {
  const locations = useMemo(
    () => [...new Set(cards.map((card) => card))],
    [cards]
  );

  const filteredCards = cards.filter((card) => card);
  return (
    <SectionWithContainer sectionClassName="border-y border-p1 bg-background2">
      <div className="flex flex-col gap-8 lg:gap-8">
        <div className="space-y-2 text-start">
          <p className="uppercase text-p1 text-xs tracking-widest">{tagline}</p>
          <div className="max-w-3xl">
            <SectionHeading title={title} />
          </div>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          {/* {locations.map((location) => (
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
          ))} */}
        </div>
        {/* {selectedLocation === "LOCATION 2: SONAGIRI 2BHK VILLA" ? (
          <div className="flex flex-col gap-8"> */}
        {/* Images */}
        {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7">
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
            </div> */}

        {/* Buttons */}
        {/* <div className="flex justify-center gap-4">
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
            </div> */}
        {/* </div>
        ) :  */}

        <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
          {filteredCards.map((card, index) => (
            <RoomsCard key={index} {...card} />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Room;

export const RoomsCard: React.FC<RoomsSectionProps["cards"][0]> = ({
  title,
  description,
  amenities,
  buttons,
  images,
  price,
}) => {
  return (
    <article className="flex h-full min-h-[756px] flex-col overflow-hidden rounded-2xl border border-[#DFD6C9] bg-[#FEFBF5]">
      {/* Image */}
      <div className="relative h-[430px] w-full shrink-0 overflow-hidden">
        <Image
          src={images[0]}
          alt={title ?? "Room"}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 md:p-5">
        {/* Category */}
        <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-[#8B5A32]">
          {title === "Artha House" ? "Heritage · Families" : "Nature · Couples"}
        </p>

        {/* Title */}
        <h3 className="font-primary text-2xl text-[#241610]">{title}</h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-5 text-[#665D55]">{description}</p>

        {/* Amenities */}
        <ul className="mt-4 space-y-2">
          {amenities?.map((amenity, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-xs leading-5 text-[#514941]"
            >
              <span className="mt-[2px] text-[#6D3207]">✓</span>
              <span>{amenity.label}</span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="mt-auto border-t border-[#DFD6C9] pt-4">
          <div className="flex items-center justify-between gap-3">
            {/* Price */}
            <p className="shrink-0 text-xs text-[#514941]">{price}</p>

            {/* Buttons */}
            <div className="flex items-center gap-2">
              {buttons?.map((button, index) => (
                <LinkButton
                  key={index}
                  href={button.link}
                  label={button.label}
                  whatsAppIcon={index === 0}
                  calendarIcon={index === 1}
                  className={`
                    !w-auto
                    whitespace-nowrap
                    rounded-md
                    px-3
                    py-2
                    text-[10px]!
                    justify-center
                    ${
                      index === 0
                        ? "border border-p1 bg-transparent text-p1"
                        : "border border-primary bg-p1 text-white"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
