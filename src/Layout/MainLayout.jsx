import React, { useState, useEffect, createContext } from "react";
import Navigation from "../components/Navigation/Navigation";
import { useReg } from "@/components/Registration/Reg";
import { FaCartArrowDown } from "react-icons/fa";
import { Drawer } from "@/components/Drawer/Drawer";
import axios from "axios";


export const ToCartContext = createContext({});

const MainLayout = ({ children }) => {
  const { user } = useReg();
  const [drawerIsOpen, setDrawerOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [cards, setCards] = useState([]);

  
  //   получение данных
  useEffect(() => {
  const fetchCards = async () => {
    try {
      const responseCart = await axios.get("http://localhost:3001/catalogCard");
      const cartResponse = await axios.get("http://localhost:3001/ToCart"); 
      
      setCartItem(cartResponse.data);
      setCards(responseCart.data);
    } 
    catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    fetchCards();
  }, []);
  
  const onAddToCart = async (obj) => {
    try {
      if (cartItem.find((newObj) =>Number(newObj.id)  === Number(obj.id))) {
        await axios.delete(`http://localhost:3001/ToCart/${obj.id}`);
        setCartItem((prev) =>
          prev.filter(item => 
            Number(item.id) !== Number(obj.id)
          )
        );
      } else {
        await axios.post("http://localhost:3001/ToCart", obj);
        setCartItem((prev) => [...prev, obj]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onDeleteInCart = (id) => {
    
    axios.delete(`http://localhost:3001/ToCart/${id}`)
    console.log(id,cartItem)
    setCartItem((prev) =>
      prev.filter((item) => {
        Number(item.id) === Number(id);
      }));
  };
 const isItemAdd =(id)=>{
  return cartItem.some((obj)=>Number(obj.id) === Number(id))
 }

  return (
    <>
      <Navigation onClickCartBtn={() => setDrawerOpen(true)} />
      
        <ToCartContext.Provider
          value={{cartItem, cards ,setCartItem ,onAddToCart ,onDeleteInCart ,setCartItem ,isItemAdd}}
        >
        {drawerIsOpen && (
          <Drawer
            items={cartItem}
            onCloseCartBtn={() => setDrawerOpen(false)}
          />
        )}

          {children}
        </ToCartContext.Provider>
      

      <button className="btnCart floatBtn" onClick={() => setDrawerOpen(true)}>
        <FaCartArrowDown />
      </button>
    </>
  )
};


export default MainLayout;
