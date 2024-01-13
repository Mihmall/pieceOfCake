import React, { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import CardToCart from "../Card/CardToCart";
import { ToCartContext } from "@/Layout/MainLayout";

export const Drawer = ({ onCloseCartBtn, items }) => {
  const { setCartItem, user } = useContext(ToCartContext);
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
        <div>
          {items.map((card) => (
            <CardToCart {...card} key={card.id} />
          ))}
        </div>
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
