// Get global variables for different necesary document Id's

let displayResults = document.getElementById("results-container");

// Define function to make JSON fetch request from the API with callback so we can later use feedToHTML function as argument

async function fetchPokemon(callback){
// Removes event listener because there is no button and move async keyword prior to function naming
        let displayResults = document.getElementById("results-container");
        displayResults.innerHTML = "";
        const apiPokemonURL = `https://pokeapi.co/api/v2/pokemon/squirtle/`;
        
        // URL was adjusted to specifically target Squirtle

        try {const response = await fetch(apiPokemonURL);
        const pokemonData = await response.json();
        callback(null, pokemonData);
        }
        catch (error) {
            callback(error, null);
        };
};

// Define feedToHTML function that writes the innerHTML based off of our API fetch request

const feedToHTML = (error, pokemonData) => {
    const dataInfoId = document.getElementById('results-container');
    console.log(pokemonData)
    if (error) {
        dataInfoId.innerHTML = `<p>Error Fetching Pokemon Data: ${error.message}</p>`;
    } 
    else {
        dataInfoId.innerHTML = `<p class="fw-bold fs-2 ml-3 px-2 text-warning-emphasis">Name: ${pokemonData.name}</p>
        <p class="fw-bold fs-2 ml-3 px-2 text-warning-emphasis">Pokedex Number: ${pokemonData.id}</p>
        <p class="fw-bold fs-2 ml-3 px-2 text-warning-emphasis">Pokemon Type: ${pokemonData.types[0].type.name}</p>
        <p class="fw-bold fs-2 ml-3 px-2 text-warning-emphasis">Pokemon Abilities: ${pokemonData.abilities[0].ability.name}, ${pokemonData.abilities[1].ability.name}</p>
        <p class="fw-bold fs-2 ml-3 px-2 text-warning-emphasis">Pokemon ${pokemonData.stats[0].stat.name}: ${pokemonData.stats[0].base_stat}</p>
        <p class="fw-bold fs-2 ml-3 px-2 text-warning-emphasis">Pokemon ${pokemonData.stats[1].stat.name}: ${pokemonData.stats[1].base_stat}</p>
        <p class="fw-bold fs-2 ml-3 px-2 text-warning-emphasis">Pokemon ${pokemonData.stats[2].stat.name}: ${pokemonData.stats[2].base_stat}</p>
        <p class="fw-bold fs-2 ml-3 px-2 text-warning-emphasis">Pokemon ${pokemonData.stats[3].stat.name}: ${pokemonData.stats[3].base_stat}</p>
        <p class="fw-bold fs-2 ml-3 px-2 text-warning-emphasis">Pokemon ${pokemonData.stats[4].stat.name}: ${pokemonData.stats[4].base_stat}</p>
        <p class="fw-bold fs-2 ml-3 px-2 text-warning-emphasis">Pokemon ${pokemonData.stats[5].stat.name}: ${pokemonData.stats[5].base_stat}</p>
        `;
        
    };
};

// Define variable for update page to call our two fucntions once the page has loaded from an event listener
const updatePage = () => {
    fetchPokemon(feedToHTML);
};

document.addEventListener("DOMContentLoaded", (event) => {updatePage()});

