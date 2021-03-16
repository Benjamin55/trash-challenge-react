import React from 'react';
import Carousel from 'react-elastic-carousel';
import './slider.css';
import Card from './Card';

function Slider() {
   
  const breakPoints = [
    {width: 500, itemsToShow: 1},
    {width: 768, itemsToShow: 2},
    {width: 1200, itemsToShow: 3},
    {width: 1500, itemsToShow: 4}
  ]

  return (
    <div className='slider'>
      <Carousel breakPoints={breakPoints}>
        <Card number='1' />
        <Card number='1' />
        <Card number='1' />
        <Card number='1' />

      </Carousel>
    </div>
  )
}

export default Slider
