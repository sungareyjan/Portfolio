"use client";
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from "next/navigation";
const NavBar = () => {

    const pathname = usePathname();

    const getLinkClasses = (href) => {
    const isActive = pathname === href;
    return isActive
        ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
        : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white";
    };

    return (
    <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">

                {/* <div className=" grid flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"> */}
                <div className="flex shrink-0 items-center">
                    <Link  href="/" >
                    <Image
                        className="dark:"
                        src="/logo.svg"
                        alt="RJ codes logo"
                        width={90}
                        height={10}
                        priority
                    />
                    </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                        <Link href="/" className={getLinkClasses("/")} aria-current="page">HOME</Link>
                        <Link href="/my-works" className={getLinkClasses("/my-works")}>MY WORKS</Link>
                        <Link href="/contact-me" className={getLinkClasses("/contact-me")}>CONTACT ME</Link>
                        <Link href="/about-me" className={getLinkClasses("/about-me")}>ABOUT ME</Link>
                    </div>
                </div>
                {/* </div> */}

            </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
                <Link href="/my-works" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">MY WORKS</Link>
                <Link href="/contact-me" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">CONTACT ME</Link>
                <Link href="/about-me" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">ABOUT ME</Link>
            </div>
        </div>
    </nav>
    );
};
export default NavBar;