import "./globals.css";
import localFont from "next/font/local";
import { To } from "next/font/google";
import LenisSmoothScroll from "./Animation/SmoothScroll";
import Navbar from "./Components/Header/Navbar";

const Tobias = localFont({
  src: [
    { path: "./fonts/Tobias_Regular.woff2", weight: "300", style: "normal" },
  ],
  variable: "--font-tobias",
  display: "swap",
  fallback: ["system-ui, sans-serif"],
});

const PP = localFont({
  src: [
    {
      path: "./fonts/PP-Regular.woff2",
      weight: "300",
      style: "regular",
    },
    {
      path: "./fonts/PP-Bold.woff2",
      weight: "700",
      style: "bold",
    },

  ],
  variable: "--font-pp",
  display: "swap",
  fallback: ["system-ui, sans-serif"],
});

const Haffer = localFont({
  src: [
    {
      path: "./fonts/Haffer-Regular.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Haffer-Medium.woff2",
      weight: "500",
      style: "medium",
    },
  ],
  variable: "--font-haffer",
  display: "swap",
  fallback: ["system-ui, sans-serif"],
});

export const metadata = {
  title: "Micro",
  description: "Micro is a platform for creating and sharing micro-videos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LenisSmoothScroll />
      <body className={`${Tobias.variable} ${PP.variable} ${Haffer.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
