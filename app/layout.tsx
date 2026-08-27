import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
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
    "Interfaces, motion & 3D — du concept au pixel animé. Portfolio de Joseph Ikinda : UX/UI, frontend, Lottie et animation 3D.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="!scroll-smooth">
      <body className={`${syne.variable} ${dmSans.variable} bg-paper`}>
        {children}
      </body>
    </html>
  );
}
