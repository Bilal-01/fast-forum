import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./eventsContainer.css";
import axios from "axios";

const EventsContainer = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEvents = async () => {
    setIsLoading(true);
    const response = await axios.get(
      "http://localhost/forum/php/api/event.php"
    );
    setEvents(response.data.results);
    setIsLoading(false)
    //  console.log(response.data.results); // Log the response data
  };
  useEffect(() => {
    console.log(isLoading);
    fetchEvents();
  }, []);

  return (
    <div>
      <Slide>
        { isLoading && <p> Loading...</p> }
        {events.map((event)  => (
          <div className="each-slide" key={event.id}>
            <div className="slide-image"
            >
              <div className="span-id">
               <p >
                 SOCIETY : {event.society_name}
                </p>
                <p>
                 EVENT : {event.event_name}
                </p>
                <p>
                 MONTH : {event.month}
                </p>
              </div>
            <img   src={event.image_path} height="100%" width="50%" />
            </div>
            
          </div>
        ))
        }
      </Slide>
    </div>
  );
};

export default EventsContainer;
