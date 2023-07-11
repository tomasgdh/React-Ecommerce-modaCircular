import { useState, useEffect } from "react";
import { useParams,useNavigate,Outlet } from "react-router-dom";
//import axios from "axios";
import { collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

// Components
import ClothingCard from "../../components/Card/ClothingCard";

const DetailPage = () => {
  const navigate = useNavigate();
  const [cloth, setCloth] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  let { id } = useParams();

  useEffect(() => {
    const getCloth = async () => {
      const q = query(
        collection(db, "Clothes"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setCloth(docs);
    };
    getCloth();
    if(cloth === undefined && clothing.length != 0){
      navigate("/not-found");
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
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
