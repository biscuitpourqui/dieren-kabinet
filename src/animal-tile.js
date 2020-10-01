import React from 'react';

const AnimalTile = (props) => {
    return (
        <a
            className={`tile ${props.animal.orientation}`}
            href='#'   
        >
            <figure>
                <img 
                    src={`./img/400px/${props.animal.id}`} />
                <figcaption>
                    <h3>{props.animal.name}</h3>
                </figcaption>
            </figure>
        </a>
    )
};

export default AnimalTile;