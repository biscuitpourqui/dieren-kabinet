console.clear();

import React from 'react';
import ReactDOM from 'react-dom';

import TiledAmimals from './tiled-animals.js';
import AnimalPage from './animal-page.js';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    // useParams
} from 'react-router-dom';

// const testPicture = require('../img/400px/seaLion1722.png');
// console.log(animalImages);
// const name = 'seaLion1722';


function Header(props) {
    return (
        <header>
            <Link to="/"><h1>Unseen Animals</h1></Link>
            <ul>
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
        <Router>
            <div
                id="app"
            >
                <Header />
                
                <Switch>
                    <Route path="/:animalId">
                        <AnimalPage/>
                    </Route>
                    <Route path="/">
                        <TiledAmimals
                        />
                    </Route>
                </Switch>
                
            </div>
        </Router>
    )
};


ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);
