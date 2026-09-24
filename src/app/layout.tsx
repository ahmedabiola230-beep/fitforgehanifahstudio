import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitForge | Personal Fitness Trainer in Lekki Phase 1, Lagos",
  description:
    "FitForge is a personal training studio in Lekki Phase 1, Lagos. One on one coaching, small group strength, fat loss programs, mobility work and nutrition coaching. Your first session is free.",
  keywords: [
    "personal trainer Lagos",
    "fitness studio Lekki",
    "personal training",
    "gym Lekki Phase 1",
    "fat loss coaching Lagos",
    "strength training",
  ],
  openGraph: {
    title: "FitForge | Personal Fitness Trainer in Lagos",
    description:
      "Real coaching, real programs, real results. Personal training studio in Lekki Phase 1, Lagos. Book a free trial session.",
    type: "website",
    siteName: "FitForge",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
