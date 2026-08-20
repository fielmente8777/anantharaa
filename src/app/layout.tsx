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
import { WebProvider } from "@/context-api/WebContext";
import PopUpForm from "@/components/pop-up/PopUpForm";
import Image from "next/image";

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
      <head>
        <meta
          name="google-site-verification"
          content="6jRyolqv3p5VzdTJbW0a8zwU6WQR5_G0_sbCN5GNS7o"
        />

        {/* <!-- Meta Pixel Code --> */}
        <Script id="MetaPixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1130001726027102');
            fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <Image
            height="1"
            width="1"
            alt="fb-pixel"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1130001726027102&ev=PageView&noscript=1"
          />
        </noscript>
        {/* <!-- End Meta Pixel Code --> */}

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7S404VBY8W"
        ></script>
        <Script id="Analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7S404VBY8W')`}
        </Script>

        <Script
          id="GTM"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KG35PBCX')`,
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KG35PBCX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <WebProvider>
          <OfferSection />
          <LandingNavbar />
          {children}
          <LandingFooter />
          <PopUpForm />
          <Call callNumber={contact.phone[0]} />
          <Whatsapp whatsAppNumber={contact.phone[0]} />
        </WebProvider>
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
