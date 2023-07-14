import React, { useState,useContext } from "react";


import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import {TextField, Typography,Button,Paper} from "@mui/material";

//Components
import ButtonBack from '../ButtonBack/ButtonBack'
import CustomMessage from "../CustomMessage/CustomMessage";

//Contexto
import { CartContext } from '../../context/CartContext';

//Css
//import "./Shop.css";

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const initialState = {
  name: "",
  lastName: "",
  mail: "",
  confirmMail: ""
};

const CheckOut = () => {
  const [values, setValues] = useState(initialState);
  // Este estado está destinado a guardar el id de la compra
  const [purchaseID, setPurchaseID] = useState("");
  const { getCart, getProductsTotalPrice, clearCart } = useContext(CartContext)
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "purchasesCollection"), {
      values,
    });
    // console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <Paper style={{marginTop:"40px"}} elevation={3} >
       <ButtonBack style={{marginTop:"10px"}}/> 
      <Typography variant="h3">{`Formulario de pago`}</Typography>
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
      {purchaseID && <CustomMessage purchaseID={purchaseID} />}
    </Paper>
  );
};

export default CheckOut;
