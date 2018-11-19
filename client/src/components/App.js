
import React from 'react';
import Navbar from './NavBar';
import { Component } from 'react';
import chefStashe from './Images/chefStashe.png';
import Footer from './Footer';



import axios from 'axios';

import Recipes from './Recipes.js';
import PastaDeck from './PastaDeck.js';
import Pizza from './Pizza.js';
import PastaCarousel from './RealCarousel.js';


class App extends Component {

  state = {
    recipeList: [],
    hasRecipes: false
  }


  getRecipe = (e) => {
    e.preventDefault();
    axios.get(`/api`)
    .then((res) => {
      this.setState({ hasRecipes: true })
      console.log(res.data)
    })
  }

  render() {
    return <div>
        <div>
          <div className="head-content">
            <link href="https://fonts.googleapis.com/css?family=Italianno" rel="stylesheet" />
            <h1 className="Recipe-Atlas">A la Italiana</h1>
            <img className="chefStashe" src={chefStashe} alt="Chef Mustache" />
            <div className="App">

              {/* {this.state.hasRecipes ? <Recipes /> : null} */}
            </div>
          </div>
          <div>
            <Navbar getRecipe={this.getRecipe} />
            <div />
          </div>
          <div>
            <PastaCarousel />
          </div>
        </div>
        <div>
          <PastaDeck />
        </div>
        <div>
          <Pizza />
        </div>
        <div>
          <Footer></Footer>
        </div>

      </div>;
  }
}

export default App;
