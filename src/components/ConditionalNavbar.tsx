"use client";

import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  if (pathname === "/" || pathname === "/login" || pathname === "/register") {
    return null;
  }
  return <Navbar />;
}
