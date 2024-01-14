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
  const [isLoading, setIsLoading] = useState(true);
  //   получение данных
  useEffect(() => {
    const fetchCards = async () => {
      try {
        // const responseCard = await axios.get(
        //   "https://65a34012a54d8e805ed37cdb.mockapi.io/catalog"
        // );
        // const cartResponse = await axios.get(
        //   "https://65a34012a54d8e805ed37cdb.mockapi.io/ToCart"
        // );
        const responseCard = await axios.get("http://localhost:3001/catalogCard");
        const cartResponse = await axios.get("http://localhost:3001/ToCart");

        setIsLoading(false);
        setCartItem(cartResponse.data);
        setCards(responseCard.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCards();
  }, []);

  const onAddToCart = async (obj) => {
    try {

      if (cartItem.find((newObj) => Number(newObj.id) === Number(obj.id))) {
        setCartItem((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id)));
        // await axios.delete(
        //   `https://65a34012a54d8e805ed37cdb.mockapi.io/ToCart/${obj.id}`);
        
        await axios.delete(`http://localhost:3001/ToCart/${obj.id}`);
        
      } else {
        setCartItem((prev) => [...prev, obj]);
        //  await axios.post(
        //   "https://65a34012a54d8e805ed37cdb.mockapi.io/ToCart",
        //   obj
        // );
        await axios.post("http://localhost:3001/ToCart", obj);
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину');
      console.log(error);
    }
  };


  const onDeleteInCart = (id) => {
    try {
    // axios.delete(`https://65a34012a54d8e805ed37cdb.mockapi.io/ToCart${id}`);
    axios.delete(`http://localhost:3001/ToCart/${id}`)
    setCartItem((prev) =>
      prev.filter((item) => 
        Number(item.id) !== Number(id)));    
    } catch (error) {
      alert('Ошибка при удалении из корзины');
      console.error(error);
    }
  };

  const isItemAdd = (id) => {
    return cartItem.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <>
      <Navigation onClickCartBtn={() => setDrawerOpen(true)} />

      <ToCartContext.Provider
        value={{
          user,
          cartItem,
          cards,
          isItemAdd,
          setCartItem,
          onAddToCart,
          onDeleteInCart,
          setDrawerOpen,
          isLoading
        }}
      >
        {drawerIsOpen && (
          <Drawer
            itemsInCart={cartItem}
            deletItem={onDeleteInCart}
            onCloseCartBtn={() => setDrawerOpen(false)}
          />
        )}

        {children}
      </ToCartContext.Provider>

      <button className="btnCart floatBtn" onClick={() => setDrawerOpen(true)}>
        <FaCartArrowDown />
      </button>
    </>
  );
};

export default MainLayout;
