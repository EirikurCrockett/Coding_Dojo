const axios = require('axios');

let sets = []
let count = 0;
axios.get("https://api.pokemontcg.io/v2/sets")
    .then(res => sets = res.data.data)
    .then(res => {
        // console.log(sets)
        console.log("looping "+ sets.length )
        for(i = 0; i < sets.length; i++){
            count += sets[i].total;
            
        }
        console.log("looped")
    })
    .then(res => {    
        console.log(count);
    })
    .catch(err => console.log(err));

