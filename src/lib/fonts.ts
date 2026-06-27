import { DM_Sans, Urbanist } from "next/font/google";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-parkinsans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const outfit = dmSans;
export const parkinsans = urbanist;
