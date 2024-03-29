import React from "react";
import "../style/global.css";
import MainLayout from "@/Layout/MainLayout";
import { RegProvider } from "@/components/Registration/Reg";

/* Корневой элемент страницы */
const MyApp = ({ Component, pageProps }) => {
  return (
    <RegProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </RegProvider>
  );
};

export default MyApp;
