import React, { useContext } from "react";
import Card from "@/components/Card/Card";
import { ToCartContext} from "@/Layout/MainLayout";
// при открытии загружать карточки пирожных
const SmallCake = () => {
  const {onAddToCart,cards} = useContext(ToCartContext);
  return (
    <div className="fon"><h1>Пирожные</h1>
    
      <div className="container">
        {cards
          ?.filter((cards) => cards.type === "eclar")
          .map((card) => (
            <Card
              key={card.id}
              {...card}
              clickToCard={()=>onAddToCart(card)}
              
            />
          ))}
      </div></div>
    
  );
};

export default SmallCake;
