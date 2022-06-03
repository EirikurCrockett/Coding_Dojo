import React from 'react';

const ProdcutCard = (props) => {
    return(
        <div className="mx-auto my-3 w-75 p-3 text-center">
            <h3 className="card-header">{props.title}</h3>
            <p>${(props.price).toFixed(2)}</p>
            <p>Description:<br/>{props.description}</p>
        </div>
    )
}

export default ProdcutCard;