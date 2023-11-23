import React, { useState, useRef } from "react";
import { FaUserCircle, FaLock, FaLockOpen, FaRegStar } from "react-icons/fa";
// import { useReg } from "../Registration/Reg";
import Link from "next/link";
import { useClickOut } from "../hooks/useClickOut";
export const DropDown = () => {
  const dropDownRef = useRef(null);

  const [openDropDown, setDropDownOpen] = useState(false);
  useClickOut(dropDownRef, () => {
    if (openDropDown)  setDropDownOpen(false)
  });

//   временно чтоб не ругался
  const [user, setUser] = useState(null);
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
            <button onClick={() => setDropDownOpen(!openDropDown)}>
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
