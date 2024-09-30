document.getElementById('poke').addEventListener('submit', function(event) {
    event.preventDefault(); 


    let nome = document.getElementById('nome').value.toLowerCase(); 

    const apiURL = `https://pokeapi.co/api/v2/pokemon/${nome}`;

    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon não encontrado');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('name').innerHTML = `Nome: ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}`;
            document.getElementById('tipo').innerHTML = `Tipo: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}`;
            document.getElementById('altura').innerHTML = `Altura: ${data.height / 10} m`;
            document.getElementById('peso').innerHTML = `Peso: ${data.weight / 10} kg`;
            document.getElementById('pokemon-img').src = data.sprites.front_default;
        })
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
            alert('Pokémon não encontrado.');
        });
});
