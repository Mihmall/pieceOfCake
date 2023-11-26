import React,{useState,useEffect} from "react";
import Card from "@/components/Card/Card";
// import catalog from '@/data/catalog.json'

// при открытии загружать карточки тортов
const Cake = () => {

      // Стейт для карточек
      const [cards, setCards] = useState([]);
    
      //   получение данных
        const fetchCards = async () => {
          try {
            const response = await fetch(
              'http://localhost:3001/catalogCard'
            );
            
            const data = await response.json();
      
            const cardsData = data.map((item) => ({
              name: item?.name,   
              type: item?.type,
              image: item?.image,
              cost: item?.cost,
              specification: item?.specification ,
              composition: item?.composition,
            }));
      
            setCards(cardsData);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
      
        useEffect(() => {
          fetchCards();
        }, []);


  return (
    <>
      <div className="container">
        <h1>Торты</h1>
      </div>
      <div>
        {cards?.map((card) => (
          <Card
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

export default Cake;
