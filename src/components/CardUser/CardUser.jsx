import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./CardUser.css"

const CardUser = ({img,name,description,date}) =>  {
  return (
    <div className='Cards'> 
    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="imagen rota"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="" color="text.secondary">
         {date}
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    
  );
}

export default CardUser;