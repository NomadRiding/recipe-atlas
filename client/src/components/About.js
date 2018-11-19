import React from 'react';
import Navbar from './NavBar';

const About = props => {
    
    return ( 
        <div>
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
