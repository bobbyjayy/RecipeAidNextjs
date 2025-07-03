import type { Metadata } from "next";
import "./globals.css";
import ConditionalNavbar from "@/components/ConditionalNavbar";
import { Poppins } from "next/font/google";

const poppin = Poppins({ subsets: ["latin"], weight: ["600", "700"] });

export const metadata: Metadata = {
  title: "RecipeAid",
  description: "Your AI-powered meal planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppin.className}`}>
        <ConditionalNavbar />
        {children}
      </body>
    </html>
  );
}
