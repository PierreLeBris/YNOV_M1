import React from "react";
import '../../App.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../../daytona.jpg'
import image2 from '../../streetfighter.jpg'
import image3 from '../../mt07.jpg'


const Slide = () => {
  return (
    <div className="Slide">
    <AliceCarousel 
        autoPlay autoPlayInterval="4000"
        mouseTrackingEnabled={true}
        infinite ={true}>

        <img src={image1} className="sliderimg" alt=""/>
        <img src={image2} className="sliderimg" alt=""/>
        <img src={image3} className="sliderimg" alt=""/>
    </AliceCarousel>
    </div>
  );
};

export default Slide;
