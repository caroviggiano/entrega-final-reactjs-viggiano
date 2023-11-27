import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./CardUser.css"

const CardUser = ({ producto }) => {
  return (
    <Card className="custom-card">
      <CardMedia
        component="img"
        alt="Producto"
        image={producto.img}
        className="card-image"
      />
      <CardContent className="card-content">
        <Typography gutterBottom variant="h5" component="div">
          {producto.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {producto.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {producto.date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {producto.precio}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardUser;
