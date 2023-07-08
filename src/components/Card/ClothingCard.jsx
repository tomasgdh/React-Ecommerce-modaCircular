/* eslint-disable react/prop-types */
//import * as React from 'react';
import Card from "@mui/material/Card";
//import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";



const ClothingCard = ({ data }) => {
  let path = "/Static/Images/";
  return (<>
    <Card sx={{ maxWidth: 250, marginBottom:'10px'}}>
      <CardMedia
        component="img"
        sx={{ height: 250}}
        image={path + data.img}
        title={data.title /*Name*/}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name /*Name*/}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description /*Name*/}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description2 /*Name*/}
        </Typography>
      </CardContent>
    </Card>
        <div style={{  marginTop:"25px", display: "flex", flexWrap: "wrap",flexDirection:"column",  justifyContent: "space-evenly", alignContent: "space-around",alignItems: "center"}}>
        <Card sx={{ display: "flex"}}>
        <CardMedia
          component="img"
          image={path + data.img}
          title={data.title /*Name*/}
        />
      <CardContent  sx={{maxWidth:"431px",  display: "flex",flexWrap: "wrap",flexDirection:"row", alignItems: "center"}}>
      <Typography gutterBottom variant="h5" component="div">
          {data.name /*Name*/}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description /*Name*/}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description2 /*Name*/}
        </Typography>
      </CardContent>
      </Card>
    </div>
    </>
  );
};
export default ClothingCard;
