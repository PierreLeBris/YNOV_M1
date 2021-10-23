import React from 'react';
import logo from '../../daytona.jpg'
import '../../App.css'


const Article = () => {
    return (
        <header>
          <div className = "head-text">
            <div className = "head-image">
              <img src = {logo} alt = "HighSide" className ="highside"/>
            </div>
              <div class='text-on-image'>
                 <h3> Triumph </h3>
                 <p> Daytona </p>
              </div>
          </div>
        </header>
      )
};

export default Article;