import React, { useLayoutEffect, useRef } from 'react';
import bgImg1 from "../../assets/bg-img1.jpeg";
import bgImg2 from "../../assets/bg-home1.jpeg";
import bgImg3 from "../../assets/bg-home2.jpeg";
import {gsap} from "gsap";

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
    
    const content = useRef();
    setTimeout(() => {}, 2000);
    
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".header-heading",  {
                y: 120,
                duration: 1.5,
                opacity: 1 
            });
        }, content);
        setTimeout(() => {}, 1000);

        ctx = gsap.context(() => {
            gsap.to(".header-text",  {
                y: -90,
                duration: 1.5,
                opacity: 1 
            });
        }, content);


        return () => ctx.revert();
    });
          
    
    return(
        <div className="content-wrapper">
            <img className='bg-img' src={bgImg3} alt="background" />
            <div className="img-shadow"></div>
            <div className="content" ref={content}>
                <div className='header-text-container'>
                    <h1 className='header-heading'>
                        Hello
                    </h1>
                    <p className='header-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus lectus dolor, et suscipit tellus rhoncus et. Integer lacus ante, ullamcorper nec mi sed, volutpat viverra sem. Vestibulum ultrices enim vitae tincidunt dignissim
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeaderContent;