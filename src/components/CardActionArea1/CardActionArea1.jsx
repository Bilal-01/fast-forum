import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SingleCard from './SingleCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import DECS_LOGO from './../../assets/Societies_image/Decs_logo.jpg'
import TNC_LOGO from './../../assets/Societies_image/tnc_logo.png'
import TLC_LOGO from './../../assets/Societies_image/TLC_logo.jpg'
import FDSS_LOGO from './../../assets/Societies_image/fdss_logo.jpg'
import ACM_LOGO from './../../assets/Societies_image/ACM_logo.jpg'
import ACM_W_LOGO from './../../assets/Societies_image/ACM_W_logo.png'
import CBS_LOGO from './../../assets/Societies_image/CBS_logo.jpg'
import GDSC_LOGO from './../../assets/Societies_image/GDSC_logo.jpg'
import FMS_LOGO from './../../assets/Societies_image/FMS_logo.jpg'
import IEEE_LOGO from './../../assets/Societies_image/IEEE_logo.jpg'
import SPORTICS_LOGO from './../../assets/Societies_image/Sportics_logo.jpg'

import './CardActionArea1.css'

import axios from 'axios';

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
    axios.get('http://localhost/forum/php/api/society.php').then(function (res) {
      console.log(res.data.results);
      setSociety([...res.data.results])
    })
  }

  function getLogo(sname) {
    console.log(sname);
    if (sname === "Dramatic and Extra Curricular Society")
      return DECS_LOGO;
    else if (sname === "The Literary Club")
      return TLC_LOGO;
    else if (sname === "FAST DataScience Society")
      return FDSS_LOGO;
   else if (sname === "Association for Computing Machinery")
      return ACM_LOGO;
    else if (sname === "Think N Create")
      return TNC_LOGO;
      else if (sname === "Association for Computing Machinery - Women")
      return ACM_W_LOGO;
      else if (sname === "Character Building Society")
      return CBS_LOGO;
      else if (sname === "Google Developer Students Club")
      return GDSC_LOGO;
      else if (sname === "FAST Management Society")
      return FMS_LOGO;
  }

  return (
      <Grid container item xs={12}>
        {societies.map((society, i) => (
          <Grid item md={4} sx={{ boxShadow: 'none'}}>
            <SingleCard key={society.society_id} 
              width="350px"
              height="200px"
              logo={getLogo(society.sname)}
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


