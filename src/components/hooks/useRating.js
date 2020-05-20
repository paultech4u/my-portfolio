import { useState, useEffect } from "react";

export const useRating = () => {
  const [open, setOpen] = useState({
     change: 0,
     openRate: false
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (localStorage.getItem("open") === null) {
        localStorage.setItem("open", "true");
        setOpen((o) => ({
           openRate: !o.openRate
        }));
      }
      localStorage.setItem("open", "true");
      setOpen((o) => ({
        openRate: o.openRate
     }));
    }, 10000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

 

  const handleRating = (event, newValue) => {
    setTimeout(() => {
      setOpen((o) => ({
        openRate: !o.openRate,
        change: localStorage.setItem("Rate", newValue)
     }));
    }, 2000);
  };

  return [open, handleRating];
};
