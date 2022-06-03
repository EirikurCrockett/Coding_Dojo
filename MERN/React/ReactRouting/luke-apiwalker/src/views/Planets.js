import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Planets = (props) => {
    const { id } = useParams();
    const[planet, setPlanet] = useState({
        name:"",
        rotation_period: "",
        orbital_period: "",
        diameter: "",
        climate: "",
        gravity: "",
        terrain: "",
        surface_water: "",
        population: ""
    });


    useEffect(
        
        () => {
            axios.get("https://swapi.dev/api/planets/" + id)
                .then(res => {setPlanet(res.data)})
            console.log(planet)
            
        }, id)

    return(
        <div className="text-center">
            <h3>{planet.name}</h3>
            <p>Rotational Period: {planet.rotation_period}</p>
            <p>Orbital Period: {planet.orbital_period}</p>
            <p>Diameter: {planet.diameter}</p>
            <p>Climate: {planet.climate}</p>
            <p>Gravty: {planet.gravity}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water}%</p>
            <p>Population {planet.population}</p>
        </div>
    )
}

export default Planets;