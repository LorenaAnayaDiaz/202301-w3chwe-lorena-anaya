import Component from '../Component/Component.js';
import { Pokemon } from '../../types.js';

export default class Card extends Component {
  cardData: Pokemon;
  constructor(
    parentElement: HTMLElement | null,
    cardData: Pokemon,
    cssClasses: string = ''
  ) {
    super(parentElement, 'div', 'card');
    this.cardData = cardData;
  }

  render(): void {
    super.render();
    this.element.innerHTML += `
      <div class="card character__card">
       <div class="card-body">
          <h2 class="pokemon__name">${this.cardData.name}</h2>
         
        </div>
      <div class= "photo__container">
        <img src="${this.cardData.sprites.versions['generation-v']['black-white'].animated.front_default}" alt="Pokemon photo" class="pokemon__photo" />
         </div>
       <div class="id__pokemon">${this.cardData.id}</div>
      </div>
      

    `;
  }
}
