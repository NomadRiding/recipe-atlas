import React from 'react';
import Recipe from './Recipe.js';
import { Grid } from 'semantic-ui-react';

const Recipes = props => {
  return(
    <Grid columns='equal' centered>
      {props.recipes.map((recipe) => {
        return <Recipe key={props.recipe_id} recipe={recipe} />
      })}
      </Grid>
  )
}

export default Recipes;
