import React, { useState, useEffect } from "react";
import SingleCard from "./SingleCard";
import Grid from "@mui/material/Grid";

import "./CardActionArea1.css";

import axios from "axios";

function CardActionArea1() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [societies, setSociety] = useState([]);
  useEffect(() => {
    getSocietyDetails();
  }, []);
  function getSocietyDetails() {
    axios.get("http://localhost/forum/php/api/society.php").then(function(res) {
      console.log(res.data.results);
      setSociety([...res.data.results]);
    });
  }

  return (
    <div className="Society-Main">
      <Grid
        container
        sx={{ marginLeft: "80px", padding: "10px" }}
      >
        {societies.map((society, i) => (
          <Grid item md={4} sx={{ boxShadow: "none" }}>
            <SingleCard
              key={society.society_id}
              width="350px"
              height="200px"
              logo={society.logo_img_path}
              heading={society.sname}
              description={society.sdescription}
              head={society.tname}
              president={society.president_id}
              link={society.socialMedia_link}
            />
          </Grid>
        ))}
      </Grid>
  );
}
export default CardActionArea1;
