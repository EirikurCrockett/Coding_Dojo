import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const People = (props) => {
    const { id } = useParams();
    const[person, setPerson] = useState({
        name:"",
        height: "",
        mass: "",
        hair_color: "",
        skin_color: "",
        eye_color: ""
    });


    useEffect(
        
        () => {
            if(id != 17){
                console.log("https://swapi.dev/api/people/" + id)
                axios.get("https://swapi.dev/api/people/" + id)
                    .then(res => {setPerson(res.data)})
                console.log(person)
            } else{
                setPerson({
                    name :"404 - Not Found",
                    height : "??",
                    mass : "??",
                    hair_color: "??",
                    skin_color: "??",
                    eye_color: "??"
            })
            }
            
        }, id)


    return(
        <div className="text-center">
            <h3>{person.name}</h3>
            <p>Height: {person.height} cm</p>
            <p>Weight: {person.mass} kg</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color: {person.skin_color}</p>
            <p>Eye Color: {person.eye_color}</p>
        </div>
    )
}

export default People;