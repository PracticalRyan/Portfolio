import type { Metadata } from "next";
import "./globals.css";
import { Space_Mono } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ryan's Portfolio",
  description:
    "Explore Ryan's portfolio featuring his experience, projects, technical skills, and career ambitions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${spaceMono.className} antialiased`}>{children}</body>
    </html>
  );
}
