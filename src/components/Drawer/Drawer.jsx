import React, { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import CardToCart from "../Card/CardToCart";
import { ToCartContext } from "@/Layout/MainLayout";

export const Drawer = ({ onCloseCartBtn, deletItem, itemsInCart=[] }) => {
  const {setCartItem, user } =
    useContext(ToCartContext);
  const [complete, setComplete] = useState(false);
  const onClickComplete = () => {
    
    setComplete(true);
    setCartItem([]);

  };

  return (
    <div className="drawerCartOut">
      <div className="drawerCart">
        <div className="cartTop">
          <h3>Корзина</h3>
          <div className="closeCartBtn" onClick={onCloseCartBtn}>
            <FaTimes />
          </div>
        </div>
        {itemsInCart.length > 0?(
        <div>
          {itemsInCart.map((card) => (
            <div className="cardToCart" key={card.id} >
              <CardToCart {...card}  />
              <div className="removeBtn" onClick={() => deletItem(card.id)}>
                <FaTimes />
              </div>
            </div>
          ))}
        </div>
        ):(<p>Корзина пуста</p>)}
        
        <div className="cartBottom">
          {/* временная заглушка цены */}
          <p className="cartTotalCost">Цена: 0руб.</p>
          <button
            className="cartBtnOk"
            disabled={!user}
            onClick={() => {
              onClickComplete();
            }}
          >
            {complete ? "Заказ оформлен" : "Оформить заказ"}
          </button>
        </div>
      </div>
    </div>
  );
};
