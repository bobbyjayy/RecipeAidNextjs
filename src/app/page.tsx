"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });

function Homepage() {
  return (
    <section className="flex flex-col w-full h-full bg-gray-50">
      {/* navigation bar */}
      <nav className="w-full flex justify-between items-center  px-6 pt-3 ">
        <div className="m-auto md:mx-0 flex items-center gap-2">
          <Image
            src="/recipelogo.png"
            width={80}
            height={80}
            alt="RecipeAid Logo"
          />
          <div className="text-4xl font-bold">
            <span className="text-red-500">Recipe</span>Aid
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-xl font-medium">
          {/* <Link
            href="/mealbuilder"
            className="hover:border-b-2 hover:border-marigold"
          >
            Try App
          </Link>
          <a
            href="https://github.com/bobbyjayy/recipeaidnextjs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-b-2 hover:border-marigold"
          >
            Github
          </a> */}
          <Link
            href="/login"
            className="hover:border-b-2 hover:border-red-500 px-5 py-2"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-yellow-400 hover:bg-yellow-600 text-gray-800 px-5 py-2 rounded-lg"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between  px-6 py-12 gap-10 items-center">
        {/* Text Side */}
        <div className="mx-auto">
          <h1
            className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-gray-900 mb-4`}
          >
            Cook <span className="text-red-500">Smarter</span> with{" "}
            <span className="text-red-500">AI</span>
          </h1>
          <p className="text-lg text-gray-800  mb-6">
            Just type what&apos;s in your kitchen - we will turn it into a
            tasty, AI-powered meal idea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/mealbuilder"
              className="bg-yellow-400 hover:bg-yellow-600 text-gray-800 px-6 py-3 rounded-xl text-lg transition"
            >
              Try It Now
            </Link>
            <a
              href="https://github.com/bobbyjayy/recipeaidnextjs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center gap-2 text-gray-800 px-6 py-3 hover:border-b-2 hover:border-red-500  text-xl transition"
            >
              View on Github
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8213 10.0037L10.0734 3.2792C10.014 3.22793 9.93809 3.19922 9.85811 3.19922H8.04316C7.89141 3.19922 7.82168 3.38789 7.93652 3.48633L15.1184 9.7207H3.11719C3.02695 9.7207 2.95312 9.79453 2.95312 9.88477V11.1152C2.95312 11.2055 3.02695 11.2793 3.11719 11.2793H15.1163L7.93447 17.5137C7.81963 17.6142 7.88936 17.8008 8.04111 17.8008H9.91758C9.95654 17.8008 9.99551 17.7864 10.0242 17.7598L17.8213 10.9963C17.8923 10.9346 17.9492 10.8583 17.9882 10.7727C18.0272 10.6871 18.0474 10.5941 18.0474 10.5C18.0474 10.4059 18.0272 10.3129 17.9882 10.2273C17.9492 10.1417 17.8923 10.0654 17.8213 10.0037Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative  flex justify-center  items-center">
          {/* red box */}
          {/* <div className=" invisible lg:visible absolute bg-marigold w-150 h-150 xl:w-150 xl:h-170 left-50 rounded-tr-[3rem] rounded-l-[3rem] z-0 "></div> */}
          <Image
            src="/sideimage.png"
            width={900}
            height={900}
            alt="RecipeAid Logo"
            className="w-64 md:w-md lg:w-xl xl:w-2xl  rounded-full drop-shadow-2xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Homepage;
