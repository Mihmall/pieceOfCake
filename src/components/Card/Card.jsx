import React, { useState } from "react";

const Card = ({id, name, type, image, cost, specification, composition }) => {
  // +/-
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  //   альтернативная картинка (Logo)
  const imgOr = ({ image }) => {
    if (image === "") {
      return "/image/b9fv_cb9z_221114.svg";
    }
    return image;
  };

  return (
    <div className="card" id={`${type}_${id}`}>
      <img className="cardImg" alt={{name}?{name}:{type}} src={imgOr({ image })} />
      <div className="cardInfo">
        <h2>{name}</h2>
        <ul>
          <li className="cardItem">{cost}</li>
          <li className="cardItem">{specification}</li>
          <li className="cardItem">{composition}</li>
        </ul>
      </div>
      <div className="product-buttons">
        <button onClick={handleDecrement} disabled={count === 1}>
          -
        </button>
        <h3 className="product-count">{count}</h3>
        <button className="product-add" onClick={handleIncrement}>
          +
        </button>
      </div>
      <button className="toCart">В корзину</button>
    </div>
  );
};
export default Card;
