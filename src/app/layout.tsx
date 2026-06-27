import type { Metadata } from "next";
import "./globals.css";
import "./site.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { dmSans, urbanist } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "Blueprint Studio",
    template: "%s – Blueprint Studio",
  },
      description:
      "Blueprint Studio creates innovative residential, commercial, and interior designs that balance form, function, and sustainability — with a signature modern aesthetic.",
  openGraph: {
    title: "Blueprint Studio",
    description: "Elegantly crafted to highlight your creative vision, Minnaro is ideal for showcasing residential and commercial projects, architectural portfolios, and bespoke design services.",
    url: "https://omegarevelation.com",
    siteName: "Blueprint Studio",
    images: [
      {
        url: "https://minnaro.vamtam.com/wp-content/uploads/2025/06/01_Preview.jpg",
        width: 1180,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${urbanist.variable}`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
