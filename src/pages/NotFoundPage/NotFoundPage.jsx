import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <h1>404 - Page Not Found!</h1>
        <p>Serás redirigido a la página principal en {countdown} segundos...</p>
      </div>
    );
  };
  export default NotFoundPage;