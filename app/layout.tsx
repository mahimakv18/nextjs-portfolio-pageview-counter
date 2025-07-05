import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: "Mahima Vaishnav", // Simple string instead of object
  description: "GRC Analyst with proven expertise in ISO 27001, SOC 2 readiness, RBI & SEBI compliance, and cloud security frameworks—bridging governance and technology to drive secure, audit-ready operations.",
  openGraph: {
    title: "Mahima Vaishnav",
    description:
      "GRC Analyst with proven expertise in ISO 27001, SOC 2 readiness, RBI & SEBI compliance, and cloud security frameworks—bridging governance and technology to drive secure, audit-ready operations.",
    url: "https://mahimavaishnav-portfolio.vercel.app/",
    siteName: "mahimavaishnav-portfolio.vercel.app",
    images: [
      {
        url: "",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}