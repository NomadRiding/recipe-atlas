import React, { Component } from 'react';


import axios from 'axios';

import Form from "./Form.js";
import Recipes from './Recipes.js';
import Pasta from './Pasta.js';

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
          <Pasta className="Pastalicious" />
      </div>
      </div>
    )
  }
}

export default App;
