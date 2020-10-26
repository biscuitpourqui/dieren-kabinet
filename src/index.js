console.clear();

import React from 'react';
import ReactDOM from 'react-dom';

import TiledAmimals from './tiled-animals.js';

// const testPicture = require('../img/400px/seaLion1722.png');
// console.log(animalImages);
// const name = 'seaLion1722';


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
            <TiledAmimals
            />
            
        </div>
    )
};


ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);
