import React from 'react';
import { CardActionArea, Typography, CardMedia, CardContent, Card } from '@mui/material';

function SingleCard(props){

    const styles = {
        padding: "10px 10px",
        boxShadow: "0 5px 26px 0 rgb(68 88 144 / 14%)"
    }

    return(
        <div style={styles}>
          <Card sx={{maxWidth: props.width}}>
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
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
    )
}

export default SingleCard;