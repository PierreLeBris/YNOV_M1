import React from 'react';
import image from '../../daytona.jpg'
import image2 from '../../mt07.jpg'
import image3 from '../../streetfighter.jpg'
import '../../App.css'
import { Link } from 'react-router-dom';


const Article = () => {
    return (
        <header>
          <Link to="/moto1">
          <div className = "head-text">
            <div className = "head-image">
              <img src = {image} alt = "HighSide" className ="highside"/>
            </div>
              <div class='text-on-image'>
                 <h3> Triumph </h3>
                 <p> Daytona </p>
              </div>
          </div>
          </Link>
          <Link to="/moto2">
          <div className = "head-text">
            <div className = "head-image">
              <img src = {image2} alt = "HighSide" className ="highside"/>
            </div>
              <div class='text-on-image-mt'>
                 <h3> Yamaha </h3>
                 <p> MT 07 </p>
              </div>
          </div>
          </Link>
          <Link to="/moto3">
          <div className = "head-text">
            <div className = "head-image">
              <img src = {image3} alt = "HighSide" className ="highside"/>
            </div>
              <div class='text-on-image-ducat'>
                 <h3> Ducati </h3>
                 <p> Streetfighter V4 </p>
              </div>
          </div>
          </Link>
        </header>
      )
};

export default Article;