import React from 'react';
import animalImages from '../img/400px/*.png';


const AnimalTile = (props) => {
    return (
        <a
            className={`tile ${props.animal.orientation}`}
            href='#'   
        >
            <figure>
                <img 
                    src={animalImages[props.animal.id]} 
                />
                <figcaption>
                    <h3>{props.animal.name}</h3>
                </figcaption>
            </figure>
        </a>
    )
};

export default AnimalTile;