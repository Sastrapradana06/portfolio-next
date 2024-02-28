import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import imageHome from "@/img/imageHome.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sastra Pradana",
  description: "Sastra Pradana",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
