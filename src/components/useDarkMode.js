import {useState , useEffect} from "react";



export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    
      const toggleTheme = () => {
        if (theme === 'dark') {
          localStorage.setItem('theme', 'light')
          setTheme('light');
        } else {
          localStorage.setItem('theme', 'dark')
          setTheme('dark');
        }
      };

     useEffect(() => {
         const localTheme = localStorage.getItem('theme');
         localTheme && setTheme(localTheme)
     }, []);
     
     return [theme, toggleTheme]
}