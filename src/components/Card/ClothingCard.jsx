/* eslint-disable react/prop-types */

import {Card,CardContent,CardMedia,Typography,Chip, Grid} from "@mui/material";


//Componentes
import ItemCounter from '../ItemCounter/ItemCounter';
import ButtonBack from '../ButtonBack/ButtonBack';

const ClothingCard = ({ data }) => {
  return (<>
        <Card sx={{ marginTop:"25px", display: "flex"}}>
          <CardMedia
            component="img"            
            image={data.img}
            title={data.title }
          />
          <CardContent  sx={{maxWidth:"431px", }}>
          <Grid container spacing={2} style={{marginTop:"10px", flexDirection:"column"}}>
          <Grid item>
            <ButtonBack/>      
            <Typography variant="h5" >
                {data.name }
            </Typography>
          </Grid>
          <Grid item> 
            <Typography variant="h5" color="text.primary">
                {data.description }
            </Typography>
          </Grid>
          <Grid item> 
            {(data.off != "")? <Chip style={{marginLeft:"5px",marginRight:"5px",}} label={`${data.off}% OFF`} color="success" />   : null }
          </Grid>
          <Grid container flexDirection="row" alignItems="center" justifyContent={"center"}> 
            <Typography variant="h6">{`$ ${data.price}`}</Typography>
            <Typography  className="textoTachado"  sx={{ marginLeft: 2 }} variant="h6" color="text.secondary" > 
                  {(data.listPrice != "")? `$ ${data.listPrice}` : null }
            </Typography>
          </Grid>
          <Grid item> 
            <Typography variant="h6">{`Stock: ${data.stock}`}</Typography>
          </Grid>
          <Grid item> 
            <ItemCounter item={data}/>
            </Grid>
            </Grid>
          </CardContent>  
        </Card>
    </>
  );
};
export default ClothingCard;
