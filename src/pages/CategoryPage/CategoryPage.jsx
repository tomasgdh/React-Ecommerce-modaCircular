import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
//import axios from "axios";

// Components
import ClothingCard from "../../components/Card/ShortClothingCard";

// Styles
import "../../components/CardList/CardList.css";

const Category = () => {
  const [clothing, setClothing] = useState([]);
  const navigate = useNavigate();

  let { categoryId } = useParams();

  let filteredClothing = clothing.filter((cloth) => {
    return cloth.categoryId === categoryId;
  });

  /*useEffect(() => {
    //axios(`${process.env.VITE_APP_BASE_URL}`).then((json) =>
    axios(`./../data/Clothing.json/`).then((json) =>
      setClothing(json.data.results)
    );
  }, []);*/

  useEffect(() => {
    fetch("./../data/Clothing.json")
      .then((response) => response.json())
      .then((data) => setClothing(data));
  }, []);

  useEffect(() => {
    if(clothing.length != 0 && filteredClothing.length == 0 ){
      navigate("/not-found");
    }
  }, [filteredClothing,clothing,navigate]);

  return (
    <div className="CardList">
      {filteredClothing.map((cloth) => {
        return (
          <div style={{ margin: 10 }} key={cloth.id}>
            <ClothingCard data={cloth} />
          </div>
        );
      })}
    </div>
  );
};

export default Category;
