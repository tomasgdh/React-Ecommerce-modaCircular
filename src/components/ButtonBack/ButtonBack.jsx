import { useNavigate } from "react-router-dom";
import {Button} from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const ButtonBack = () => {
    const navigate = useNavigate();
    const backPage = () => {
        navigate(-1)
    } 
    return (<>
            <Button variant="contained" onClick={backPage}><ArrowBackOutlinedIcon/> Volver</Button>     
            </>)
}

export default ButtonBack;