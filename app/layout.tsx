import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const forum = localFont({
  src: "./fonts/forum.ttf",
  variable: "--font-forum",
  weight: "400",
});

const satoshi = localFont({
  src: "./fonts/satoshi.ttf",
  variable: "--font-satoshi",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Qitchen - Experience Qitchen's Sushi Mastery!",
  description: "Experience the best dining with Qitchen. Explore our exquisite menu featuring an array of sushi and specialty rolls, each crafted to perfection. Join us for an unforgettable culinary journey!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${forum.variable} ${satoshi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
