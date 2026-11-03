// import type { IconType } from "react-icons";
// import { FiHeadphones, FiMapPin } from "react-icons/fi";
// import { LuBedDouble } from "react-icons/lu";

// export type NightId = "23" | "24" | "both";

// export interface NightOption {
//   id: NightId;
//   label: string; // shown on the chip
//   full: string; // used inside the WhatsApp message
// }

// export const mahaDeepamPopup = {
//   // sessionStorage key -> popup auto-opens only once per visit
//   storageKey: "anantharaa-maha-deepam-popup-seen",
//   // IST, so the countdown is correct for every visitor
//   eventStart: "2026-11-23T00:00:00+05:30",
//   eventEnd: "2026-11-25T00:00:00+05:30",

//   mantra: "Om Namah Shivaya",
//   place: "Thiruvannamalai",
//   eyebrow: "Karthigai Deepam · Bookings now open",
//   eyebrowMobile: "Karthigai Deepam · Bookings open",
//   title: "Maha Deepam",
//   dateBig: "23 & 24",
//   dateSmall: "November 2026",
//   dateSmallMobile: "Nov 2026",
//   description:
//     "Witness the sacred flame light up Arunachala, then rest easy after your darshan — just steps from the temple.",

//   image: "/maha-deepam/temple.jpg",
//   thumb: {
//     image: "/maha-deepam/gopuram-window.jpg",
//     title: "The gopuram, from our window",
//     caption: "Annamalaiyar Temple · 2-min walk",
//   },

//   features: [
//     { icon: FiMapPin as IconType, text: "2-min walk to the temple" },
//     { icon: LuBedDouble as IconType, text: "Clean, hygienic rooms" },
//     { icon: FiHeadphones as IconType, text: "24×7 guest assistance" },
//   ],

//   nights: [
//     { id: "23", label: "23 Nov", full: "23 Nov 2026" },
//     { id: "24", label: "24 Nov", full: "24 Nov 2026" },
//     { id: "both", label: "Both nights", full: "23 & 24 Nov 2026 (both nights)" },
//   ] as NightOption[],

//   guests: { min: 1, max: 10, default: 2 },

//   whatsapp: "919585999301",
//   phones: [
//     { label: "95859 99301", href: "tel:+919585999301" },
//     { label: "94038 92144", href: "tel:+919403892144" },
//   ],
// };

import { DeepamBedIcon, DeepamHeadsetIcon, DeepamIconProps, DeepamPinIcon } from "@/utils/deepamIcons";
import type { ComponentType } from "react";


export type NightId = "23" | "24" | "both";

export interface NightOption {
  id: NightId;
  label: string; // shown on the chip
  full: string; // used inside the WhatsApp message
}

export interface PetalConfig {
  left: string;
  width: number;
  height: number;
  color: string;
  duration: number; // seconds
  delay: number; // seconds (negative = already mid-fall on load)
}

export interface FeatureItem {
  icon: ComponentType<DeepamIconProps>;
  text: string; // "\n" = deliberate line break (matches the design)
}

export const mahaDeepamPopup = {

  eventStart: "2026-11-23T00:00:00+05:30",
  eventEnd: "2026-11-25T00:00:00+05:30",

  mantra: "Om Namah Shivaya",
  place: "Thiruvannamalai",
  eyebrow: "Karthigai Deepam · Bookings now open",
  eyebrowMobile: "Karthigai Deepam · Bookings open",
  title: "Maha Deepam",
  dateBig: "23 & 24",
  dateSmall: "November 2026",
  dateSmallMobile: "Nov 2026",
  description:
    "Witness the sacred flame light up Arunachala, then rest easy after your darshan just steps from the temple.",

  image: "/maha-deepam/temple.jpg",
  imageMobile: "/maha-deepam/temple-mobile.jpg",
  thumb: {
    image: "/maha-deepam/gopuram-window.jpg",
    title: "The gopuram, from our window",
    caption: "Annamalaiyar Temple · 2-min walk",
  },

  features: [
    { icon: DeepamPinIcon, text: "2-min walk to\nthe temple" },
    { icon: DeepamBedIcon, text: "Clean, hygienic\nrooms" },
    { icon: DeepamHeadsetIcon, text: "24×7 guest\nassistance" },
  ] as FeatureItem[],

  nights: [
    { id: "23", label: "23 Nov", full: "23 Nov 2026" },
    { id: "24", label: "24 Nov", full: "24 Nov 2026" },
    {
      id: "both",
      label: "Both nights",
      full: "23 & 24 Nov 2026 (both nights)",
    },
  ] as NightOption[],

  guests: { min: 1, max: 12, default: 2 },

//   // floating "reopen" pill shown after the popup is closed
//   reopen: {
//     label: "Maha Deepam",
//     labelDesktop: "Maha Deepam · 23 & 24 Nov",
//     cta: "Book now",
//   },

  // falling lamp-petals over the hero image (design has 7 on desktop, 4 on mobile)
  petals: {
    desktop: [
      {
        left: "8%",
        width: 10,
        height: 6,
        color: "#E8A33A",
        duration: 12,
        delay: -1,
      },
      {
        left: "22%",
        width: 8,
        height: 5,
        color: "#F0BE5C",
        duration: 15,
        delay: -7,
      },
      {
        left: "37%",
        width: 11,
        height: 6,
        color: "#D9762A",
        duration: 13,
        delay: -4,
      },
      {
        left: "52%",
        width: 9,
        height: 5,
        color: "#E8A33A",
        duration: 16,
        delay: -10,
      },
      {
        left: "66%",
        width: 10,
        height: 6,
        color: "#F0BE5C",
        duration: 11,
        delay: -6,
      },
      {
        left: "80%",
        width: 8,
        height: 5,
        color: "#D9762A",
        duration: 14,
        delay: -2,
      },
      {
        left: "90%",
        width: 10,
        height: 6,
        color: "#E8A33A",
        duration: 17,
        delay: -12,
      },
    ] as PetalConfig[],
    mobile: [
      {
        left: "10%",
        width: 9,
        height: 5,
        color: "#E8A33A",
        duration: 7,
        delay: -1,
      },
      {
        left: "34%",
        width: 8,
        height: 5,
        color: "#F0BE5C",
        duration: 9,
        delay: -5,
      },
      {
        left: "58%",
        width: 10,
        height: 6,
        color: "#D9762A",
        duration: 8,
        delay: -3,
      },
      {
        left: "82%",
        width: 8,
        height: 5,
        color: "#E8A33A",
        duration: 10,
        delay: -7,
      },
    ] as PetalConfig[],
  },

  whatsapp: "919585999301",
  whatsappMessage: (nights: string, guests: number) =>
    `Hi Anantharaa Team,\n\nI would like to book a stay for Maha Deepam 2026.\nNights: ${nights}\nGuests: ${guests}\n\nPlease share availability and rates. Thank you!`,

  phones: [
    { label: "95859 99301", href: "tel:+919585999301" },
    { label: "94038 92144", href: "tel:+919403892144" },
  ],
};
