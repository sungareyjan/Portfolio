'use client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
interface NavBarProps {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
}
const NavBar: React.FC<NavBarProps> = ({ darkMode, setDarkMode }) => {

    return (
    <nav className="bg-white dark:bg-gray-800 text-gray-950 dark:text-gray-100 fixed top-0 left-0 w-full z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">

                {/* <div className=" grid flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"> */}
                <div className="flex shrink-0 items-center">
                    <Link  href="/" >
                    <Image
                        className="dark:"
                        src={darkMode ? "/light-mode/rj-code-logo.svg" : "/dark-mode/rj-code-logo.svg"}
                        alt="RJ codes logo"
                        width={90}
                        height={10}
                        priority
                    />
                    </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 ">
                        <Link href="/" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white" aria-current="page">HOME</Link>
                        <Link href="/#my-works" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white">MY WORKS</Link>
                        <Link href="/#contact-me" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white">CONTACT ME</Link>
                        <Link href="/#about-me" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white">ABOUT ME</Link>
                        <label className="inline-flex items-center  cursor-pointer place-items-center">
                        <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}/>
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-50 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-800 dark:after:bg-slate-50 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-skyBlue">
                            </div>
                        </label>
                    </div>
                </div>
                {/* </div> */}

            </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
                <Link href="/#my-works" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">MY WORKS</Link>
                <Link href="/#contact-me" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">CONTACT ME</Link>
                <Link href="/#about-me" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">ABOUT ME</Link>
            </div>
        </div>

    </nav>

    );
};
export default NavBar;