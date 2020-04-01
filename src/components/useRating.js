import { useState, useEffect } from "react";

export const useRating = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      //  checking if localstorage is empty
      //  else set the value true to localstorage open
      if (localStorage.getItem("open")) {
        localStorage.getItem("open");
      } else {
        localStorage.setItem("open", "true");
        setOpen((o) => !o);
      }
    }, 10000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  //  function that execute when the viewer click
  //  on the rating display
  const handleRating = () => {
    setTimeout(() => {
      localStorage.setItem("open", "false");
      setOpen((o) => !o);
    }, 2000);
  };

  return [open, handleRating];
};
