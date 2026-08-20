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
    image: "/lp-2/img1.jpg",
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
        title: "Arch House",
        images: ["/lp-2/img2.jpg"],
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
        images: ["/lp-2/img3.jpg"],
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

 
  locationSection: {
    image: "/lp-2/img4.jpg",

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
          "We had an excellent stay at Ananthara Hotel, Tiruvannamalai. A special mention to the front office lady receptionist (unfortunately, I didn’t catch her name) for her warm welcome, professionalism, and helpful attitude. Heartfelt thanks to Sashi and Subhash for their exceptional guidance and support with the darshan arrangements. Their knowledge, patience, and clear instructions made the entire spiritual experience smooth, well-organized, and stress-free. The overall guest service was outstanding, and the team truly went above and beyond to ensure comfort and convenience. A memorable and pleasant stay—I would highly recommend this hotel and would be happy to visit again.",
        name: "Himanshu Akode",
      },
      {
        review:
          "Our stay at the Ananthara Hotel in Tiruvannamalai was nothing short of fantastic. From the moment we arrived, the warmth and professionalism of the staff made us feel right at home. We want to extend a huge thank you to the front desk team (Oviya, Subhas, & Rajesh) who truly made our visit seamless by providing incredible support with our darshan arrangements. Their local knowledge and patient guidance turned what could have been a stressful spiritual journey into a smooth, perfectly organized experience,and the rooms were well-maintained, clean, and designed for comfort, providing a peaceful retreat after a long day. The level of guest service here is outstanding",
        name: "Charan veeracharyulu Dharanalakota",
      },
      {
        review:
          "We had a fantastic stay at Hotel Anantharaa. The location was at a convenient distance from the raja Gopuram of Annamalaiyar temple. The staff were incredibly welcoming and provided great service. The rooms were neat,clean and well-maintained. Overall highly recommended.",
        name: "Ramprasadh Ragupathy",
      },
      {
        review:
          "Located in a prime area, this accommodation offers comfortable rooms and excellent service. The staff are professional, courteous, and always willing to help, making the stay truly enjoyable. It stands out as one of the decent places to stay and is definitely worth recommending. Keep up the great work and continue maintaining good standards.",
        name: "deepti priya",
      },
      {
        review:
          "Rooms were pretty clean and spacious. Mr Subhash at reception was very kind and helpful. Need to be careful with the google maps to location as local police officials had made lot of restrictions to the vehicle entries. But Hotel staff guided us on how to reach the hotel.",
        name: "Shiva Reddy",
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
};
