"use client";

import { SectionWithContainer } from "@/components/sectionComponants";

interface AmenitiesProps {
  tagline: string;
  title: string;
  amenities: {
    icon: React.ReactNode;
    label: string;
  }[];
  note: string;
}

const Amenities = ({
  tagline,
  title,
  amenities,
  note,
}: AmenitiesProps) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="bg-background"
      containerClassName="py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="mb-3 text-[11px] uppercase text-p1">
            {tagline}
          </p>

          <h2 className="font-primary text-3xl  text-[#241610] md:text-4xl lg:text-5xl">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex min-h-[100px] flex-col justify-between border border-[#DFD6C9] bg-[#FEFBF5] p-5"
            >
              <div className="text-p1">
                {amenity.icon}
              </div>

              <p className="mt-5 text-sm text-[#40362F]">
                {amenity.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-xs text-[#80766D]">
          {note}
        </p>
      </div>
    </SectionWithContainer>
  );
};

export default Amenities;