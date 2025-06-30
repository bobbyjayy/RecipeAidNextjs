import type { Metadata } from "next";
import "./globals.css";
import ConditionalNavbar from "@/components/ConditionalNavbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className}`}>
        <ConditionalNavbar />
        {children}
      </body>
    </html>
  );
}
