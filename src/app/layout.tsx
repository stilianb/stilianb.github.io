import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Script from "next/script";
import NightMode from "./components/NightMode";
import Transition from "./components/Transition";

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
      <body className={`${inter.className} h-screen relative flex bg-base `}>
        <NightMode>
          <div
            id="page"
            className="w-full h-full flex relative p-4 md:p-8 min-w-[300px] max-w-[1080px] mx-auto "
          >
            <div className="flex w-full rounded-md overflow-hidden">
              <Transition>
                {children}
              </Transition>
            </div>
          </div>
        </NightMode>
      </body>
    </html>
  );
}
