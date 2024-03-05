import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joseph Ikinda",
  description: "My app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className="!scroll-smooth">
      <body className={`${montserrat.className} bg-[#F49F0A]`}>{children}</body>
    </html>
  );
}
