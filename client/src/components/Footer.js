import React from 'react'; 
import twitterImg from './Images/twitter.png';
import instagramImg from './Images/instagram-icon.png';


class Footer extends React.Component {
    render() {
        return (
            <div className='Footer'>
                <div>
                    <a href="/">Home </a>
                    <a href="./About.js">About </a>
                    <p>Contact Us</p>
                    
                </div>
                <div className="Footer-links">
                    <p>Connect with us!</p>
                    <div className='social-media-icons'>
                    <img id='twitter' src={twitterImg} alt='twitter'/>
                    <img id='instagram' src={instagramImg}/>
                    </div>
                    </div>
                    <div className='Footer2'>
                    <p>&copy;2018 Team-Phoenix,
                    All rights reserved
                    </p>
                   </div>
                 
                
            </div>
        )
}
};





























export default Footer;