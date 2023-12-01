import axios from "axios";
import React, { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import "./menuCard.css";
import { Grid } from "@mui/material";

const MenuContainer = ({ canteenName }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        console.log(canteenName);
        const response = await axios.get(
          `http://localhost/forum/php/api/menu.php`,
          {
            params: {
              canteenName: canteenName,
            },
          }
        );
        setMenuItems(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchMenuItems();
  }, [canteenName]);

  return (
    // <div className="menu-page">
      // <div className="menu-page">
      <>
        <div className="main-image-body">
          {menuItems.length > 0 && (
            <img
            className="main-image-left"
            src={menuItems[0].loc_img_path}
            alt="background"
            />
            )}
          {menuItems.length > 0 && (
            <img
            className="main-image"
            src={menuItems[0].main_image_path}
            alt="background"
            />
            )}
        </div>
        <Grid container spacing={2} sx={{paddingLeft:'80px',paddingRight:'50px'}}>
          {menuItems.map((item, index) => (
            <Grid
            item
              key={item.id}
              xs={12}
              md={12}
              lg={6}
              xl={6}
              sx={{ boxShadow: "none" }}
              >
              <MenuCard
                key={item.id}
                food_img={item.image_path}
                name={item.name}
                price={item.price}
                description={item.description}
                />
            </Grid>
          ))}
        </Grid>
      {/* </div> */}
    {/* </div> */}
          </>
  );
};

export default MenuContainer;
