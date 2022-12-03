import React from 'react';
import { CardActionArea, Typography, CardMedia, CardContent, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/Facebook';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



function SingleCard(props) {
  const navigate = useNavigate();
  
  const styles = {
    padding: "10px 10px",
    boxShadow: "0 5px 26px 0 rgb(68 88 144 / 14%)"
  }
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  

  return (
    <div style={styles}>
      <Card sx={{ maxWidth: props.width }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={props.height}
            image={props.logo}
            alt={props.society}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
              {props.heading}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>

            <CardActions disableSpacing sx={{ backgroundColor: '#D6E4E5', color: '#404258', fontSize: 17, fontWeight: 'medium', margin: 2 }}>
              <h4>View Details</h4>
              <ExpandMore sx={{ color: "#50577A" }}
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body2" color="text.primary">
                <b>Head</b>: {props.head}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  <b>President</b>: <Link href={'/profile/'+ props.president}>{props.president}</Link>
                </Typography>

                <Typography variant="body2" color="text.secondary" >
                  <IconButton aria-label="Facebook" >
                    <FacebookOutlinedIcon color="primary" fontSize="small" textAlign="left" />
                  </IconButton><Link href={props.link}>{props.link}</Link>
                </Typography>

              </CardContent>
            </Collapse>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default SingleCard;