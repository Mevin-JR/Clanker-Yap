import type { Metadata } from "next";
import { Geist, Geist_Mono, Share_Tech } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shareTech = Share_Tech({
  variable: "--font-share-tech",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  fallback: ["Arial", "sans-serif"]
});

export const metadata: Metadata = {
  title: "Clanker Yap",
  description: "A bunch of clankers yapping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${shareTech.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
