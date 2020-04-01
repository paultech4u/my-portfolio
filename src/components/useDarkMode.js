import { useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      return;
    }

    localStorage.setItem("theme", "light");
    setTheme("light");
  };

  return [theme, toggleTheme];
};
