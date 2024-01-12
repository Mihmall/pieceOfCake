import React from "react";
import Card from "@/components/Card/Card";
import { takeCards } from "@/components/hooks/takeCards";

// при открытии загружать карточки тортов
const Cake = () => {
      const cards = takeCards();   
      
      const onAddToCart =(obj)=>{
        console.log(obj);
      };
  return (
    <>
    <h1>Торты</h1>
      <div className="container">
        {cards?.filter((cards) => cards.type==="tort").map((card) => (
          <Card
            id={card.id}
            name={card?.name}
            type={card?.type}
            image={card?.image}
            cost={card?.cost}
            specification={card?.specification}
            composition={card?.composition}
            key={card.id}
            clickToCard={()=>onAddToCart(card)}
          />
        ))}
      </div>
    </>
  );
};

export default Cake;
