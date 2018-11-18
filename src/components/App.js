import React, { Component } from 'react';


import axios from 'axios';

import Form from "./Form.js";
import Recipes from './Recipes.js';
import PastaDeck from './PastaDeck.js';
import Pizza from './Pizza.js'


class App extends Component {

  state = {
    recipeList: [],
    hasRecipes: false
  }

  getRecipe = (e) => {
    e.preventDefault();
    axios.get(`https://www.food2fork.com/api/search`)
    this.setState({ hasRecipes: true })
  }

  render() {
    return (
        <div>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        { this.state.hasRecipes ? <Recipes /> : null }
      </div>
      <div>
          <PastaDeck />
      </div>
      <div>
          <Pizza />
      </div>
      </div>
    )
  }
}

export default App;
