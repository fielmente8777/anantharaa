import type { SVGProps } from "react";

/**
 * Maha Deepam pop-up icons — extracted 1:1 from the approved pop-up design.
 * All icons draw with `currentColor`, so colour them with Tailwind text-* classes.
 */

export type DeepamIconProps = SVGProps<SVGSVGElement> & { size?: number };

const Svg = ({
  size = 20,
  strokeWidth = 1.6,
  children,
  ...props
}: DeepamIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </svg>
);

/** oil lamp (diya) — countdown pill + "Book now" pill */
export const DeepamDiyaIcon = (props: DeepamIconProps) => (
  <Svg {...props}>
    <path d="M12 3.5c1.6 2 2.4 3.4 2.4 4.9a2.4 2.4 0 0 1-4.8 0c0-1.5.8-2.9 2.4-4.9z" />
    <path d="M3.5 13.5h17c-.8 3.6-4.4 6-8.5 6s-7.7-2.4-8.5-6z" />
  </Svg>
);

/** location pin — "2-min walk to the temple" */
export const DeepamPinIcon = (props: DeepamIconProps) => (
  <Svg {...props}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
    <circle cx="12" cy="10" r="2.4" />
  </Svg>
);

/** bed — "Clean, hygienic rooms" */
export const DeepamBedIcon = (props: DeepamIconProps) => (
  <Svg {...props}>
    <path d="M3 18V7" />
    <path d="M3 14h18v4" />
    <path d="M21 14v-2.5A2.5 2.5 0 0 0 18.5 9H11v5" />
    <circle cx="7" cy="11" r="1.8" />
  </Svg>
);

/** headset — "24×7 guest assistance" */
export const DeepamHeadsetIcon = (props: DeepamIconProps) => (
  <Svg {...props}>
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <rect x="3.5" y="13.5" width="4" height="6" rx="1.5" />
    <rect x="16.5" y="13.5" width="4" height="6" rx="1.5" />
  </Svg>
);

/** clock — "Limited rooms" */
export const DeepamClockIcon = (props: DeepamIconProps) => (
  <Svg strokeWidth={2} {...props}>
    <path d="M12 8v4l2.5 2.5" />
    <circle cx="12" cy="12" r="8.5" />
  </Svg>
);

/** chat bubble — WhatsApp CTA */
export const DeepamChatIcon = (props: DeepamIconProps) => (
  <Svg strokeWidth={1.8} {...props}>
    <path d="M20.5 11.6a8.4 8.4 0 0 1-12.3 7.4L3.5 20.5l1.5-4.6A8.4 8.4 0 1 1 20.5 11.6z" />
  </Svg>
);

/** close (X) */
export const DeepamCloseIcon = (props: DeepamIconProps) => (
  <Svg size={18} strokeWidth={1.8} {...props}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Svg>
);

/** guests − */
export const DeepamMinusIcon = (props: DeepamIconProps) => (
  <Svg size={16} strokeWidth={2} {...props}>
    <path d="M6 12h12" />
  </Svg>
);

/** guests + */
export const DeepamPlusIcon = (props: DeepamIconProps) => (
  <Svg size={16} strokeWidth={2} {...props}>
    <path d="M12 6v12M6 12h12" />
  </Svg>
);
