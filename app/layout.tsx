import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { Providers } from "./Providers";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joseph Ikinda — UI, Motion & 3D Designer",
  description:
    "Interfaces, motion & 3D — from concept to animated pixel. Portfolio by Joseph Ikinda: UX/UI, frontend, Lottie and 3D animation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${syne.variable} ${dmSans.variable} bg-paper`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
