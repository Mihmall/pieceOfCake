import React from "react";
import { FaTimes } from "react-icons/fa";

export const Drawer = () => {
  return (
    <div className="drawerCartOut">
      <div className="drawerCart">
        <div className="cartTop">
          <h3>Корзина</h3>
          <div className="closeCartBtn"><FaTimes /></div>
        </div>
        <div className="cartItems">
          <div className="cartItem">
            {/* сюда грузим карточку */}
            {/* сделать удаление карточки */}
            <div className="removeBtn">
              <FaTimes />
            </div>
          </div>
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
