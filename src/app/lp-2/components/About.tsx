"use client";

import Link from "next/link";
import { SectionWithContainer } from "@/components/sectionComponants";
import LinkButton, {
  CalendarIcon,
  WhatsAppIcon,
} from "@/components/buttons/LinkButton";

interface AboutProps {
  tagline?: string;
  title: string;
  description: string;
  buttons: {
    label: string;
    link: string;
  }[];
}

const About = ({ tagline, title, description, buttons }: AboutProps) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="bg-[#F7F2E8]"
      containerClassName="py-16 md:py-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-[36px] text-[#241610]">
          {title}
        </h2>

        <p className="mt-5 text-sm leading-6 text-[#3D332D] md:text-[21px] md:leading-7">
          {description}
        </p>
        {/* <ul className="lg:grid hidden grid-cols-1 md:grid-cols-2 w-full gap-2 item-center justify-center mt-4">
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
        </ul> */}
        <ul className="hidden mt-8 lg:flex items-center justify-center gap-2">
          {buttons.map((button, index) => (
            <li key={index}>
              <LinkButton
                href={button.link}
                label={button.label}
                whatsAppIcon={index === 0}
                calendarIcon={index === 1}
                className={`w-auto rounded-md px-5 text-nowrap text-sm! justify-center ${
                  index === 0
                    ? "border border-primary bg-transparent text-p1"
                    : "bg-p1 text-white"
                }`}
              />
            </li>
          ))}
        </ul>
        <ul className="grid lg:hidden grid-cols-1 md:grid-cols-2 w-full gap-2 max-w-sm mt-4">
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

export default About;
