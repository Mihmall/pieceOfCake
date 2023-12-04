import React from "react";
import Card from "@/components/Card/Card";
import { takeCards } from "@/components/hooks/takeCards";

// при открытии загружать карточки макаруны
const Macaron = () => {
  const cards = takeCards();
  return (
    <>
      <h1>Макаруны</h1>
      <div className="container">
        {cards
          ?.filter((cards) => cards.type === "macaron")
          .map((card) => (
            <Card
              id={card?.id}
              name={card?.name}
              type={card?.type}
              image={card?.image}
              cost={card?.cost}
              specification={card?.specification}
              composition={card?.composition}
            />
          ))}
      </div>
    </>
  );
};

export default Macaron;
