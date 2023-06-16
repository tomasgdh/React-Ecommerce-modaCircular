/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

// Styles
import "./ClothingCard.css";

const ClothingCard = ({ data }) => {
  let path = "/Static/Images/";

  const HandlerClickAgregarCarrito = () => {
    return false;
  };

  return (
    <Card sx={{ width: 250, marginBottom: "10px", textDecoration: "none" }}>
      <Link style={{ textDecoration: "none" }} to={`/detail/${data.id}`}>
        <CardMedia
          component="img"
          sx={{ height: 250 }}
          image={path + data.img}
          title={data.title}
        />
      </Link>

      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.ShortDescription}
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="body2">{data.price1}</Typography>
          <Typography
            className="textoTachado"
            sx={{ marginLeft: 2 }}
            variant="body2"
            color="text.secondary"
          >
            {data.price2}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={HandlerClickAgregarCarrito}
        >
          Agregar al Carrito
        </Button>
      </CardActions>
    </Card>
  );
};
export default ClothingCard;
