import { useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    if (theme === "light") {  // checks if existing theme is light
      localStorage.setItem("theme", "dark"); // set theme to localstorage
      //  setting the theme type to dark mode
      //  this persist in the whole lifetime of the user storage
      setTheme("dark"); // update the state to dark mode if condition is true
      return;
    }

    localStorage.setItem("theme", "light"); // set theme to localstorage 
    //  setting the theme type to light mode
    //  this persist in the whole lifetime of the user storage
    setTheme("light"); // update the state to light mode if condition is false
  };

  return [theme, toggleTheme];
};
