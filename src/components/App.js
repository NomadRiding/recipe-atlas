import React from 'react';
import Navbar from './NavBar';






class App extends React.Component {
    // getRecipe = (e) => {
    //     e.preventDefault();
    //     let recipeName = e.target.elements.recipeName.value;
    //     console.log(recipeName);
        
    // }

    render() {
        return (
            <div>
                <div className='head-content'>
                <link href="https://fonts.googleapis.com/css?family=Italianno" rel="stylesheet"/>
                <h1 className='Recipe-Atlas'>A la Italiana</h1>
                
                 </div>
                 <div>
                 <Navbar></Navbar>
                <div></div>
                </div>
            </div>
        )
    }
}

export default App;
