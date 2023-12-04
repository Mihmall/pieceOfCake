import { useEffect } from "react";

/**
 * Хук для закрытия окон по клику за пределами
 * @param {object} ref - персональный реф области 
 * @returns {object} - Значение контекста
 */
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
