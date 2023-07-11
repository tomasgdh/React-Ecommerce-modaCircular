
import { Link } from "react-router-dom";
import './Logo.css'

const LogoMaria = () => {
    return (
      <Link to="/">
      <img src='/Static/Images/LogoMaria.jpg' className='logoMaria' style={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      </Link>

    );
  };
  
  export default LogoMaria;