import React, { useState } from "react";

const Card = ({ name, type, image, cost, specification, composition }) => {
  // +/-
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    // здесь округление для того чтобы -0 не получать
  };

  //   альтернативная картинка (Logo)
  const imgOr = ({ image }) => {
    if (image === "") {
      return "/image/b9fv_cb9z_221114.svg";
    }
    return image;
  };

  return (
    <div className="card">
      <img className="cardImg" alt={name} src={imgOr({ image })} />
      <div className="cardInfo">
        <h2>{name}</h2>
        <ul>
          <li className="cardItem">{cost}</li>
          {/* <li className="cardItem">{type}</li> */}
          <li className="cardItem">{specification}</li>
          <li className="cardItem">{composition}</li>
        </ul>
      </div>
      <div className="product-buttons">
        <button onClick={handleDecrement} disabled={count === 0}>
          -
        </button>
        <h3 className="product-count">{count}</h3>
        <button className="product-add" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};
export default Card;
