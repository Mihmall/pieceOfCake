import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import { useReg } from "@/components/Registration/Reg";
import { FaCartArrowDown } from "react-icons/fa";
import { Drawer } from "@/components/Drawer/Drawer";

const MainLayout = ({ children }) => {
  const { user } = useReg();
  const [drawerIsOpen, setDrawerOpen]= useState(false);
  

  return (
    <>
    {/* временно закоментил корзину */}
      {drawerIsOpen ? <Drawer/> : null}
      <Navigation onClickCartBtn={()=>setDrawerOpen(true)}/>

      {children}

      <button className="btnCart" >
        <FaCartArrowDown />
      </button>
      
    </>
  );
};

export default MainLayout;
