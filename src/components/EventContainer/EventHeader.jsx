import { textAlign } from "@mui/system";
import React from "react";
import image from './../../assets/Event_image/main1.gif'
import './EventContainer.css';

function EventHeader() {
  return (
    <div style={{backgroundColor: '#74c4f9',height:'190px'}}>
      <img className= 'videoHeader' src={image}  />
    </div>
  );
}

export default EventHeader;