import React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SingleCard from './SingleCard';

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
  useEffect(()=>{
    getSocietyDetails();
  }, []);
  function getSocietyDetails(){
  axios.get('http://localhost/forum/php/api/society.php').then(function(res){
  console.log(res.data.results);    
  setSociety([...res.data.results])
    })
  }
  function()
  //const [society, setSociety] = useState(null);
  // axios.get('url').then(function(res){
  //    setSociety(res.data.results);
  // })

  // <SingleCard
  //       width = "345px"
  //       height = "200px"
  //       logo={DECS_LOGO}
  //       heading={society.heading} 
  //       description={society.description}
  //       head={society.teacher_name} // this will come from a join query [ do a join on teacher and society]
  //       president= {society.president_name} // this will also come from a join query [ user join on society ]
  //       link={society.link}
  //       />
  //     <SingleCard
  // {societies.map((row, i) => {
    
  return (
    <div>
      <div className='society-card-wrapper'>
      {societies.map((society, i) => (
      <SingleCard
        width = "345px"
        height = "200px"
        logo={DECS_LOGO}
        heading={society.sname} 
        description={society.sdescription}
        head={society.tname} // this will come from a join query [ do a join on teacher and society]
        president= {society.president_id} // this will also come from a join query [ user join on society ]
        link={society.socialMedia_link}
        />
        ))}
        <SingleCard
        
          width = "345px"
          height = "200px"
          logo={TLC_LOGO}
          heading="The Literary Club" 
          description="TLC is the most active, the most happening and the most classy society at FAST. With events like Xpressions, Zauq, Agha Hasan Abedi Declamation Contest, Intra-MUN, Parliamentary Debates and an annual magazine called the localhost"
          head="Miss Javeria"
          president="Ibad Ur Rehman"
          link="https://www.facebook.com/TLCFAST/"
        />

        <SingleCard
          width = "345px"
          height = "200px"
          logo={FDSS_LOGO}
          heading="FAST DataScience Society" 
          description="TLC is the most active, the most happening and the most classy society at FAST. With events like Xpressions, Zauq, Agha Hasan Abedi Declamation Contest, Intra-MUN, Parliamentary Debates and an annual magazine called the 'localhost'"
          head="Amna Mubarak"
          president="20K-1965"
          link="https://www.facebook.com/profile.php?id=100086255005453"        
        />
      </div>
      <div className='society-card-wrapper'>
      <SingleCard
          width = "345px"
          height = "200px"
          logo={ACM_LOGO}
          heading="Association for Computing Machinery" 
          description= "The ACM Student Chapter at FAST-NUCES Karachi Campus is dedicated to the promotion of computing education, research and development.At ACM-NUCES KHI Chapter. You join a team that aims to change the methodology with which students approach computing and technology."
          head="Miss Bakhtawer"
          president="Ismail Ahmed Chaudary"
          link="https://www.facebook.com/acmnuces"
       />
          <SingleCard
          width = "345px"
          height = "140px"
          logo={TNC_LOGO}
          heading="Think N Create" 
          description="The objective of the committee is to develop within students, skill sets related to the industry.
          They shall be introduced to the current technical, managerial, ethical aspects of expertise in use or desired."
          head="-"
          president="Razia"
          link="https://www.facebook.com/tncfast"
        />
          <SingleCard
          width = "345px"
          height = "200px"
          logo={ACM_W_LOGO}
          heading="Association for Computing Machinery - Women" 
          description= " ACM-W supports, celebrates, and advocates internationally for the full engagement of women in all aspects of the computing field, providing a wide range of programs and services to ACM members and working in the larger community to advance the contributions of technical women."
          head="Miss Safia Baloch"
          president="Sara Sameer"
          link="https://www.facebook.com/acmw.nuceskhi"
        />
      </div>

      <div className='society-card-wrapper'>
      <SingleCard
          width = "390px"
          height = "270px"
          logo={CBS_LOGO}
          heading="Character Building Society" 
          description= "We, at CBS, help students to improve themselves by showing better character and enable them to know & act on their responsibilities in different life roles."
          head="Sir Usama Auntley"
          president="Hammadullah"
          link="https://www.facebook.com/CBSfastkhi"
          />
      <SingleCard
          width = "390px"
          height = "210px"
          logo={FMS_LOGO}
          heading="FAST Management Society" 
          description= "FMS is a society founded by the BBA Department. Our main objective is to evince better management skills in the real world job environment. We solely focus on our undergrads, as our goal is for every individual."
          head="-"
          president="-"
          link="https://www.facebook.com/28606FMS/"
          />
      <SingleCard
          width = "390px"
          height = "210px"
          logo={IEEE_LOGO}
          heading="Institute of Electrical and Electronics Engineers" 
          description= "The IEEE NUCES aims to integrate the students and provide them a platform where they could get recognized for their contributions for the development and for the advancement of technology for humanity."
          head="-"
          president="Sidra Ahmed Khan"
          link="https://www.facebook.com/ieee.fast.nuces.khi"
          />
      </div>
      <div className='society-card-wrapper'>
      <SingleCard
          width = "385px"
          height = "210px"
          logo={SPORTICS_LOGO}
          heading="Sportics" 
          description= "The society for those who love sports at FAST-Karachi. Let it be outdoor sports: Volley Ball, Cricket, Throw-ball, Basketball, and  Football or the indoor: Table-tennis, Snooker, Foosball.  For many past years, successively organizing the Intra and Inter University Competitions."
          head="Sir Behraj Khan"
          president="Abdul Saboor Sheikh"
          link="https://www.facebook.com/sportics.nuceskhi"
          />
      <SingleCard
          width = "385px"
          height = "210px"
          logo={GDSC_LOGO}
          heading="Google Developer Students Club" 
          description= "Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome."
          head="-"
          president="-"
          link="https://www.facebook.com/dscnuces/"
          />
      </div>
      </div>
  );
}

export default CardActionArea1;