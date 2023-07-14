// MUI Components
import {Snackbar,Alert} from '@mui/material';

const CustomizedSnackbars=({openSb,messageSnackBar,onCloseSnackbar=()=>{},typeMessage="error",duration=1500})=> {

  const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        onCloseSnackbar();
        return;
      }    
      onCloseSnackbar();
    };

  return (
      <Snackbar open={openSb}  autoHideDuration={duration} anchorOrigin={{vertical: 'top',horizontal: 'center' }} onClose={handleClose} >
        <Alert onClose={handleClose} variant='filled' severity={typeMessage} sx={{ width: '100%' }}>
          {messageSnackBar}
        </Alert>
      </Snackbar>
  );
}
export default CustomizedSnackbars;