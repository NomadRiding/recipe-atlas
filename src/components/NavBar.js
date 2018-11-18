import React from 'react';



const Navbar = () => {
return (
        <div className="navbar">
  <a href="#home">Home</a>
  <a href="#About">About</a>
  <div className="dropdown">
    <button className="dropbtn">Dropdown 
      <i class="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="./components/About.js">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
  </div>
  

            
            
        );
    }
 



export default Navbar;