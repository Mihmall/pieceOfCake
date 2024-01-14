import React from "react";
import Head from "next/head";
// стартовая страница здесь будет описание проекта
const Home = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="/image/b9fv_cb9z_221114.svg"
          type="image/x-icon"
        />
        <title>PieceOfCake</title>
      </Head>
      <main>
        <div className="fon">
          <h1>Проект интернет-магазина сладостей</h1>
          <h2>Добро пожаловать на стартовую страницу</h2>
          <div className="start">
            <p>
              Проект интернет-магазина сладостей используется: ReactJS + хуки
              React Router Axios react-icons concurrently
            </p>
            <h3>Быстрый старт:</h3>

            <p>Клонируйте репозиторий c </p>
            <a href="https://github.com/Mihmall/pieceOfCake.git">
              https://github.com/Mihmall/pieceOfCake.git
            </a>
            <p>
              Перейдите в папку с проектом Установите зависимости: npm install
              npm i -D concurrently Запустите проект: npm run dev
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
