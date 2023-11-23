import { useEffect } from "react";

export const useClickOut = (ref, close) => {
  const handleClick = (e) => {
    if(close){
    if (ref.current && !ref.current.contains(e.target)) {
      close();
    }}
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
};
