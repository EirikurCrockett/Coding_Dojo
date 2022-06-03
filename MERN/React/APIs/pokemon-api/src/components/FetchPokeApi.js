import React from 'react';

const FetchPokeApi = (props) =>{

    const onClickFetch = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=898")
            .then(data => data.json())
            .then(res => {
                console.log(res.results);
                props.onFetchList(res.results);
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="w-50 mx-auto my-3">
            <button onClick={() => onClickFetch() } className="btn btn-success">Fetch Pokemon</button>
        </div>
    )
}

export default FetchPokeApi;