import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {Grid,Button,Typography} from "@mui/material";

const ItemCounter = ({item}) =>  {
    const [counter, setCounter] = useState( item.stock > 0 ? 1 : 0)
    const { addItemToCart } = useContext(CartContext)
    const sumar  = () => {
        if( counter < item.stock ) 
            setCounter(counter + 1)
    }
    const restar = () => {
        if( counter > 1 ) 
            setCounter(counter - 1)         
    }
    const HandlerClickAgregarCarrito = () => {
        addItemToCart(item, counter);
      };
    return (
        <>
    <Grid container spacing={2} alignItems="center" style={{marginTop:"10px"}}>
        <Grid item>
            <Button variant="contained" onClick={restar} disabled={ counter === 1 } >
            -
            </Button>
        </Grid>
        <Grid item>
            <Typography variant="h6">{counter}</Typography>
        </Grid>
        <Grid item>
            <Button variant="contained" onClick={sumar}>
            +
            </Button>
        </Grid>
        <Grid item>
            <Button variant="contained" onClick={HandlerClickAgregarCarrito} disabled={ counter === 0 }>
            Agregar al carrito 
            </Button>
        </Grid>
    </Grid>
        </>
    )
}

export default ItemCounter;