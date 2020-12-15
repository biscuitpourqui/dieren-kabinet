import React from 'react';
import {
    useParams
} from 'react-router-dom';
import { useWindowSize } from './utils.js';
// let windowSize = useWindowSize(500);
// let imageWidth = Math.ceil(windowSize.width / 400) * 400;
// console.log(imageWidth);

import animalImages from '../img/400px/*.png';
import animalData from './animal-data.js';


const AnimalPage = props => {
    let animalId = useParams().animalId;
    const animal = animalData.filter(item => item.id === animalId)[0];
    
    return (
        <article className='animal=page'>
            <figure>
            <img 
                src={animalImages[animal.id]} 
                />
                
            </figure>
            <h3>{animal.name}</h3>
            <p>Hier volgt informatie</p>
        </article>
    )
}

export default AnimalPage;