// hooks/darkmode.js
import { useState, useEffect } from 'react';

export const useDarkMode = (): [boolean, (value: boolean) => void]  => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        if (storedDarkMode) {
            setDarkMode(JSON.parse(storedDarkMode));
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    return [darkMode, setDarkMode];
};


// import { useEffect, useState } from "react";

// export const useDarkMode = (): [boolean, (value: boolean) => void] => {
//   const [darkMode, setDarkMode] = useState(() => {
//     // Initialize from localStorage or default value
//     return localStorage.getItem("darkMode") === "true";
//   });

//   useEffect(() => {
//     // Update localStorage when darkMode changes
//     localStorage.setItem("darkMode", darkMode.toString());
//     document.body.classList.toggle("dark", darkMode);
//   }, [darkMode]);

//   return [darkMode, setDarkMode];
// };
