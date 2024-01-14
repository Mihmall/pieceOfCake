import React, {  useState } from "react";
import { imgOr } from "../hooks/takeLogo";


const CardToCart = ({ id, name, image, cost }) => {
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
    <>
      <img className="cartImage" src={imgOr({ image })} alt={name} />
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
    </>
  );
};
export default CardToCart;
