import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";

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
      <body className={`${inter.className} mocha bg-crust`}>
        {children}
        <div className="text-subtext1 fixed bottom-0 right-4 text-xs opacity-50 hover:opacity-100 transition-all">
          Thanks to{" "}
          <a href="https://github.com/catppuccin" className="text-blue ">
            @Catppuccin
          </a>
        </div>
      </body>
    </html>
  );
}
