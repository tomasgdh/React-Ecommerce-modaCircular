import { useNavigate } from "react-router-dom";

// MUI Components
import {Button} from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const ButtonBack = ({style}) => {
    const navigate = useNavigate();
    const backPage = () => {
        navigate(-1)
    } 
    return (<>
            <Button style={style} variant="contained" onClick={backPage}><ArrowBackOutlinedIcon/> Back</Button>     
            </>)
}

export default ButtonBack;