import React from 'react';
import axios from 'axios';
import Food2Fork from './Food2Fork';
import IngredientList from './IngredientList';
import Carousel from './carousel';





class App extends React.Component {
    // getRecipe = (e) => {
    //     e.preventDefault();
    //     let recipeName = e.target.elements.recipeName.value;
    //     console.log(recipeName);
        
    // }

    render() {
        return (
            <div>
                <div>
                <h1>I am a Recipe App</h1>

                </div>
                <Food2Fork />
                <Carousel />
            </div>
        )
    }
}

export default App;
