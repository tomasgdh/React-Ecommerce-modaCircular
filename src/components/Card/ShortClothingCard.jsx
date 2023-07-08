/* eslint-disable react/prop-types */
import {useContext} from 'react'
import {Card,CardActions,CardContent,CardMedia,Button,Typography, Chip} from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
// Styles
import "./ClothingCard.css";

const ClothingCard = ({ item }) => {
  let path = "/Static/Images/";
  const { addItemToCart } = useContext(CartContext)

  const HandlerClickAgregarCarrito = () => {
    addItemToCart(item, 1);/*counter */
  };
  return (
    <div className="card-product" >
    <Card sx={{ width: 250, marginBottom: "10px", textDecoration: "none" }}>
      <Link style={{ textDecoration: "none" }} to={`/detail/${item.id}`}>
        <CardMedia
          component="img"
          sx={{ height: 250 }}
          image={path + item.img}
          title={item.title}
        />
      </Link>

      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.ShortDescription}
        </Typography>
        {(item.off != "")?
            <Chip label={`${item.off}% OFF`} color="success" />
          : null
          }
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="body2">{`$ ${item.price1}`}</Typography>
          <Typography
            className="textoTachado"
            sx={{ marginLeft: 2 }}
            variant="body2"
            color="text.secondary"
          > {(item.price2 != "")?
            `$ ${item.price2}`
          : null
          }
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={(HandlerClickAgregarCarrito)}
        >
          Agregar al Carrito
        </Button>
      </CardActions>
    </Card>
    </div>
  );
};
export default ClothingCard;
