"use client";

import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

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

const Room: React.FC<RoomsSectionProps> = ({
  tagline,
  title,
  cards,
}) => {
  const filteredCards = cards.filter((card) => card);

  return (
    <SectionWithContainer
      sectionClassName="border-y border-p1 bg-background2"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-6 md:gap-8">

          {/* Heading */}
          <div className="space-y-2 text-start">
            <p className="text-xs uppercase tracking-widest text-p1">
              {tagline}
            </p>

            <div className="max-w-3xl">
              <SectionHeading title={title} />
            </div>
          </div>

          {/* Cards */}
          <div className="grid w-full grid-cols-1 gap-5 md:gap-6 lg:grid-cols-2">
            {filteredCards.map((card, index) => (
              <RoomsCard key={index} {...card} />
            ))}
          </div>

        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Room;

export const RoomsCard: React.FC<
  RoomsSectionProps["cards"][0]
> = ({
  title,
  description,
  amenities,
  buttons,
  images,
  price,
}) => {
  return (
    <article
      className="
        flex w-full flex-col
        overflow-hidden
        rounded-[16px]
        bg-[#FEFBF5]
      "
    >
      {/* Image */}
      <div
        className="
          relative w-full shrink-0 overflow-hidden
          aspect-[3.5/2.5]
          sm:aspect-[3.5/2.4]
          lg:aspect-[3.5/2.5]
        "
      >
        <Image
          src={images[0]}
          alt={title ?? "Room"}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div
        className="
          flex flex-1 flex-col
          p-4
          sm:p-5
          lg:p-5
        "
      >
        {/* Category */}
        <p
          className="
            mb-1.5
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-[#8B5A32]
            sm:text-xs
          "
        >
          {title === "Arch House"
            ? "Heritage · Families"
            : "Nature · Couples"}
        </p>

        {/* Title */}
        <h3
          className="
            font-primary
            text-2xl
            leading-tight
            text-[#241610]
            sm:text-3xl
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-2
            text-xs
            leading-5
            text-[#665D55]
            sm:text-sm
          "
        >
          {description}
        </p>

        {/* Amenities */}
        <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2">
          {amenities?.map((amenity, index) => (
            <li
              key={index}
              className="
                flex items-start gap-2
                text-xs
                leading-5
                text-[#514941]
                sm:text-sm
              "
            >
              <span className="mt-[2px] shrink-0 text-[#6D3207]">
                ✓
              </span>

              <span>{amenity.label}</span>
            </li>
          ))}
        </ul>

        {/* Bottom */}
        <div
          className="
            mt-4
            border-t
            border-[#DFD6C9]
            pt-3
            md:pt-4
          "
        >
          {/* Mobile: price above buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            {/* Price */}
            <p
              className="
                text-base
                text-[#514941]
                sm:shrink-0
                sm:text-[18px]
                lg:text-[20px]
              "
            >
              {price}
            </p>

            {/* Buttons */}
            <div className="flex w-full gap-2 sm:w-auto">
              {buttons?.map((button, index) => (
                <LinkButton
                  key={index}
                  href={button.link}
                  label={button.label}
                  whatsAppIcon={index === 0}
                  calendarIcon={index === 1}
                  className={`
                    !w-full
                    sm:!w-auto
                    whitespace-nowrap
                    rounded-md
                    px-3
                    py-2
                    text-[11px]!
                    sm:text-sm!
                    justify-center
                    ${
                      index === 0
                        ? "border border-p1 bg-transparent text-p1"
                        : "border border-primary bg-p1 text-white px-6 py-2"
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