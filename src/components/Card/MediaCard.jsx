/* eslint-disable react/prop-types */
//import * as React from 'react';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MediaCard = ({data}) => {
  return (
    <Card sx={{ maxWidth: 345, display:'inline',	justifyContent:'space-evenly', alignContent:'space-around',marginBottom:'10px' }}>
      <CardMedia
        component="img" 
        sx={{ height: 300}}
        image={data.avatar_url}
        title={data.login  /*Name*/}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.login /*Name*/} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {data.login  /*Name*/}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.login  /*Name*/}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default MediaCard;