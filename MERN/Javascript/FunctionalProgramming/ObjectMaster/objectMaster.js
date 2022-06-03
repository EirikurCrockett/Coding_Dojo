const pokémon = Object.freeze([
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
]);

const divByThree = pokémon.filter(pkmn => pkmn.id%3 == 0);
const fireType = pokémon.filter(pkmn => pkmn.types.includes("fire"));
const multiType = pokémon.filter(pkmn => pkmn.types.length > 1);
const pokémonNames = pokémon.map(pkmn => pkmn.name);
const namesIdHundUp = pokémon.filter(pkmn => pkmn.id > 99).map(pkmn => pkmn.name);
const namesOnlyPoison = pokémon.filter(pkmn => pkmn.types.length == 1).filter(pkmn => pkmn.types.includes("poison")).map(pkmn => pkmn.name);
const flyingSecond = pokémon.filter(pkmn => pkmn.types[1] == "flying").map(pkmn => pkmn.types[0]);
const numNormal = pokémon.filter(pkmn => pkmn.types.includes("normal")).length;

// console.log(divByThree);
// console.log(fireType);
// console.log(multiType);
// console.log(pokémonNames);
// console.log(namesIdHundUp);
// console.log(namesOnlyPoison);
// console.log(flyingSecond);
console.log(numNormal);