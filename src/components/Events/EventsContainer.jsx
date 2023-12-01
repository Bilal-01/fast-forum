import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./eventsContainer.css";
import axios from "axios";

const EventsContainer = () => {
 const [events, setEvents] = useState([]);

 useEffect(() => {
  const fetchEvents = async () => {
    const response = await axios.get("http://localhost/forum/php/api/event.php");
    console.log(response.data.results); // Log the response data
    setEvents(response.data.results);
  };
  fetchEvents();
 }, [events]);

 return (
  <div>
    <Slide>
      {events.map((event, index) => (
        <div className="each-slide" key={event.id}>
          <div className="slide-image"style={{ backgroundImage: `url(${event.image_path})` }}>
            <span>{`Slide ${event.id}: ${event.event_name}`}</span>
          </div>
        </div>
      ))}
    </Slide>
  </div>
 );
};

export default EventsContainer;
