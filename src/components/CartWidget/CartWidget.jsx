//import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
//import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
//import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className='CartContainer'>
      <ShoppingCartOutlinedIcon sx={{ color: "white", fontSize:"2.5em" }} />
      <span className="cart-badge">{"5"} </span>
    </div>
  );
};

export default CartWidget;
