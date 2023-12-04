import React from "react";
import Head from "next/head";
// стартовая страница здесь будет описание проекта
const Home = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PieceOfCake</title>
      </Head>
      <main>
        <h1>Проект интернет-магазина сладостей</h1>
            <h2>Добро пожаловать на стартовую страницу</h2>
            {/* <p>описание проекта</p> */}
      </main>
    </>
  );
};

export default Home;