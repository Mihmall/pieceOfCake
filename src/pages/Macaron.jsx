import React, { useContext } from "react";
import Card from "@/components/Card/Card";
import { ToCartContext} from "@/Layout/MainLayout";

// при открытии загружать карточки макаруны
const Macaron = () => {
 
  const {onAddToCart,cards} = useContext(ToCartContext);
      
  return (
    <><div className="fon">
      <h1>Макаруны</h1>
      <div className="container">
        {cards
          ?.filter((cards) => cards.type === "macaron")
          .map((card) => (
            <Card
            {...card}
              key={card.id}
              clickToCard={()=>onAddToCart(card)}
             
            />
          ))}
      </div></div>
    </>
  );
};

export default Macaron;
