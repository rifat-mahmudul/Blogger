import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blogger",
  description: "Ths is a simple blog app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="container mx-auto">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
       <Navbar></Navbar>
        <div className="min-h-screen">{children}</div>
             </body>
    </html>
  );
}
