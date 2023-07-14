import { useState, useEffect } from "react";

// Router
import { useParams,useNavigate,Outlet } from "react-router-dom";

// Firebase
import { collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

// own Components
import ClothingCard from "../../components/Card/ClothingCard";
import Spinner from "../../components/Spinner/Spinner";

const DetailPage = () => {
  const navigate = useNavigate();
  const [cloth, setCloth] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  let { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getCloth = async () => {
      const q = query(
        collection(db, "Clothes"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setCloth(docs.length > 0 ? docs[0] :[]);
      if(docs.length  == 0){
        navigate("/not-found");
      };
    };
    getCloth().finally( () =>{      
      setIsLoading(false)
     })

  }, [id]);
  
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {isLoading ? (
        <Spinner />
      ) : cloth ? <ClothingCard data={cloth} /> : null}
      <Outlet />
    </div>

  );
};

export default DetailPage;
