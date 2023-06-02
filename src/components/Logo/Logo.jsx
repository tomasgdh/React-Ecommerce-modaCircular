
//import logoMaria from './public/LogoMaria.jpg';
import './Logo.css'

const LogoMaria = () => {
    return (
      <img src='./src/assets/LogoMaria.jpg' className='logoMaria' style={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
    );
  };
  
  export default LogoMaria;