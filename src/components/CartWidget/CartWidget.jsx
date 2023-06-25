import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./CartWidget.css";

const CartWidget = () => {
  return (

  <Badge badgeContent={5} color="error"   anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}>
    <ShoppingCartOutlinedIcon sx={{ color: "white", fontSize:"2.5em" }} />  
  </Badge>
      


  );
};

export default CartWidget;
