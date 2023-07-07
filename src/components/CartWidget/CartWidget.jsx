import { useContext } from "react";
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const { getProductsQuantity } = useContext(CartContext);
  const quantity = getProductsQuantity();
  return (
    <Link to="/checkout">  
          <Badge badgeContent={quantity} color="error"   anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}>
            <ShoppingCartOutlinedIcon sx={{ color: "white", fontSize:"2.5em" }} />  
          </Badge>
      </Link> 


  );
};

export default CartWidget;
