import {useState,useEffect} from "react";

export const takeCards =()=>{
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
        id:item.id,
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

  return cards;
}

