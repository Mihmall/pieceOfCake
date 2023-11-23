import React, { createContext, useContext, useState, useEffect } from "react";

/**
 * Контекст для управления состоянием  аутентификации пользователя
 * @type {React.Context}
 */
const RegContext = createContext();

/**
 * Компонент для управления состоянием аутентификации пользователя
 * @component
 * @param {object} props - Свойства компонента
 * @param {React.ReactNode} props.children - Дочерние элементы
 * @returns {JSX.Element} - Компонент
 */
export const RegProvider = ({ children }) => {
  /**
   * Состояния для хранения информации об аутентификации пользователя
   * @type {object | null}
   */
  const [user, setUser] = useState(null);

  useEffect(() => {
    // проверка аутентификации при загрузке страницы
    // установка пользователя в состояние (если проверка пройдена)

    const userFromLocalStorage = localStorage.getItem("user");

    if (userFromLocalStorage) {
      setUser(JSON.parse(userFromLocalStorage));
    }
  }, []);

  /**
   * Функция для обработки входа пользователя
   * @function
   * @param {object} userData - Данные пользователя
   * @returns {void}
   */
  const onLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  /**
   * Функция для обработки выхода пользователя из приложения
   * @function
   * @returns {void}
   */
  const onLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const contextValue = { user, onLogin, onLogout };

  return (
    <RegContext.Provider value={contextValue}>{children}</RegContext.Provider>
  );
};

/**
 * Хук для доступа к контексту вутентификации
 * @returns {object} - Значение контекста
 */
export const useReg = () => {
  const context = useContext(RegContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProiver");
  }

  return context;
};