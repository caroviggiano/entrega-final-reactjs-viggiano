import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./CardUser.css"

const CardUser = ({ producto }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Producto"
        image={producto.img}
        style={{ height: '350px', width: '100%' }}

      />
      <CardContent >
        <Typography  gutterBottom variant="h5" component="div">
          {producto.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          {producto.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {producto.date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardUser;
