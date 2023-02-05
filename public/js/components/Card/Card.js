import Component from '../Component/Component.js';
export default class Card extends Component {
    constructor(parentElement, cardData, cssClasses = '') {
        super(parentElement, 'div', 'card');
        this.cardData = cardData;
    }
    render() {
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
