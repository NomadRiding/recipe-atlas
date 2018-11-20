import React from 'react';
import Recipe from './Recipe.js';
import { Grid } from 'semantic-ui-react';

const Recipes = props => {
  return(
    
    <Grid columns='equal' centered>
    <h2 className="titleStuff1">Search Results:</h2>
      {props.recipes.map((recipe) => {
        return <Recipe key={props.recipe_id} recipe={recipe} />
      })}
      </Grid>
  )
}

export default Recipes;
