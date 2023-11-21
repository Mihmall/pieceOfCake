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
        <div className="container">
            <h1>Добро пожаловать на стартовую страницу</h1>
        </div>
      </main>
    </>
  );
};

export default Home;