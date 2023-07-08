import { useState, useEffect } from "react";

//Components
import CardList from "../CardList/CardList";
import Spinner from "../Spinner/Spinner";

const CardListContainer = () => {
  const [clothing, setClothing] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /*  useEffect(() => {
    
    //fetch("https://rickandmortyapi.com/api/character")
      //.then((response) => response.json())
      //.then((json) => console.log(json.results));
    
    axios(`${process.env.REACT_APP_BASE_URL}`).then((json) =>
    setChars(json.data.results)
  );
}, []);*/
  useEffect(() => {
    setIsLoading(true)
    fetch("./data/Clothing.json")
      .then((response) => response.json())
      .then((data) => setClothing(data))
      .finally(() =>  setIsLoading(false));
      /*setTimeout(() => {
        setIsLoading(false);
      }, 2000);*/
  }, []);

  return (
    <div style={{display:"flex",justifyContent: "center", marginTop:"10px"}}>        
      {isLoading ? (
        <Spinner />
      ) : clothing.length > 1 ? (
        <CardList dataClothing={clothing} />
      ) : null}
      </div>
  );
};

export default CardListContainer;
