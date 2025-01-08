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
