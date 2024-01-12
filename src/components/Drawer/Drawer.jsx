
import React, { useState }from "react";
import { FaTimes } from "react-icons/fa";
import Card from "../Card/Card";

export const Drawer = ({ onCloseCartBtn, items=[] }) => {
     // +/-
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
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
        <div className="cartItems">
          {items.map((obj) => (
            <div className="cartItem">
              {/* сделать удаление карточки */}
              <div className="product-buttons">
        <button onClick={handleDecrement} disabled={count === 1}>
          -
        </button>
        <h3 className="product-count">{count}</h3>
        <button className="product-add" onClick={handleIncrement}>
          +
        </button>
      </div>
              <div className="removeBtn">
                <FaTimes />
              </div>
            </div>
          ))}
        </div>
        <div className="cartBottom">
          {/* временная заглушка цены */}
          <p className="cartTotalCost">Цена: 1234руб.</p>
          <button className="cartBtnOk" onClick={() => {}}>
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};
