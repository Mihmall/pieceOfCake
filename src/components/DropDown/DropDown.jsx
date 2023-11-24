import React, { useState, useRef } from "react";
import { FaUserCircle, FaLock, FaLockOpen, FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { useClickOut } from "../hooks/useClickOut";
import { useReg } from "../Registration/Reg";
export const DropDown = () => {
  const dropDownRef = useRef(null);

  const [openDropDown, setDropDownOpen] = useState(false);
  useClickOut(dropDownRef, () => {
    if (openDropDown)  setDropDownOpen(false)
  });


  const { user ,onLogout } =useReg();
  return (
    <>
        <button className="regBtn" onClick={setDropDownOpen} disabled={openDropDown ? true : false} >
        <FaUserCircle />
      </button>
      <nav
        className={`regMenu ${openDropDown ? "active" : ""}` }
        ref={dropDownRef}
      >
        <ul className="regMenuList">
          {user ? (
          <li className="regMenuItem">
            <button onClick={onLogout}>
              <FaLock />
              Выход
            </button>
          </li>
           ) : ( 
          <>
            <li className="regMenuItem">
              <Link href="/RegPage" onClick={() => setDropDownOpen(!openDropDown)}>
                <FaRegStar />
                Регистрация
              </Link>
            </li>
            <li className="regMenuItem">
              <Link href="/AuthenticationPage" onClick={() => setDropDownOpen(!openDropDown)}>
                <FaLockOpen />
                Вход
              </Link>
            </li>
          </>
           )} 
        </ul>
      </nav>{" "}
    </>
  );
};
