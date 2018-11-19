import React from 'react';




const Navbar = (props) => {
return (
  <header>
    <div className="navbar">
      <span className="brand">
        
        <a href="/">Home</a>
        <a href="./About">About</a>
        <div className="dropdown">
          <button className="dropbtn">
            Dropdown
            <i className="fa fa-caret-down" />
          </button>
          <div className="dropdown-content">
            <a href="./components/About.js">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </span>
      <span className="center">
        <form className="searchform" onSubmit={props.getRecipe}>
          <input
            type="text"
            placeholder="Search your recipe"
            name="recipeName"
          />
          <button> Search </button>
        </form>
      </span>
    </div>
  </header>
);
}
 



export default Navbar;
