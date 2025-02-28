import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { Lora, Raleway } from "next/font/google";
import Navbar from "@/components/Navbar.mod";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Choose the weights you need
  variable: "--font-lora", // Custom CSS variable
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Choose the weights you need
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "ASHAA-Design School",
  description: "Learn Art with Practicality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${raleway.variable} ${lora.variable}`}>
      <body className={` antialiased flex flex-col min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
