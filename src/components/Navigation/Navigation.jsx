import Link from "next/link";
import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { DropDown } from "../DropDown/DropDown";

const Navigation = ({onClickCartBtn}) => {
  return (
    <header>
      <div className="headerTop">
        <div className="logoContainer">
          <img
            className="logoIcon"
            src="/image/b9fv_cb9z_221114.svg"
            alt="Logo"
          />
        </div>
        <div className="infoContainer">
          <p>Время работы: Пн-Пт: 09:00-18:00</p>
          <p>Тел: +7 (999)999-99-99</p>
        </div>
        <div>
          <button className="btnCart" onClick={onClickCartBtn}>
            <FaCartArrowDown />
          </button>
        </div> 
        <div className="authentication">
          {/* дропдаун с выбором регистрация или вход/выход */}

          <DropDown />
        </div>
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
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
