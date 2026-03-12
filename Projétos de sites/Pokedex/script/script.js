document.getElementById('fetchPokemonBtn').addEventListener('click', buscarInfoPokemon);

function buscarInfoPokemon() {
    const nomeOuIdPokemon = document.getElementById('pokemonInput').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuIdPokemon}/`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            exibirInfoPokemon(data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados do Pokémon:', error);
            exibirErro(error);
        });
}

function exibirInfoPokemon(data) {
    const pokemonInfoDiv = document.getElementById('pokemonInfo');
    pokemonInfoDiv.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p><strong>Altura:</strong> ${data.height} decímetros</p>
        <p><strong>Peso:</strong> ${data.weight} hectogramas</p>
    `;
}

function exibirErro(error) {
    const pokemonInfoDiv = document.getElementById('pokemonInfo');
    pokemonInfoDiv.innerHTML = `<p>Erro: ${error.message}</p>`;
}
