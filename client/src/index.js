import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css';
import App from './components/App';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './styles/global.css';
import About from './components/About';


class Root extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={App} />
                        <Route path="/about" component={About} />
                    </div>
                </BrowserRouter>
            </div>
        )}};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
