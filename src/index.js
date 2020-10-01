console.clear();

import React from 'react';
import ReactDOM from 'react-dom';

import animalData from './animal-data.js';
import AmimalTile from './animal-tile.js';

const testPicture = require('../img/400px/seaLion1722.png');
const name = 'seaLion1722';

let tileNumbers = [1, 2, 3, 4, 5, 6];

let animalTiles = tileNumbers.map(index => (
        <AmimalTile 
            animal={animalData[index]}
            key={index}
             />)
    );

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
            <img src={require(`../img/400px/${name}.png`)} />
            <main>
                {animalTiles}
            </main>
        </div>
    )
};


ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);
