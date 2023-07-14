
// OWN Components
import ClothingCard from "../Card/ShortClothingCard";

//CSS
import "./CardList.css";

const CardList = ({dataClothing=[]}) => {
  
  return (
    <div className="CardList">
      {dataClothing.map((cloth) => {
        return (
          <div key={cloth.id} style={{ margin: 10 }}>
              <ClothingCard item={cloth} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
