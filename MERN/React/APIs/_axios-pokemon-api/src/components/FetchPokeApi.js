import React from 'react';
import axios from 'axios';

const FetchPokeApi = (props) =>{

    const onClickFetch = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=898")
            .then(res => {
                console.log(res.data.results);
                props.onFetchList(res.data.results);
        })
    }


    return(
        <div className="w-50 mx-auto my-3">
            <button onClick={() => onClickFetch() } className="btn btn-success">Fetch Pokemon</button>
        </div>
    )
}

export default FetchPokeApi;