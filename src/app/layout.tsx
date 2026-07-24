import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import "./style.scss";
import { Section } from "@/components/sectionComponants";
import { landingPageData } from "./(landing-page)/components/pageData";
import SectionWithContainer from "../components/sectionComponants/SectionWithContainer";
import LandingFooter from "@/components/footer/LandingFooter";
import LandingNavbar from "@/components/navbar/LandingNavbar";
import OfferSection from "@/components/OfferSection";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anantharaa",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning={true}>
        <OfferSection />
        <LandingNavbar />
        {children}
        <LandingFooter />
      </body>
    </html>
  );
}
