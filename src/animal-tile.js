import React from 'react';

const AnimalTile = (props) => {
    return (
        <div
            className={`tile ${props.animal.orientation}`}
               
        >
            <h3>{props.animal.name}</h3>
        </div>
    )
};

export default AnimalTile;