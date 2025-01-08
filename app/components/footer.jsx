'use client';
import Image from "next/image";


const Footer = ({darkMode}) => {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center p-10">
            <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href=""
                target="_blank"
                rel="noopener noreferrer">
                <Image
                    aria-hidden
                    className="neumorphic-social dark:"
                    src={darkMode ? "/dark-mode/facebook.svg" : "/light-mode/facebook.svg"}
                    alt="facebook icon"
                    width={25}
                    height={25}
                />
                {/* facebook */}
            </a>
            <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href=""
                target="_blank"
                rel="noopener noreferrer">
                <Image
                    aria-hidden
                    className="neumorphic-social dark:"
                    src={darkMode ? "/dark-mode/instagram.svg" : "/light-mode/instagram.svg"}
                    alt="instagram icon"
                    width={25}
                    height={25}
                />
                {/* instagram */}
            </a>
            <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href=""
                target="_blank"
                rel="noopener noreferrer">
                <Image
                    aria-hidden
                    className="neumorphic-social dark:"
                    src={darkMode ? "/dark-mode/tiktok.svg" : "/light-mode/tiktok.svg"}
                    alt="tiktok icon"
                    width={25}
                    height={25}
                />
                {/* tiktok */}
            </a>
            <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href=""
                target="_blank"
                rel="noopener noreferrer">
                <Image
                    aria-hidden
                    className="neumorphic-social dark:"
                    src={darkMode ? "/dark-mode/youtube.svg" : "/light-mode/youtube.svg"}
                    alt="youtube icon"
                    width={25}
                    height={25}
                />
                {/* youtube */}
            </a>
            <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href=""
                target="_blank"
                rel="noopener noreferrer">
                <Image
                    aria-hidden
                    className="neumorphic-social dark:"
                    src={darkMode ? "/dark-mode/github.svg" : "/light-mode/github.svg"}
                    alt="github icon"
                    width={25}
                    height={25}
                />
                {/* github */}
            </a>
            <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href=""
                target="_blank"
                rel="noopener noreferrer">
                <Image
                    aria-hidden
                    className="neumorphic-social dark:"
                    src={darkMode ? "/dark-mode/linkedin.svg" : "/light-mode/linkedin.svg"}
                    alt="linkedin icon"
                    width={25}
                    height={25}
                />
                {/* linkedin */}
            </a>
            <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href=""
                target="_blank"
                rel="noopener noreferrer">
                <Image
                    aria-hidden
                    className="neumorphic-social dark:"
                    src={darkMode ? "/dark-mode/paypal.svg" : "/light-mode/paypal.svg"}
                    alt="paypal icon"
                    width={25}
                    height={25}
                />
                {/* paypal */}
            </a>
        </footer>
    );
};


export default Footer;