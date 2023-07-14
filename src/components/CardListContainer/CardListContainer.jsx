import { useState, useEffect } from "react";

// FIRBASE - FIRESTORE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

// Own Components
import CardList from "../CardList/CardList";
import Spinner from "../Spinner/Spinner";

const CardListContainer = () => {
  const [clothing, setClothing] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getClothing = async () => {
      const q = query(collection(db, "Clothes"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      })
      setClothing(docs);
    };
    getClothing().finally( () =>{      
      setIsLoading(false)
     })
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
