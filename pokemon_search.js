// Get global variables for different necesary document Id's

let input = document.getElementById("user-input");
let button = document.getElementById("submit-button");
let displayResults = document.getElementById("results-container");

// Define function to make JSON fetch request from the API with callback so we can later use feedToHTML function as argument

function fetchPokemon(callback){
    button.addEventListener("click", (getResult = async() => {
        let input = document.getElementById("user-input");

        if (input.value.trim().length < 1){
            alert("Input cannot be empty");
        }
        
        let displayResults = document.getElementById("results-container");
        displayResults.innerHTML = "";
        const apiPokemonURL = `https://pokeapi.co/api/v2/pokemon/${input.value}`;
        
        try {const response = await fetch(apiPokemonURL);
        const pokemonData = await response.json();
        callback(null, pokemonData);
        }
        catch (error) {
            callback(error, null);
        };
}))};

// Define feedToHTML function that writes the innerHTML based off of our API fetch request

const feedToHTML = (error, pokemonData) => {
    const dataInfoId = document.getElementById('results-container');
    console.log(pokemonData)
    if (error) {
        dataInfoId.innerHTML = `<p>Error Fetching Pokemon Data: ${error.message}</p>`;
    } 
    else {
        dataInfoId.innerHTML = `<p class="fw-bold fs-2 ml-3 px-2">Name: ${pokemonData.name}</p>
        <p class="fw-bold fs-2 ml-3 px-2">Pokedex Number: ${pokemonData.id}</p>
        <p class="fw-bold fs-2 ml-3 px-2">Pokemon Type: ${pokemonData.types[0].type.name}</p>
        `;
        
    };
};

// Define variable for update page to call our two fucntions once the page has loaded from an event listener
const updatePage = () => {
    fetchPokemon(feedToHTML);
};

document.addEventListener("DOMContentLoaded", (event) => {updatePage()});
