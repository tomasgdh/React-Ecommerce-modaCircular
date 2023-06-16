import { useState, useEffect } from "react";
import { useParams,useNavigate,Outlet } from "react-router-dom";
//import axios from "axios";

// Components
import ClothingCard from "../../components/Card/ClothingCard";

const DetailPage = () => {
  const navigate = useNavigate();
  const [clothing, setClothing] = useState([]);
  const [cloth, setCloth] = useState([]);
  
  let { id } = useParams();

/* useEffect(() => {
    axios(`/data/Clothing.json/${id}`).then((json) =>
    setClothing(json.data)
    );
  }, [id]);*/

  useEffect(() => {
    fetch("./../data/Clothing.json")
      .then((response) => response.json())
      .then((data) => setClothing(data));
  }, []);

  useEffect(() => {
    const cloth = clothing.find((cloth) => cloth.id === id);
    setCloth(cloth);
    if(cloth === undefined && clothing.length != 0){
      navigate("/not-found");
    }
  }, [clothing,id,navigate]);

  
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {cloth ? <ClothingCard data={cloth} /> : null}
      <Outlet />
    </div>

  );
};

export default DetailPage;
