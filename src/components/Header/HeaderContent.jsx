import React from 'react';
import bgImg1 from "../../assets/bg-img1.jpeg";
import bgImg2 from "../../assets/bg-home1.jpeg";
import bgImg3 from "../../assets/bg-home2.jpeg";import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   centerMode: true,
   variableWidth: true,
   swipeToSlide: true,
   edgeFriction: 0.15,
};

function HeaderContent(){
    {/* <Slider {...settings}>
        <img className='bg-img' src={bgImg2} alt="background" />
        <img className='bg-img' src={bgImg3} alt="background" />
    </Slider> */}
    
    return(
        <div className="content-wrapper">
            <img className='bg-img' src={bgImg1} alt="background" />
        </div>
    )
}

export default HeaderContent;