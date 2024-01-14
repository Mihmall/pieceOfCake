import React, { useContext } from "react";
import Card from "@/components/Card/Card";
import { ToCartContext } from "@/Layout/MainLayout";

// при открытии загружать карточки тортов
const Cake = () => {
  const { isLoading,onAddToCart, cards} = useContext(ToCartContext);
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
              clickToCard={(obj) => onAddToCart(obj)}
              loading={isLoading}
              
            />
          ))}
      </div>
    </>
  );
};

export default Cake;
