import React from 'react';
import Ingredients from './Ingredients';


class RecipeList extends React.Component {
    render() {
        return (
            <div>
            <Ingredients />
            	{/* {this.props.list.map((el) => {
					return (<Character data={el} updateRecipeList={this.props.updateRecipeList}
                    />) */}
        </div>
        )
    }
}

export default RecipeList;
