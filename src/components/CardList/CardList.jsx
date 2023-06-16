import { useState, useEffect } from "react";

//Components
import ClothingCard from "../Card/ShortClothingCard";

//CSS
import "./CardList.css";

const CardList = () => {
  const [clothing, setClothing] = useState([]);

  /*  useEffect(() => {
    
    //fetch("https://rickandmortyapi.com/api/character")
      //.then((response) => response.json())
      //.then((json) => console.log(json.results));
    
    axios(`${process.env.REACT_APP_BASE_URL}`).then((json) =>
    setChars(json.data.results)
  );
}, []);*/
  useEffect(() => {
    fetch("./data/Clothing.json")
      .then((response) => response.json())
      .then((data) => setClothing(data));
  }, []);

  return (
    <div className="CardList">
      {clothing.map((cloth) => {
        return (
          <div key={cloth.id} style={{ margin: 10 }}>
              <ClothingCard data={cloth} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
