import { contact, contact2 } from "@/utils/constent";

interface FooterData {
  logo: string;

  cta: {
    label: string;
    href: string;
  }[];
  lists: {
    title?: string;
    links: {
      title?: string;
      icon?: React.ReactNode;
      label?: string;
      href?: string;
      label2?: string;
      href2?: string;
    }[];
  }[];
}

export const footerData: FooterData = {
  logo: "/footer.png",
  cta: [
    {
      label: "CALL NOW",
      href: contact.callCta,
    },
    {
      label: "ENQUIRE NOW",
      href: contact.WhatsappCta,
    },
    {
      label: "BOOK NOW",
      href: "#form",
    },
  ],
  lists: [
    {
      title: "Locations",
      links: [
        {
          label: "252/48, Thiruvoodal Street, Thiruvannamalai - 606601",

          href: contact.addressLink,
        },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          label: "WhatsApp: " + contact.phone[0],
          href: contact.WhatsappCta,
        },
        {
          label: "Call: " + contact.phone[0],
          href: contact.callCta,
        },

        {
          label: contact.email,
          href: "mailto:" + contact.email,
        },
      ],
    },
  ],
};
export const footerData2: FooterData = {
  logo: "/footer.png",

  cta: [
    {
      label: "CALL NOW",
      href: contact2.callCta,
    },
    {
      label: "ENQUIRE NOW",
      href: contact2.WhatsappCta,
    },
    {
      label: "BOOK NOW",
      href: "#form",
    },
  ],

  lists: [
    {
      title: "Location",
      links: [
        {
          label: "Sonagiri, Tamil Nadu 606601",
          href: contact.addressLink,
        },
      ],
    },

    {
      title: "Contact",
      links: [
        {
          label: "WhatsApp: " + contact2.phone,
          href: contact2.WhatsappCta,
        },
        {
          label: "Call: " + contact2.phone,
          href: contact2.callCta,
        },
        {
          label: contact2.email,
          href: "mailto:" + contact2.email,
        },
      ],
    },
  ],
};
