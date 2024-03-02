const form = document.querySelector('form');
console.log(form);
form.onsubmit = function (e) {
    e.preventDefault();
    const pokemonInput = document.querySelector('#pokemon');
    console.log(pokemonInput);
    console.log(pokemonInput.value);

    // use fetch method to get the data
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput.value.toLowerCase()}`)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log('name of pokemon', data.name);
            console.log('official artwork', data.sprites.other["official-artwork"].front_default);
            console.log('move', data.moves[0].move.name);
            console.log('ability', data.abilities[0].ability.name);
            console.log('height', data.height);
            console.log('weight', data.weight);
            console.log('id', data.id);
            console.log('type', data.types[0].type.name);

            // create a new pokemon
            const newPokemon = new Pokemon(
                data.name,
                data.sprites.other["official-artwork"].front_default,
                data.moves[0].move.name,
                data.abilities[0].ability.name,
                data.height,
                data.weight,
                data.id,
                data.types[0].type.name
            );
            console.log('NEW POKEMON', newPokemon);
            // make a pokemon card and add it
            makePokemonCard(newPokemon);
        })
        .catch(error => {
            console.log('error fetching data', error);
        });
};



class Pokemon {
    constructor(name, artwork, move, ability, height, weight, id, type) {
        this.name = name; // string
        this.artwork = artwork; // string
        this.move = move; // string
        this.ability = ability; // string
        this.height = height; // number
        this.weight = weight; // number
        this.id = id; // number
        this.type = type; // string
    }
}

// be recreating the same card that exist inside of our pokemon.html
function makePokemonCard(pokemon) {
    const pokemonContainer = document.querySelector('.pokemon-container');
    // card
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.style.width = '18rem';
    // image
    const pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.artwork;
    pokemonImage.setAttribute('class', 'card-img-top');
    // card body
    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');
    // card title
    const cardTitle = document.createElement('h5');
    cardTitle.setAttribute('class', 'card-title');
    cardTitle.textContent = pokemon.name;
    // card text
    const cardText = document.createElement('p');
    cardText.setAttribute('class', 'card-text');
    cardText.textContent = pokemon.move;
    // append the card to the pokemon-container
    pokemonContainer.append(card);
    // append the image to card
    card.append(pokemonImage);
    // append the card-title and card-text to card-body
    cardBody.append(cardTitle, cardText);
    // append cardBody to card
    card.append(cardBody);
    
    // TODO - finish makePokemonCard function 
}