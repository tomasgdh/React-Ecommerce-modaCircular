import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

// FIREBASE
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

// OWN Components
import ClothingCard from "../../components/Card/ShortClothingCard";
import Spinner from "../../components/Spinner/Spinner";
// Styles
import "../../components/CardList/CardList.css";

const Category = () => {
  const [clothingByCategory, setClothingByCategory] = useState([]);
  
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  let { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true)
    const getPlayer = async () => {
      const q = query(
        collection(db, "Clothes"),
        where("categoryId", "==", categoryId)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setClothingByCategory(docs);
      if(docs.length == 0 ){
        navigate("/not-found");
      }
    };
    getPlayer().finally( () =>{      
      setIsLoading(false)
     })
  }, [categoryId]);

  return (<>
    <div className="CardList">
    {isLoading ? (
        <Spinner />
      ) : clothingByCategory.length > 1 ? (
        clothingByCategory.map((cloth) => {
          return (
            <div style={{ margin: 10 }} key={cloth.id}>
              <ClothingCard item={cloth} />
            </div>
          );
        })
      ) : null}
    </div>
    </>
  );
};

export default Category;
