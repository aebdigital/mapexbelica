import type { Metadata, Viewport } from "next";
import { Nunito, Outfit, Raleway } from "next/font/google";
import { CookieConsent } from "@/components/CookieConsent";
import { ScrollEffects } from "@/components/ScrollEffects";
import { site } from "@/data/site";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin-ext"],
  variable: "--font-nunito",
  display: "swap"
});

const raleway = Raleway({
  subsets: ["latin-ext"],
  variable: "--font-raleway",
  display: "swap"
});

const outfit = Outfit({
  subsets: ["latin-ext"],
  variable: "--font-outfit",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Vodoinštalatérske práce Piešťany a okolie - MaPeX Belica s.r.o",
    template: "%s - MaPeX Belica s.r.o"
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "vodoinštalatér Piešťany",
    "kúrenárske práce Piešťany",
    "plynárenské práce",
    "rekonštrukcie kúpeľní",
    "MaPeX Belica"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: site.url,
    siteName: "Vodoinštalatérske práce Piešťany a okolie - MaPeX Belica s.r.o",
    title: "Vodoinštalatérske práce Piešťany a okolie - MaPeX Belica s.r.o",
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 952,
        height: 226,
        alt: "MaPeX Belica s.r.o"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vodoinštalatérske práce Piešťany a okolie - MaPeX Belica s.r.o",
    description: site.description,
    images: [site.ogImage]
  },
  verification: {
    google: "IXwlbEwchCQfdE_cEVtu-BrEwqn9cAIv6NSPQ4IQs7g"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large"
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0057ff"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk-SK"
      className={`${nunito.variable} ${raleway.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ScrollEffects />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
