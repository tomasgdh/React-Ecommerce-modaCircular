import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


// eslint-disable-next-line react/prop-types
const CustomizedSnackbars=({openSb,messageSnackBar,onCloseSnackbar=()=>{},typeMessage="error"})=> {

  const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        onCloseSnackbar();
        return;
      }    
      onCloseSnackbar();
    };

  return (
      <Snackbar open={openSb}  autoHideDuration={1500} anchorOrigin={{vertical: 'top',horizontal: 'center' }} onClose={handleClose} >
        <Alert onClose={handleClose} variant='filled' severity={typeMessage} sx={{ width: '100%' }}>
          {messageSnackBar}
        </Alert>
      </Snackbar>
  );
}
export default CustomizedSnackbars;