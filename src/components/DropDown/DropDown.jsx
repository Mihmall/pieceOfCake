import React,{useState} from "react";
import { FaUserCircle,FaLock,FaLockOpen,FaRegStar } from "react-icons/fa";
// import Authentication from './Authentication/Authentication'

const DropDown = () => {
    const [isOpen,setOpen]=useState(false);
  return (
    <>
      <button className="regBtn" onClick={()=>setOpen(!isOpen)}>
        <FaUserCircle />
      </button>
      <nav className={`regMenu ${isOpen ? 'active':''}`}>
        <ul className="regMenuList">
          <li className="regMenuItem"><FaRegStar /><span>{/* <Authentication /> */}Регистрация</span></li>
          <li className="regMenuItem"><FaLockOpen /><span>Вход</span></li>
          <li className="regMenuItem"><FaLock /><span>Выход</span></li>
          {/* сделать тернарник */}
        </ul>
      </nav>
    </>
  );
};

export default DropDown;
