import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer";

// Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cursive = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-cursive",
});

export const metadata: Metadata = {
  title: "Sameer Sondhi • Frontend Developer",
  description:
    "Frontend developer crafting warm, modern marketing sites and product UIs with React and Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cursive.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#FFF7EF] text-[#241814] font-sans antialiased">
        <div className="mx-auto px-6 sm:px-8 lg:px-0">
            <Navbar />
          <main className="pt-15">{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}