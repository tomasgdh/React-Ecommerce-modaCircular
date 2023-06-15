import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
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
