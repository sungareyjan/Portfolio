'use client';
import React, { useState } from "react";
import Image from "next/image";
import MyWorks from "./my-works/page";
import { useDarkMode } from './hooks/darkmode';
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import AboutMe from "./about-me/page";
import ContactMe from "./contact-me/page";
export default function Home() {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
<>
    <NavBar  darkMode={darkMode} setDarkMode={setDarkMode} />
    <div className="min-h-screen grid  sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center ">
        {/* Banner Section */}
        <section id="banner" className="min-h-screen flex flex-col sm:flex-row items-center justify-center gap-16">
          <div className="text-start space-y-4">
            <h6 className="text-sm font-medium text-neutral-550 dark:text-gray-600">
              Hello, Welcome
            </h6>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-300">
              I&#39;M REYJAN SUNGA
            </h1>
            <p className="text-base text-neutral-500 dark:text-gray-500">
              A passionate computer programmer
            </p>
          </div>

          <div>
            <Image
              src="/dark-mode/Rj-codes.jpg"
              alt="RJ Codes Logo"
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Additional Layout */}
      <AboutMe/>
      <MyWorks />
      <ContactMe/>
      </main>
      <Footer darkMode={darkMode} />
    </div>
    </>
  );
}
