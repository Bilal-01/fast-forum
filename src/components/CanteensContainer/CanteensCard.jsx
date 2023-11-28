import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CanteensSingleCard from './CanteensSingleCard';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

function CanteensCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [canteens, setCanteen] = useState([]);
  useEffect(() => {
    getCanteenDetails();
  }, []);
  function getCanteenDetails() {
    axios.get('http://localhost/forum/php/api/canteen.php').then(function (res) {
      console.log(res.data.results);
      setCanteen([...res.data.results])
    })
  }

  return (
    
    <div>
    <Grid container justifyContent="center" alignItems="center" >
      {canteens.map((canteen, i) => (
        <Grid item md={2} sx={{ boxShadow: 'none',padding:"10px"}}>
          
          <Link to={canteen.cname.replace(/\s+/g, '-')} style={{textDecoration:'none'}}>
          <CanteensSingleCard key={canteen.id} 
            width="auto"
            height="100vh"
            logo={canteen.image_path}
            heading={canteen.cname}
            description={canteen.cdescription}
            location={canteen.clocation}
          />
          </Link>
        </Grid>
      ))}
    </Grid>
  </div>
  );
}

export default CanteensCard;