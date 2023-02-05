import Header from '../components/Header/Header.js';
import Component from '../components/Component/Component.js';
import Card from '../components/Card/Card.js';
import CardList from '../CardList/CardList.js';
import { Pokemon } from '../types.js';
import { fetchPokemons } from '../pokemons.js';
import { pokemons } from '../pokemons.js';

fetchPokemons();

export default class App extends Component {
  #children: Component[];

  constructor(parentElement: HTMLElement, cssClasses: string) {
    super(parentElement, 'div', cssClasses);
    this.#children = [
      new Header(
        this.element,
        'Hello trainer, welcome to the Pokédex! The encyclopaedia regarding the various species of Pokémon. ',
        'logo.svg'
      ),
      new CardList(this.element, pokemons),
    ];
  }

  render() {
    super.render();
    this.#children.forEach((component) => component.render());
  }
}
