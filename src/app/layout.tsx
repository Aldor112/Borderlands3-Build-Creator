import type { Metadata } from "next";
import { Geist, Black_Ops_One, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Borderlands 3 build planner",
  description: "Borderlands 3 build planer app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex gap-4 `}
      >
        <div className="flex justify-start items-start h-full grow">
          <Sidebar />
        </div>
        <div className="flex flex-col items-start w-full h-full p-8 grow">
          {children}
        </div>
      </body>
    </html>
  );
}
