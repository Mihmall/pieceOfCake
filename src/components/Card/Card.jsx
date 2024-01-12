import React, { useContext, useState } from "react";
import { imgOr } from "../hooks/takeCards";
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
  added =false
}) => {
  const {isCartDeleted} = useContext(ToCartContext);
  const [isAdded,setIsAdded]=useState(added);
  const onClickToCard = () => {
    clickToCard( id,
      name,
      type,
      image,
      cost,
      specification,
      composition); 
      setIsAdded(!isAdded);
  };
  
  return (
    <div className="card" id={{id}}>
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
      <button className="toCart" onClick={onClickToCard} >
        {isAdded ? "Удалить из корзины"  : "Добавить в корзину"}
      </button>
    </div>
  );
};
export default Card;
