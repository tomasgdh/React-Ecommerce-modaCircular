import { useState, useEffect } from "react";

// FIRBASE - FIRESTORE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

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
}, []);
  useEffect(() => {
    setIsLoading(true)
    fetch("./data/Clothing.json")
      .then((response) => response.json())
      .then((data) => setClothing(data))
      .finally(() =>  setIsLoading(false));
      //setTimeout(() => {
      //  setIsLoading(false);
      //}, 2000);
  }, []);*/
  useEffect(() => {
    setIsLoading(true);
    const getClothing = async () => {
      const q = query(collection(db, "Clothes"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      })
      setClothing(docs);
    };
    getClothing().finally(setIsLoading(false));
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
