import React from 'react';
import Navbar from './NavBar';
import chefStashe from "./Images/chefStashe.png";

const About = props => {
    
    return ( 
        <div>
          <div className="head-content">
          <link href="https://fonts.googleapis.com/css?family=Italianno" rel="stylesheet" />
          <h1 className="Recipe-Atlas">A la Italiana</h1>
          <img className="chefStashe" src={chefStashe} alt="Chef Mustache" />
          <div className="App">
          </div>
        </div>
        <div>
          <Navbar />
        </div>
        <div className="about_us_title">
          <h1>About US</h1>
        </div>
        <div>
          <p>This team is amazing! </p>
        </div>
      </div>
    )
}

export default About;
