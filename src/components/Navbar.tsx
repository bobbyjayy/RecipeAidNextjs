"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link href="/" className="flex items-center text-xl font-bold">
        <Image
          src="/recipelogo.png"
          height={80}
          width={80}
          alt="recipeaid logo"
          className="w-10 h-10 mr-2"
        />
        <span className="text-red-500">Recipe</span>Aid
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/mealbuilder" className="text-gray-700 hover:text-red-500">
          Meal Builder
        </Link>

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="border border-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-100"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
