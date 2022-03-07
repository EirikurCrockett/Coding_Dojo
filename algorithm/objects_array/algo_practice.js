var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

// Challenge 1
// console.log the pokémon objects whose id is evenly divisible by 3
console.log("Challenge 1")

for(var i = 0; i <pokémon.length; i++){
    if(pokémon[i].id % 3 == 0){
        console.log(pokémon[i])
    }
}

console.log("")//line break

// Challenge 2
// console.log the pokémon objects that have more than one type
console.log("Challenge 2")

for(var i = 0; i <pokémon.length; i++){
    if(pokémon[i].types.length > 1){
        console.log(pokémon[i])
    }
}


console.log("")//line break

// Challenge 3
// console.log the names of the pokémon whose only type is "poison"
console.log("Challenge 3")

for(var i = 0; i <pokémon.length; i++){
    if(pokémon[i].types.length === 1 && pokémon[i].types[0] === 'poison'){
        console.log(pokémon[i].name)
    }
}

console.log("")//line break

// Challenge 4
// console.log the first type of all the pokémon whose second type is "flying"
console.log("Challenge 4")

for(var i = 0; i <pokémon.length; i++){
    if(pokémon[i].types.length === 2 && pokémon[i].types[1] === 'flying'){
        console.log(pokémon[i].types[0])
    }
}

console.log("")//line break

// Bonus Challenge 
// console.log the reverse of the names of the pokémon whose only type is "poison"
console.log("Bonus Challenge")

for(var i = 0; i <pokémon.length; i++){
    if(pokémon[i].types.length === 1 && pokémon[i].types[0] === 'poison'){
        var temp = ""
        for(var j = pokémon[i].name.length - 1; j >=0; j--){
            temp += pokémon[i].name[j].toLowerCase()
        }
        console.log(temp)
    }
}
