import React from 'react';
import AmimalTile from './animal-tile.js';

import animalData from './animal-data.js';

// import useWindowSize from './utils.js';

// let windowSize = useWindowSize();
// console.log(windowSize);

export default function TiledAnimals(props) {

function calculateNumberOfSquares(idealWidth, optionalIdealHeight) {
    const idealHeight = optionalIdealHeight || idealWidth;
    const columns = Math.floor(innerWidth/idealWidth);
    const rows = Math.floor(innerHeight/idealHeight);
    console.log(rows, columns);
    return columns * rows;
}

function pickTileNumbers(numberOfSquares) {
    let squaresToFill = numberOfSquares;
    let numberArray = [];
    const numberOfAnimals = animalData.length;
    const pickRandomAnimals = () => {
        if (squaresToFill == 0) {return}
        let randomNumber = Math.floor(Math.random() * numberOfAnimals);
        let orientation = animalData[randomNumber].orientation;
        if (squaresToFill < 8 && orientation == 'portrait') {pickRandomAnimals()}
        else if (squaresToFill < 3 && orientation == 'landscape') {pickRandomAnimals()}
        // if (!numberArray.includes(randomNumber)) {
        else if (true) {
            orientation == 'square' ? squaresToFill-- : squaresToFill = squaresToFill - 2;
            numberArray.push(randomNumber);
        }
        pickRandomAnimals();
    };
    pickRandomAnimals();
    return numberArray;    
};

let tileNumbers = pickTileNumbers(calculateNumberOfSquares(200));
console.log(tileNumbers);

let animalTiles = tileNumbers.map((animalNumber, index) => (
        <AmimalTile 
            animal={animalData[animalNumber]}
            key={index}
             />)
    );

    return (
        <main>
                {animalTiles}
        </main>
    )
}