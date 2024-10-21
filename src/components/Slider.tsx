import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

import Img1 from "../assets/Banner.png"
import Img2 from "../assets/Banner2.png"
import Img3 from "../assets/Banner3.png"

interface CarouselItemProps {
  item: {
    name: string;    
    img: string;
  };
}


const CarouselItem: React.FC<CarouselItemProps> = ({ item }) => {
  return (
      <Paper           
          style={{
              padding: '10px',            
              backgroundSize: 'cover',
              display: 'flex',          
          }}
      > 
          <img src={item.img}
          style={{
          width: '100%',
          maxHeight: '300px', 
          objectFit: 'cover', 
          borderRadius: '5px',        
        }} ></img>  
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
    img: Img2
  },
  {
    name: 'Item 3',
    img: Img3
  }
];

const CarouselComponent: React.FC = () => {
  return (
    <Carousel animation="slide"
    autoPlay={true}    
    interval={3000}      
    duration={600}       
    indicators={true}    
    navButtonsAlwaysVisible={true}>
      {items.map((item, index) => (
        <CarouselItem key={index} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
