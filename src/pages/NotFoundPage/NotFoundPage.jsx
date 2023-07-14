import { useEffect, useState } from 'react';

//Router
import { useNavigate } from 'react-router-dom';

//MUI Components
import {Typography} from "@mui/material";

const NotFoundPage = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        navigate('/');
      }, countdown * 1000);
  
      return () => clearTimeout(timeout);
    }, [countdown, navigate]);
  
    useEffect(() => {
      if (countdown > 0) {
        const interval = setInterval(() => {
          setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
  
        return () => clearInterval(interval);
      }
    }, [countdown]);
  
    return (
      <div style={{marginTop:"35px"}}>
        <Typography variant="h2">{`404 - Page Not Found!`}</Typography>
        <Typography variant="h4">{`Serás redirigido a la página principal en ${countdown} segundos...`}</Typography>
      </div>
    );
  };
  export default NotFoundPage;