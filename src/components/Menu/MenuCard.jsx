import React from "react";
import "./menuCard.css";

const MenuCard = ({ name, description, price,food_img }) => {
  
  return (
        <div className="meal-container">
          <img src={food_img} alt="img" className="menu-img" />
          <div className="meal-details">
            <div className="title-price">
              <h2>{name}</h2>
              <p>Rs.{price}</p>
            </div>
            <div className="para-menu">
              <p>{description}</p>
            </div>
          </div>
    </div>
  );
};
export default MenuCard;
