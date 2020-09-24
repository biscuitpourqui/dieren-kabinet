import React from 'react';
import ReactDOM from 'react-dom';

import animalData from './animal-data.js';

console.log(animalData);

function Header(props) {
    return (
        <header>
            <h1>Unseen Animals</h1>
            <ul>
                <li>Refresh</li>
                <li>Random</li>
                <li>
                    <input
                        type="search"
                        placeholder="Filter..." />
                </li>
            </ul>
        </header>
    );
}

function App(props) {
    return (
        <div
            id="app"
        >
            <Header />
            <h4>Waar zijn mijn ongeziene dieren?</h4>
        </div>
    )
};


ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);
