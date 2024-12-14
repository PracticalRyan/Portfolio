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
  title: "Create Next App",
  description: "Generated by create next app",
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
