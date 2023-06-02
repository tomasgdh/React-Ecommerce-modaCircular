//import * as React from 'react';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line react/prop-types
const MediaCard = ({img, title, name, description,description2}) => {
  return (
    <Card sx={{ maxWidth: 345, display:'inline',	justifyContent:'space-evenly', alignContent:'space-around',marginBottom:'10px' }}>
      <CardMedia
        component="img" 
        sx={{ height: 300}}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description2}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default MediaCard;