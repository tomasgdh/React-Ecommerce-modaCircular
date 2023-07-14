import { Card,CardMedia,CardContent,Typography,Grid } from "@mui/material";

const AboutPage = () => {
  let path = "/Static/img/";
  return (
    <div style={{  marginTop:"35px", display: "flex", flexWrap: "wrap",flexDirection:"column",  justifyContent: "space-evenly", alignContent: "space-around"}}>
        <Card sx={{ display: "flex"}}>
        <CardMedia
          component="img"
          image={path + "quienesSomos.jpg"}
        />
      <CardContent  sx={{maxWidth:"431px"}}>
      <Grid container spacing={2} style={{marginTop:"10px", flexDirection:"column"}}>
        <Grid item>  
        <Typography variant="h4" >
          {"About us?"}
        </Typography>
        </Grid>
        <Grid item> 
        <Typography  variant="h6" >
          {"We are not just an American fair. We are a family business, whose objective is to offer you new and like-new quality garments and the best brands at affordable prices."}
        </Typography>
        </Grid>
        <Grid item> 
        <Typography  variant="h6" >
          {"From MARÍA MODA CIRCULAR we seek to promote care for the environment, through conscious consumption and the recirculation of garments."}
        </Typography>
        </Grid>
        <Grid item> 
        <Typography  variant="h6" >
          {"We are waiting for you at our local Flores so that you can also join and be part of this movement."}
        </Typography>
        </Grid>
        </Grid>
      </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;
