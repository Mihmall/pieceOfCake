import React, { useState } from "react";

const Card = ({
  id,
  name,
  type,
  image,
  cost,
  specification,
  composition,
  clickToCard,
}) => {
  const [isAdd, setAdd] = useState(false);
  const onClickToCard = () => {
    clickToCard({id,
      name,
      image,
      cost});
    setAdd(!isAdd);
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
      <img
        className="cardImg"
        alt={{ name } ? { name } : { type }}
        src={imgOr({ image })}
      />
      <div className="cardInfo">
        <h2>{name}</h2>
        <ul>
          <li className="cardItem">{cost}</li>
          <li className="cardItem">{specification}</li>
          <li className="cardItem">{composition}</li>
        </ul>
      </div>
      
      <button className="toCart" onClick={onClickToCard}>
        {isAdd ? "Добавлен" : "В корзину"}
      </button>
    </div>
  );
};
export default Card;
