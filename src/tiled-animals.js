import React, { useState, useEffect } from 'react';
import AmimalTile from './animal-tile.js';

import animalData from './animal-data.js';

import { useWindowSize } from './utils.js';


export default function TiledAnimals(props) {
    
const tileWidth = 200;
let windowSize = useWindowSize(500);

const [numberOfSquares, setNumberOfSquares] = useState(0);
const [animalIds, setAnimalIds] = useState([]);

useEffect(() => updateSquareNumber()), [windowSize];
useEffect(() => setAnimalIds(pickAnimalIds(numberOfSquares)), [numberOfSquares]);

function calculateNumberOfSquares(idealWidth, optionalIdealHeight) {
    const idealHeight = optionalIdealHeight || idealWidth;
    const columns = Math.floor(windowSize.width/idealWidth);
    const rows = Math.floor(windowSize.height/idealHeight);
    console.log(columns, rows);
    return columns * rows;
}

function updateSquareNumber() {
    let newNumber = calculateNumberOfSquares(tileWidth);
    if (!numberOfSquares || newNumber > numberOfSquares) {
        setNumberOfSquares(newNumber)
    } else {return}
};

function pickAnimalIds(numberOfSquaresToFill) {
    let squaresToFill = numberOfSquaresToFill - animalIds.length;
    console.log('vullen:', squaresToFill);
    let newNumberArray = [];
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
            newNumberArray.push(randomNumber);
        }
        pickRandomAnimals();
    };
    pickRandomAnimals();
    console.log('Pick:', newNumberArray);
    return [...animalIds, ...newNumberArray];    
};

let animalTiles = animalIds.map((animalNumber, index) => (
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