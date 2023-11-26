import Link from "next/link";
import React,{useState} from "react";
import { DropDown } from "../DropDown/DropDown";


const Navigation = () => {
  // Состояние для открытия/закрытия

//   const [isDropDownOpen, setDropDownOpen] = useState(false);
//   const openDropDown = () => {
//     setDropDownOpen(true);
//   };
//   const closeDropDown = () => {
//     setDropDownOpen(false);
//   };

  return (
    <header>
      <div className="headerTop">
        <div className="logoContainer"><img className="logoIcon" src="/image/b9fv_cb9z_221114.svg" alt="Logo" /></div>
        <div className="infoContainer">{/* <p></p> */}</div>
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
