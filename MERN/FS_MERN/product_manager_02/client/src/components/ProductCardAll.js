import React from 'react';
import { Link } from 'react-router-dom';

const ProdcutCard = (props) => {
    return(
        <div className="mx-auto my-3 w-50 p-3">
            <h3 className="card-header"> 
                <Link to={`/products/${props._id}`}>{props.title}</Link>
            </h3>
            <p>${(props.price).toFixed(2)}</p>
            <p>Description:<br/>{props.description}</p>
        </div>
    )
}

export default ProdcutCard;