import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Script from "next/script";
import NightMode from "./components/NightMode";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stilian Balasopoulov",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src="https://kit.fontawesome.com/5dffb3fca8.js"
        crossorigin="anonymous"
      />
      <body className={`${inter.className} h-screen flex p-4 md:p-8 bg-base`}>
        <NightMode>
          <div
            id="page"
            className="w-full h-full flex relative min-w-[300px] max-w-[1080px] mx-auto rounded-md overflow-hidden"
          >
            {children}
            <Navbar />
          </div>
        </NightMode>
      </body>
    </html>
  );
}
