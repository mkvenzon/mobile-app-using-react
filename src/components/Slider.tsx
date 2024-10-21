import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography } from '@mui/material';

import Img1 from "../assets/Banner.png"

interface CarouselItemProps {
  item: {
    name: string;    
    img: string;
  };
}


const CarouselItem: React.FC<CarouselItemProps> = ({ item }) => {
  return (
    <Paper 
      style={{ padding: '5px', backgroundImage: `url(${item.img})`, backgroundSize: 'cover', height: '250px'}}
    >        
      <Typography variant="h4" style={{ color: 'white' }}>
        {item.name}
      </Typography>   
    </Paper>
  );
};

const items = [
  {
    name: 'Item 1',
    img: Img1
  },
  {
    name: 'Item 2',
    img: Img1
  },
  {
    name: 'Item 3',
    img: Img1
  }
];

const CarouselComponent: React.FC = () => {
  return (
    <Carousel>
      {items.map((item, index) => (
        <CarouselItem key={index} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
