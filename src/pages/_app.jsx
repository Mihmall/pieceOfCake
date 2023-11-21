import React from "react";
import '../style/global.css';
import MainLayout from "@/Layout/MainLayout";


/* Корневой элемент страницы */
const App = ({ Component, pageProps }) => {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    );
};

export default App;