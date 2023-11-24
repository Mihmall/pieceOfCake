import React ,{useState, useEffect}from "react";
import  Navigation  from "../components/Navigation/Navigation";
import { useReg } from "@/components/Registration/Reg";
import Card from "@/components/Card/Card";

const MainLayout = ({ children }) => {
    const { user } = useReg();
      // Стейт для карточек
  const [cards, setCards] = useState([]);
    
  // получение данных
  const fetchCards = async () => {
    try {
      const response = await fetch(
        '/src/data/catalog.json'
      );

      const data = await response.json();

      const cardsData = data.map((item) => ({
        name: item?.name,   
        type: item?.type,
        image: item?.url,
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
      <Navigation />
      <div
            style={{ flexWrap: "wrap" }}
            className="flex flex-wrap justify-between"
          >
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
      {children}
    </>
  );
};

export default MainLayout;
