import App from './App/App.js';
import { fetchPokemons } from './pokemons.js';
setTimeout(() => {
    fetchPokemons();
    new App(document.body, 'container').render();
}, 500);
