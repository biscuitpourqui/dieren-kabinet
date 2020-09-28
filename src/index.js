console.clear();

import React from 'react';
import ReactDOM from 'react-dom';

import animalData from './animal-data.js';
import AmimalTile from './animal-tile.js';

console.log(animalData[2]);

let tileNumbers = [1, 2, 3, 4, 5, 6];

let AnimalTiles = tileNumbers.map(index => 
    (
        <AmimalTile animal={animalData[index]}
            key={index} />
    ));

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
            <main>
                {AnimalTiles}
            </main>
        </div>
    )
};


ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);
