
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';



const items = mainCarouselData.map((item)=> <img className='cursor-pointer' style={{}}  src={item.image} role='presentation' alt='' />)

const MainCarousel = () => (
    <AliceCarousel
    autoPlay
 
    autoPlayInterval={1000}
    animationDuration={1000}
    animationType="fadeout"
    infinite
    touchTracking={false}
   
    disableButtonsControls
        items={items}
        controlsStrategy="alternate"
        
        
    />
);

export default MainCarousel;