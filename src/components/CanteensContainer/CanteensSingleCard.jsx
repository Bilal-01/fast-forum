import React from "react";
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function CanteensSingleCard(props) {
  const navigate = useNavigate();

  const styles = {
    padding: "10px",
    boxShadow: "0 5px 26px 0 rgb(68 88 144 / 25%)",
  };
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
            alt={props.canteen}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              {props.heading}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center" }}
            >
              {props.description}
            </Typography>
            <div>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center", paddingTop:"10px"}}
              >
                <LocationOnIcon
                  sx={{
                    color: "blue",
                    verticalAlign: "middle",
                    marginRight: "5px",
                  }}
                />{props.location}
                {/* {props.location} */}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default CanteensSingleCard;
