import React from "react";
//import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
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

function CardActionArea1() {
  return (
    <div>
      <div className='card-wrapper'>
        <div className='single-card'>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image={DECS_LOGO}
                alt="DECS-Society"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                  Dramatic and Extra Curricular Society
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  DECS has always been on the go in planning extra-curricular activities such as picnics for the FASTians which prove to be both exhilarating and exclusive.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className='single-card'>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={TLC_LOGO}
                alt="TLC-Society"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                  The Literary Club
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  TLC is the most active, the most happening and the most classy society at FAST. With events like Xpressions, Zauq, Agha Hasan Abedi Declamation Contest, Intra-MUN, Parliamentary Debates and an annual magazine called the "localhost"
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className='single-card'>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={FDSS_LOGO}
                alt="FDSS-Society"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                  FAST DataScience Society
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  TLC is the most active, the most happening and the most classy society at FAST. With events like Xpressions, Zauq, Agha Hasan Abedi Declamation Contest, Intra-MUN, Parliamentary Debates and an annual magazine called the "localhost"
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>

      <div className='card-wrapper'>
        <div className='single-card'>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={ACM_LOGO}
                alt="ACM_LOGO"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                  Association for Computing Machinery
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The ACM Student Chapter at FAST-NUCES Karachi Campus is dedicated to the promotion of computing education, research and development.
                  At ACM-NUCES KHI Chapter, you join a team that aims to change the methodology with which students approach computing and technology.                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className='single-card'>
          <Card sx={{ maxWidth: 355 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={TNC_LOGO}
                alt="TNC-Society"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                  Think N Create
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The objective of the committee is to develop within students, skill sets related to the industry.
                  They shall be introduced to the current technical, managerial, ethical aspects of expertise in use or desired.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className='single-card'>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={ACM_W_LOGO}
                alt="ACM_W_LOGO"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                  Association for Computing Machinery -Women
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ACM-W supports, celebrates, and advocates internationally for the full engagement of women in all aspects of the computing field, providing a wide range of programs and services to ACM members and working in the larger community to advance the contributions of technical women.</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>

      <div className='card-wrapper'>
        <div className='single-card'>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image={CBS_LOGO}
                alt="CBS_LOGO"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                  Character Building Society
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We, at CBS, help students to improve themselves by showing better character and enable them to know & act on their responsibilities in different life roles.
                  Facebook</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className='single-card'>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="160"
                image={FMS_LOGO}
                alt="FMS_logo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                  FAST Management Society
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  FMS is a society founded by the BBA Department. Our main objective is to evince better management skills in the real world job environment. We solely focus on our undergrads, as our goal is for every individual.</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className='single-card'>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="160"
                image={IEEE_LOGO}
                alt="IEEE_logo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                  Institute of Electrical and Electronics Engineers                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The IEEE NUCES aims to integrate the students and provide them a platform where they could get recognized for their contributions for the development and for the advancement of technology for humanity.</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>


      </div>
      <div className='card-wrapper'>

        <div className='single-card'>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image={SPORTICS_LOGO}
                alt="Sportics_log"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                  Sportics </Typography>               <Typography variant="body2" color="text.secondary">
                  The society for those who love sports at FAST-Karachi. Let it be outdoor sports: Volley Ball, Cricket, Throw-ball, Basketball, and  Football or the indoor: Table-tennis, Snooker, Foosball.  For many past years, successively organizing the Intra and Inter University Competitions.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className='single-card'>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image={GDSC_LOGO}
                alt="GDSC_LOGO"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                  Google Developer Students Club                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>

    </div>
  );
}

export default CardActionArea1;