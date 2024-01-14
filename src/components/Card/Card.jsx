import React, { useContext } from "react";
import { imgOr } from "../hooks/takeLogo";
import { ToCartContext } from "@/Layout/MainLayout";

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
  const { isItemAdd } = useContext(ToCartContext);
  const onClickToCard = () => {
    clickToCard({id, name, type, image, cost, specification, composition});
  };
  return (
    <div className="card" id={{ id }}>
      <img
        className="cardImg"
        alt={{ name } ? { name } : { type }}
        src={imgOr({ image })}
      />
      <div className="cardInfo">
        <h2>{name}</h2>
        <ul>
          <li className="cardItem">{cost} руб./шт.</li>
          <li className="cardItem">{specification}</li>
          <li className="cardItem">{composition}</li>
        </ul>
      </div>
      <button className="toCart" onClick={onClickToCard}>
        {isItemAdd(id) ? "Удалить из корзины" : "Добавить в корзину"}
      </button>
    </div>
  );
};
export default Card;
