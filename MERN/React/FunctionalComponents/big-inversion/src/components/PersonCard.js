import React from 'react';

const PersonCard = (props) => {
    const {lastName, firstName, age, hairColor} = props;
    return(
        <div className="card">
            <h3>{ lastName }, { firstName }</h3>
            <p>Age: { age }</p>
            <p>Hair Color: { hairColor }</p>
        </div>
    );
}
export default PersonCard;

