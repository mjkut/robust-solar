import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Robust Solar & Energy Solutions",
    template: "%s | Robust Solar & Energy Solutions",
  },
  description:
    "Top-of-the-range solar systems design, installation, and energy management solutions across South Africa, Zimbabwe, Lesotho, and Swaziland.",
  keywords: [
    "solar installation",
    "solar energy",
    "UPS installation",
    "solar panels",
    "South Africa",
    "Zimbabwe",
    "renewable energy",
    "energy solutions",
    "solar geyser",
    "solar pump",
  ],
  openGraph: {
    type: "website",
    siteName: "Robust Solar & Energy Solutions",
    title: "Robust Solar & Energy Solutions",
    description:
      "Clean energy solutions for households and commercial spaces across Southern Africa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
