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
          {"¿Quiénes somos?"}
        </Typography>
        </Grid>
        <Grid item> 
        <Typography  variant="h6" >
          {"No somos solamente una feria americana. Somos un emprendimiento familiar, que tiene como objetivo ofrecerte prendas nuevas y como nuevas de calidad y de las mejores marcas con precios accesibles."}
        </Typography>
        </Grid>
        <Grid item> 
        <Typography  variant="h6" >
          {"Desde MARÍA MODA CIRCULAR buscamos promover el cuidado del medio ambiente, a través del consumo consciente y la recirculación de prendas."}
        </Typography>
        </Grid>
        <Grid item> 
        <Typography  variant="h6" >
          {"Te esperamos en nuestro local de Flores para que vos también te sumes y seas parte de esta movida."}
        </Typography>
        </Grid>
        </Grid>
      </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;
