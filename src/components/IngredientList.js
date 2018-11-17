import React from 'react';


class IngredientList extends React.Component {
    render() {
        return (
            <div id="character" onClick={ 
				() => this.props.updateRecipeList(this.props.recipe) 
				}>
				<p>Name: {this.props.recipeList[0].title}</p>
				{/* <p>source: {this.props.recipe.source_url}</p>
				<p>display: {this.props.recipe.image_url}</p> */}
			</div>
        )
    }
}


export default IngredientList;
