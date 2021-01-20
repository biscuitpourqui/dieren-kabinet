import React from 'react';
import {
    Link,
} from 'react-router-dom';
import animalData from './animal-data.js';
import { randomNumberFromRange } from './utils.js';


const RandomAnimalLink = (props) => {
    const randomAnimalIndex = randomNumberFromRange(0, animalData.length);
    const randomAnimal = animalData[randomAnimalIndex];
    console.log('willekeur:', randomAnimal);
    return (
        <Link
            to={`/${randomAnimal.id}`} 
        >
            Surprise me...
        </Link>
    )
};

export default RandomAnimalLink;