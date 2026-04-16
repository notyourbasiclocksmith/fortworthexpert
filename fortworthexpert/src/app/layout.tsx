import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { LocalBusinessSchema } from "@/components/SchemaMarkup";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fort Worth Expert Automotive Locksmith | Car Key Programming & Diagnostics",
    template: "%s | Fort Worth Expert Automotive Locksmith",
  },
  description: "Advanced automotive locksmith in Fort Worth, TX. Car key programming, immobilizer diagnostics, module programming, all keys lost solutions. Dealer-level service. Call 817-842-1751.",
  keywords: "automotive locksmith fort worth, car key programming fort worth, car key replacement, key fob programming, immobilizer repair, module programming, lost car keys fort worth",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fortworthlocksmithexperts.com",
    siteName: "Fort Worth Expert Automotive Locksmith",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <LocalBusinessSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
