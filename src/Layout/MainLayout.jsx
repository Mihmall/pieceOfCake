import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import { useReg } from "@/components/Registration/Reg";
import { FaCartArrowDown } from "react-icons/fa";
import { Drawer } from "@/components/Drawer/Drawer";
import { takeCards } from "@/components/hooks/takeCards";
import {onAddToCart} from "@/pages/Cake"

const MainLayout = ({ children }) => {
  const { user } = useReg();
  const [drawerIsOpen, setDrawerOpen]= useState(false);
  const [cartItem,setCartItem]=useState([])
  const cards = takeCards();
  // const onAddToCart =(obj)=>{
  //   setCartItem([...cartItem, obj])
  // };

  return (
    <>
    {/* временно закоментил корзину */}
      {drawerIsOpen && <Drawer items={cartItem} onCloseCartBtn={()=>setDrawerOpen(false)}/>}
      <Navigation onClickCartBtn={()=>setDrawerOpen(true)} />

      {children}

      <button className="btnCart" onClick={()=>setDrawerOpen(true)}>
        <FaCartArrowDown />
      </button>
      
    </>
  );
};

export default MainLayout;
