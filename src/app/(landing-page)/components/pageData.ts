import { contact } from "@/utils/constent";

export const landingPageData = {
  offer: ["Direct Booking Offer: Save 15% + Free Breakfast"],

  hero: {
    tag: "2-minute walk from Annamalaiyar Temple",
    title: "A refined stay in the heart of Thiruvannamalai",
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
    tagline: "About Anantharaa",
    title: "Where every <i>stay</i> feels personal",
    description:
      "Anantharaa opened in 2024 with a simple purpose to offer a calm, comfortable place to stay in the heart of Thiruvannamalai. Whether you are visiting the Annamalaiyar Temple, walking the Girivalam path, or travelling with family, return each evening to a room that helps you truly rest.",
    image: "/about.png",
    stats: [
      {
        value: "2024",
        label: "Newly opened",
      },
      {
        value: "23",
        label: "Rooms & suites",
      },
      {
        value: "2 min",
        label: "From the temple",
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

  roomsSection: {
    tagline: "Rooms & Suites",
    title: "Choose a room made for restful stays starting from 2299/-",

    cards: [
      {
       
        title: "Standard Twin",
        images: ["/Standard-Twin.png"],
        description:
          "Two comfortable single beds, ideal for friends & colleagues.",
        amenities: [
          {
            label: "🛏 2 Single Beds",
          },
          {
            label: "◧ 39.56 meter",
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
      {
       
        title: "Standard Double",
        description: "A cozy double bed in a bright, restful room.",
        images: ["/standard-double.png"],
        amenities: [
          {
            label: "🛏 1 King",
          },
          {
            label: "◧ 39.56 meter",
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
      {
        
        title: "Deluxe Triple",
        description: "Spacious room for three, perfect for small families.",
        images: ["/Deluxe-Triple.png"],
        amenities: [
          {
            label: "🛏 1 King + 1 Single",
          },
          {
            label: "◧ 39.56 meter",
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
      {
        
        title: "Hill View Triple",
        description: "Wake to serene views of Arunachala Hill.",
        images: ["/Hill-View-Triple.png"],
        amenities: [
          {
            label: "🛏 1 King + 1 Single",
          },
          {
            label: "◧ 39.56 meter",
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
    tagline: "The Location",
    title: "Right where the pilgrimage begins.",
    description:
      "Anantharaa sits moments from the Annamalaiyar Temple gopurams. Walk to the temple, start Girivalam at sunset, and return to a peaceful room minutes away.",
    places: [
      {
        title: "Annamalaiyar Temple",
        distance: "2 min walk",
      },
      {
        title: "Girivalam Path",
        distance: "5 min walk",
      },
      {
        title: "Ramana Ashram",
        distance: "10 min drive",
      },
      {
        title: "Skandashram",
        distance: "20 min drive",
      },
      {
        title: "Thiruvannamalai Railway Station",
        distance: "8 min drive",
      },
      {
        title: "Sathanur Dam",
        distance: "45 min drive",
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
        a: "",
      },
      {
        q: "Is breakfast included?",
        a: "",
      },
      {
        q: "Do you help with Girivalam or local cabs?",
        a: "",
      },
      {
        q: "Is parking available?",
        a: "",
      },
      {
        q: "What are the check in and check out times?",
        a: "",
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
    title: "Your peaceful stay near the temple is one click away.",
    description:
      "Rooms are <span className='text-p1'>LIMITED.</span> Reserve now and lock in the direct-booking rate. No fees, easy cancellation.",
  },
};
