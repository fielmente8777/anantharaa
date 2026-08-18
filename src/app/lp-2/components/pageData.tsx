import { contact } from "@/utils/constent";
import {
  AirIcon,
  BathIcon,
  BreakfastIcon,
  CaretakerIcon,
  GuestsIcon,
  KitchenIcon,
  ParkingIcon,
  WifiIcon,
} from "@/utils/icons";

export const landingPageData = {
  offer: ["Direct Booking Offer: Save 15% + Free Breakfast"],

  hero: {
    tag: "Girivalam Road · Tiruvannamalai",
    title: "<strong> A Quiet Pause </strong> </br> in the Shadow of Arunachala",
    description:
      "23 peaceful rooms, warm hospitality, and everything you need for a comfortable temple visit, starting from ₹1,899/night.",
    benefits:
      "Save 15% when you book direct · No prepayment · Free cancellation",
    image: "/bnr.png",
    highlights: [
      {
        label: "Rating",
        value: "4.7★",
        description: "Guest reviews",
      },
      {
        label: "To Temple",
        value: "2 min",
        description: "Walking",
      },
      {
        label: "Rooms",
        value: "23",
        description: "Newly built",
      },
      {
        label: "Service",
        value: "24×7",
        description: "Guest support",
      },
    ],
  },

  step: [
    "Steps from Annamalaiyar Temple",
    "Free cancellation available",
    "Best rate on book direct",
    "Free Wi-Fi & parking",
    "Cab & travel assistance",
    "Clean, hygienic rooms",
  ],

  aboutSection: {
    title: "Sonagiri Serene",
    description:
      "Sonagiri Serene is a peaceful, design-led boutique homestay nestled on Girivalam Road in Tiruvannamalai, facing the majestic Arunachala Hill. Set across a tranquil half-acre property, Sonagiri Serene offers two distinct private villas, Artha House and Tree House, each designed to create a warm, soulful experience rooted in nature, comfort, and slow living.",
    buttons: [
      {
        label: "Enquire Now",
        link: contact.WhatsappCta,
      },
      {
        label: "Book Now",
        link: "#form",
      },
    ],
  },

  roomsSection: {
    tagline: "Two houses, one garden",
    title: "Choose the stay that fits your trip",

    cards: [
      {
        title: "Artha House",
        images: ["/artha-house.jpg"],
        description:
          "Colonial-style villa with an Arunachala, facing arched verandah, red-oxide floors and curated art. Best for families and multi-generational groups.",

        amenities: [
          {
            label: "2 bedrooms · 2 attached western baths",
          },
          {
            label: "Hill-facing private verandah",
          },
          {
            label: "Full kitchen, dining, washing machine",
          },
        ],

        price: "₹3,500–5,500 / night",

        buttons: [
          {
            label: "Enquire Now",
            link: contact.WhatsappCta,
          },
          {
            label: "Book Now",
            link: "#form",
          },
        ],
      },

      {
        title: "Tree House",
        images: ["/tree-house.jpg"],
        description:
          "Rustic villa wrapped in a forest garden, with a green private sit-out. Best for couples, wellness stays and quiet workations.",

        amenities: [
          {
            label: "2 bedrooms · 2 attached western baths",
          },
          {
            label: "Garden-facing sit-out, deep quiet",
          },
          {
            label: "Wi-Fi, full kitchen access, TV, parking",
          },
        ],

        price: "₹4,000–6,000 / night",

        buttons: [
          {
            label: "Enquire Now",
            link: contact.WhatsappCta,
          },
          {
            label: "Book Now",
            link: "#form",
          },
        ],
      },
    ],
  },

  whyAnantharaaSection: {
    tagline: "Why Anantharaa",
    title: "Care that feels genuine.",
    description:
      "Hospitality starts with kindness. From the moment you arrive, our team is here, clean spaces, calm surroundings, and helpful service.",
    buttons: [
      {
        label: "Enquire Now",
        link: contact.WhatsappCta,
      },
      {
        label: "Book Now",
        link: "#form",
      },
    ],
    features: [
      {
        image: "/step-from-temple.png",
        category: "Location",
        title: "Steps from the Temple",
        description:
          "A 2-minute walk to Annamalaiyar Temple and the Girivalam path.",
      },
      {
        image: "/24x7-guest-assistance.png",
        category: "Homely",
        title: "24×7 Guest Assistance",
        description:
          "Round-the-clock support so your stay is smooth at any hour.",
      },
      {
        image: "/standard-double.png",
        category: "Wellness",
        title: "Clean and Hygienic Rooms",
        description: "Well-maintained rooms with strict hygiene standards.",
      },
      {
        image: "/travel-and-cab.png",
        category: "Simplicity",
        title: "Travel and Cab Assistance",
        description:
          "Reliable cab arrangements for local sightseeing & nearby trips.",
      },
    ],
  },

  locationSection: {
    image: "/Overlay-Shadow.png",

    tagline: "Girivalam starts here",

    title: "Step out of the gate and you're already on the path.",

    description:
      'Most stays are "near the temple." Sonagiri Serene sits on Girivalam Road itself, facing the hill, so full-moon Pournami walks begin at your doorstep, not after an auto ride.',

    places: [
      {
        title: "Sri Ramanasramam",
        distance: "~3.5–4 km · 8–10 min",
      },
      {
        title: "Virupaksha Cave / Skandashram",
        distance: "~4 km · 10 min + walk",
      },
      {
        title: "Arunachaleswarar Temple",
        distance: "~4.5–5 km · 10–12 min",
      },
      {
        title: "Railway station",
        distance: "~4.7 km · 12–15 min",
      },
    ],

    location: "Girivalam Road, Tiruvannamalai, Tamil Nadu",

    buttons: [
      {
        label: "Enquire Now",
        link: contact.WhatsappCta,
      },
      {
        label: "Book Now",
        link: "#form",
      },
    ],
  },

 testimonials: {
  tagline: "Guest Stories",
  title: "Loved by pilgrims and travellers.",

  reviews: [
    {
      review:
        "Perfect location right next to the temple. Rooms were spotless and the staff went out of their way to arrange our cab for Girivalam.",
      name: "Priya S.",
      location: "Chennai",
    },
    {
      review:
        "New, clean, and calm. Great value for what you get. Breakfast was simple and satisfying after our early morning temple visit.",
      name: "Rahul M.",
      location: "Bengaluru",
    },
    {
      review:
        "The hill view from our room was breathtaking at sunrise. Truly a peaceful stay, will absolutely return.",
      name: "Anita R.",
      location: "Mumbai",
    },
  ],
},

  faq: {
    tagline: "FAQ",
    title: "Everything you need to know.",
    description: "Still have questions? Call us any time, we re here 24×7.",
    items: [
      {
        q: "How far is Anantharaa from the Annamalaiyar Temple?",
        a: "Just a 2 minute walk. You can leave for early morning darshan and be back before breakfast.",
      },
      {
        q: "Do you offer free cancellation?",
        a: "Yes, Cancellation is available 24 hours prior check-in time.",
      },
      {
        q: "Is breakfast included?",
        a: "We don’t have breakfast at this time. It’s European Plan. But there are multiple options right next to the hotel and around within 5 minutes walk.",
      },
      {
        q: "Do you help with Girivalam or local cabs?",
        a: "Yes, we have empanelled auto/ cabs to enable girivalam tour and local site seeings",
      },
      {
        q: "Is parking available?",
        a: "Yes, we have a dedicated parking  at basement and adjacent to the hotel.",
      },
      {
        q: "What are the check in and check out times?",
        a: "Check in - 2 PM, Check out - 12 Noon",
      },
    ],
    buttons: [
      {
        label: "Enquire Now",
        link: contact.WhatsappCta,
      },
      {
        label: "Book Now",
        link: "#form",
      },
    ],
  },

  finalCta: {
    image: "/cta.jpg",
    title: "Only two houses. One of them can be yours. Book now. Hurry!",
    description:
      "Pournami & weekends book out first",
  },
  amenitiesSection: {
    tagline: "In both houses",
    title: "Everything a long, slow stay needs.",

    amenities: [
      {
        icon: <AirIcon />,
        label: "AC bedrooms + fans",
      },
      {
        icon: <WifiIcon />,
        label: "Wi-Fi for workations",
      },
      {
        icon: <KitchenIcon />,
        label: "Full kitchen & dining",
      },
      {
        icon: <BathIcon />,
        label: "Attached baths, hot water",
      },
      {
        icon: <GuestsIcon />,
        label: "Sleeps 4–6 · 2BR",
      },
      {
        icon: <ParkingIcon />,
        label: "Private parking",
      },
      {
        icon: <CaretakerIcon />,
        label: "Dedicated caretaker",
      },
      {
        icon: <BreakfastIcon />,
        label: "Breakfast on request",
      },
    ],

    note: "Check-in 11:00 AM · Check-out 12:00 Noon · Pets case-by-case, please ask before booking.",
  },
};
