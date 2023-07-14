import React, { useState,useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

//FIREBASE
import { collection, addDoc,doc,updateDoc,increment, serverTimestamp   } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";


//MUI Components
import {TextField, Typography,Button,Paper} from "@mui/material";

//Own Components
import ButtonBack from '../ButtonBack/ButtonBack'
import CustomMessage from "../CustomMessage/CustomMessage";

//Context
import { CartContext } from '../../context/CartContext';

const initialState = {
  name: "",
  lastName: "",
  mail: "",
  confirmMail: ""
};

const CheckOut = () => {
  const [values, setValues] = useState(initialState);
  // Este estado está destinado a guardar el id de la compra
  const [purchaseID, setPurchaseID] = useState(null);
  const { getCart, getProductsTotalPrice, clearCart } = useContext(CartContext)

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const[msg,setMsg] = useState("");
  const[durationMsg,setDurationMsg] = useState(1500);
  const[mostarMsg,setMostarMsg] = useState(false);
  const[typeMessage,setTypeMessage] = useState("success");
  const handlerCloseSnackBar = () => {
    setMostarMsg(false);
    setMsg("");
  };

  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (purchaseID != null && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      setMsg(`Gracias por tu compra:
      El número de orden es: ${purchaseID} te esperamos en la tienda 😉!
      Serás redirigido a la página principal en ${countdown} segundos...`)
      return () => clearTimeout(timer);
    } else if (purchaseID != null && countdown === 0) {
      navigate("/")
    }
  }, [countdown, purchaseID, navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if(values.mail != "" && values.mail != values.confirmMail){
      setMsg('Error: Mails do not match!')
      setTypeMessage('error');
      setDurationMsg(2000)
      setMostarMsg(true)
      return
    }

    const buyer = {
      firstName: values.name, lastName:values.lastName,mail:values.mail
    }
    const cart = getCart()
    
    const order = {
        buyer: buyer,
        products: cart,
        total: getProductsTotalPrice(),
        data: serverTimestamp()
    }
    console.log("buyer:",buyer)
    console.log("order:",order)
    /* const db = getFirestore()
    db.collection("purchasesCollection")
    .add(order)*/
      // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "purchasesCollection"), {
      order,
    }).then((res) => {
      cart.forEach( async product => {
        const dbDoc = doc(db, 'Clothes', product.id);
        await updateDoc(dbDoc, { stock: increment(-product.quantity) });
      })
        setPurchaseID(res.id); 
        setMsg(`Gracias por tu compra:
        El número de orden es: ${res.id} te esperamos en la tienda 😉!
        Serás redirigido a la página principal en ${countdown} segundos...`)
        setTypeMessage('success')
        setDurationMsg(null)
        setMostarMsg(true) 
        setValues(initialState)  
        clearCart()
    })
    .catch((error) => {
      console.log(error)            
    })
  };

  return (<>
    <Paper style={{marginTop:"40px"}} elevation={3} >
       <ButtonBack style={{marginTop:"10px"}}/> 
      <Typography variant="h3">{`Payment Form`}</Typography>
      <form className="FormContainer" onSubmit={onSubmit}>
        <TextField
          placeholder="Name"
          label="Name"
          style={{ margin: 10, width: 400 }}
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Last Name"
          label="Last Name"
          style={{ margin: 10, width: 400 }}
          name="lastName"
          value={values.lastName}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Mail"
          label="Mail"
          style={{ margin: 10, width: 400 }}
          name="mail"
          value={values.mail}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Confirm Mail"
          label="Confirm Mail"
          style={{ margin: 10, width: 400 }}
          name="confirmMail"
          value={values.confirmMail}
          onChange={handleOnChange}
        />
        <Button         
          size="small"
          color="primary"
          onClick={(onSubmit)}
          variant="contained"  >
          Pay Purchase
        </Button>
      </form>
      {/*purchaseID && <CustomMessage purchaseID={purchaseID} />*/}
    </Paper>
    <CustomMessage 
    openSb={mostarMsg}
    typeMessage={typeMessage}
    messageSnackBar={msg}
    duration = {durationMsg}
    onCloseSnackbar={handlerCloseSnackBar}/>
     </>
  );
};

export default CheckOut;
