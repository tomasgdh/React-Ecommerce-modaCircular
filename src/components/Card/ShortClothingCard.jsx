/* eslint-disable react/prop-types */
import {useContext} from 'react'
import {Card,CardActions,CardContent,CardMedia,Button,Typography, Chip} from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

// Styles
import "./ClothingCard.css";

const ClothingCard = ({ item }) => {
  const { addItemToCart } = useContext(CartContext)

  const HandlerClickAgregarCarrito = () => {
    addItemToCart(item, 1);/*counter */
  };
  return (
    <div className="card-product" >
      
    <Card sx={{ width: 250, marginBottom: "10px" }}>
      <Link className='link' to={`/detail/${item.id}`}>
        <CardMedia
          component="img"
          sx={{ height: 250 }}
          image={item.img}
          title={item.title} />     

      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.ShortDescription}
        </Typography>
        {(item.off != "")? <Chip label={`${item.off}% OFF`} color="success" />   : null }
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="body2">{`$ ${item.price}`}</Typography>
          <Typography
            className="textoTachado"
            sx={{ marginLeft: 2 }}
            variant="body2"
            color="text.secondary"
          > {(item.listPrice != "")?
            `$ ${item.listPrice}`
          : null
          }
          </Typography>
        </div>
      </CardContent>
      </Link>
      <CardActions sx={{display: "flex", justifyContent: "center"}}>
        <Button
          size="small"
          color="primary"
          onClick={(HandlerClickAgregarCarrito)}
          variant="contained"  >
          Agregar al Carrito
        </Button>
      </CardActions>
    </Card>
    </div>
  );
};
export default ClothingCard;
