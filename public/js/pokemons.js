export const pokemons = [];
export const fetchPokemons = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=200`)
        .then((response) => response.json())
        .then((data) => {
        let results = data.results;
        let urlList = [];
        // console.log(results);
        for (let i = 0; i < results.length; i++) {
            urlList.push(data.results[i].url);
        }
        for (let i = 0; i < urlList.length; i++) {
            fetch(urlList[i])
                .then((response) => response.json())
                .then((data) => {
                pokemons.push(data);
                pokemons.sort((a, b) => a.id - b.id);
            });
        }
    });
};
