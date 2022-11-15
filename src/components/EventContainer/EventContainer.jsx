import React from 'react';
import './EventContainer.css';
import ImageSlider from './ImageSlider';
import EventHeader from './EventHeader';
import { SliderData } from './SliderData';

function EventContainer() {
  return (
    <div>
      <div>
        <EventHeader/>
      </div>
      <div style={{backgroundColor: '#FDEEDC' ,height:'490px'}}>
        <ImageSlider slides={SliderData} />;
      </div>
    </div>
  )
}

export default EventContainer;