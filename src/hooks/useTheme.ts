import { useState, useEffect } from "react";
 
export const useTheme = () => {
    const [theme, setTheme] = useState<string>(localStorage.theme);
    const colorTheme = theme === "dark" ? "light" : "dark";
 
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        setTheme(theme);
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);

    return { colorTheme, setTheme };
}
