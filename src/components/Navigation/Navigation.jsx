import Link from "next/link";
import React from "react";
import Authentication from './Authentication/Authentication'
const Navigation = () => {
  return (
    
      <header>
        <div className="logoContainer"></div>
        <div className="infoContainer"></div>
        <div className="authentication">
        <Authentication />
        </div>
        <div className="navContainer">
        <ul className="navCont">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Cake">Торты</Link>
          </li>
          <li>
            <Link href="/SmallCake">Пирожные</Link>
          </li>
          <li>
            <Link href="/Macaron">Макаруны</Link>
          </li>
          <li>
            <Link href="/AboutUs">О нас</Link>
          </li>
        </ul></div>
      </header>
    
  );
};

export default Navigation;
