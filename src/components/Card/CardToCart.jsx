import React, { useContext, useState } from "react";
import { imgOr } from "../hooks/takeLogo";
import { FaTimes } from "react-icons/fa";
import { ToCartContext } from "@/Layout/MainLayout";

const CardToCart = ({ id, name, image, cost }) => {
  const { onDeleteInCart } = useContext(ToCartContext);
  // +/-
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const costAll = cost * count;

  return (
    <div className="cardToCart" id={id}>
      <img className="cartImage" src={image || imgOr(`${""}`)} alt="" />
      <div className="cardInCart">
        <h3>{name}</h3>
        <p>Цена:{cost}</p>
        <p>Общая стоймость:{costAll}</p>
        <div className="product-buttons">
          <button onClick={handleDecrement} disabled={count === 1}>
            -
          </button>
          <h3 className="product-count">{count}</h3>
          <button className="product-add" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
      <div className="removeBtn" onClick={() => onDeleteInCart(id)}>
        <FaTimes />
      </div>
    </div>
  );
};
export default CardToCart;
