"use client";

import { useEffect, useState } from "react";
import { landingPageData } from "@/app/(landing-page)/components/pageData";
import { SectionWithContainer } from "./sectionComponants";

const OfferSection = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName={`bg-p1 py-1 w-full z-50 left-0 transition-all duration-300 ease-in-out ${
        isFixed
          ? "fixed top-0 animate-offer-slide"
          : "relative"
      }`}
    >
      <p className="text-center text-white">
        {landingPageData.offer[0]}
      </p>
    </SectionWithContainer>
  );
};

export default OfferSection;