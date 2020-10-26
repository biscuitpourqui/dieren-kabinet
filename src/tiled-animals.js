import React from 'react';
import AmimalTile from './animal-tile.js';

import animalData from './animal-data.js';

export default function TiledAnimals(props) {
    
let tileNumbers = [1, 2, 3, 4, 5, 6];

let animalTiles = tileNumbers.map(index => (
        <AmimalTile 
            animal={animalData[index]}
            key={index}
             />)
    );

    return (
        <main>
                {animalTiles}
        </main>
    )
}