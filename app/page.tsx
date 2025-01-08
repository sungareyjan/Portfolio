'use client';
import React from "react";
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
    <div className="min-h-screen grid px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80">
      <main className="flex flex-col gap-8 row-start-2 items-center ">
        {/* Banner Section */}
        <section id="banner" className="min-h-screen flex flex-col sm:flex-row items-center justify-center gap-16">
          <div className="text-start space-y-4">
            <h6 className="text-sm font-medium text-neutral-550 dark:subTitle">
              Hello, Welcome
            </h6>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-primary">
              I&#39;M REYJAN SUNGA
            </h1>
            <p className="text-base font-medium text-neutral-500 dark:subTitle ">
              A passionate computer programmer
            </p>
          </div>

          <div>
            <Image
              src="/dark-mode/Rj-codes.jpg"
              alt="RJ Codes Logo"
              width={200}
              height={200}
              className="rounded-lg shadow-lg neumorphic"
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
