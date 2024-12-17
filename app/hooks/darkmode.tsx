// hooks/darkmode.js
import { useState, useEffect } from 'react';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

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


