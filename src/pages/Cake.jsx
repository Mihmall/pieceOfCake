import React, { useContext } from "react";
import Card from "@/components/Card/Card";
import { ToCartContext } from "@/Layout/MainLayout";

// при открытии загружать карточки тортов
const Cake = () => {
  const { onAddToCart,cartItem, cards } = useContext(ToCartContext);
  console.log(cartItem)
  return (
    <>
      <h1>Торты</h1>
      <div className="container">
        {cards
          ?.filter((cards) => cards.type === "tort")
          .map((card) => (
            <Card
              id={card.id}
              {...card}
              key={card.id}
              added={cartItem.some((obj)=>Number(obj.id) === Number(card.id))}
              clickToCard={() => onAddToCart(card)}
            />
          ))}
      </div>
    </>
  );
};

export default Cake;
