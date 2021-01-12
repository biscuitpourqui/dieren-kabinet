import React from 'react';
import {
    useParams
} from 'react-router-dom';
import { useWindowSize } from './utils.js';


import animalImages400 from '../img/400px/*.png';
import animalImages800 from '../img/400px/*.png';
import animalImages1200 from '../img/400px/*.png';
import animalData from './animal-data.js';


const AnimalPage = props => {

    let animalId = useParams().animalId;
    const animal = animalData.filter(item => item.id === animalId)[0];
    
    let windowSize = useWindowSize(500);
    let imageWidth = Math.ceil(windowSize.width / 400) * 400;
    console.log(imageWidth);
    let animalImages = imageWidth == 400 ? animalImages400 : imageWidth == 1200 ? animalImages1200 : animalImages800;

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