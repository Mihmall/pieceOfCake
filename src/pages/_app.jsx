import React from "react";
import "../style/global.css";
import MainLayout from "@/Layout/MainLayout";
import { RegProvider } from "@/components/Registration/Reg";

/* Корневой элемент страницы */
const App = ({ Component, pageProps }) => {
  return (
    <RegProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </RegProvider>
  );
};

export default App;
