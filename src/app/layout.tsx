import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import "./style.scss";
import LandingFooter from "@/components/footer/LandingFooter";
import LandingNavbar from "@/components/navbar/LandingNavbar";
import OfferSection from "@/components/OfferSection";
import Call from "@/components/ContactButton/Call";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import { contact } from "@/utils/constent";
import Script from "next/script";

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
        <Call callNumber={contact.phone[0]} />
        <Whatsapp whatsAppNumber={contact.phone[0]} />
      </body>

      <Script id="chatbot-config" strategy="afterInteractive">
        {`
    window.eazbotConfig = {
       ndid: "f0e5bb5d-c778-40ff-a1f9-3e5c9288fd40",
       hid: "36592190",
    };
  `}
      </Script>
      <Script
        src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
