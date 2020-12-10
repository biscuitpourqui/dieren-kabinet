import React from 'react';
import {
    Link,
    // useParams
} from 'react-router-dom';
import animalImages from '../img/400px/*.png';


const AnimalTile = (props) => {
    return (
        <Link
            className={`tile ${props.animal.orientation}`}
            to={`/${props.animal.id}`  } 
        >
            <figure>
                <img 
                    src={animalImages[props.animal.id]} 
                />
                <figcaption>
                    <h3>{props.animal.name}</h3>
                </figcaption>
            </figure>
        </Link>
    )
};

export default AnimalTile;