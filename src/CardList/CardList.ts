import { Pokemon } from '../types.js';
import Component from '../components/Component/Component.js';
import Card from '../components/Card/Card.js';

export default class CardList extends Component {
  #cardListData: Pokemon[];

  constructor(parentElement: HTMLElement, pokemons: Pokemon[]) {
    super(parentElement, 'ul', 'card__list');
    this.#cardListData = pokemons;
  }

  render(): void {
    super.render();

    for (let data of this.#cardListData) {
      let liElement: HTMLLIElement = document.createElement('li');
      liElement.className = 'card-list__item';
      new Card(liElement, data).render();
      this.element.appendChild(liElement);
    }
  }
}
