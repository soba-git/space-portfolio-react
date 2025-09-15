import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils"; 


export const ThemeToggle = () => {
   const [isDarkMode, setIsDarkMode] = useState(false);

   const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");   
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

   return (
     <button 
     onClick={toggleTheme} 
     className={cn(
            "fixed max-sm:hidden top-3.5 right-3 p-2 rounded-full transition-colors duration-300",
            "focus:outline-none",
            "z-50",
        )}>
        {isDarkMode ? (
            <Sun className="h-7 w-7 text-yellow-300"/>
        ) : (
            <Moon className="h-7 w-7 text-blue-300"/>
        )}
    </button>
  );
};