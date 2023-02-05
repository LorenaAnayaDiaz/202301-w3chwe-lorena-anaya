import Component from '../Component/Component.js';
export default class Header extends Component {
  #subtitle: string;
  #logoUrl: string;

  constructor(
    parentElement: HTMLElement | null,

    subtitleText: string,
    logoUrl: string
  ) {
    super(parentElement, 'header', 'header');

    this.#subtitle = subtitleText;
    this.#logoUrl = logoUrl;
  }

  render() {
    super.render();
    this.element.innerHTML = `
    <div class= "logo__container">
    <img class="pokemon__logo" src="${this.#logoUrl}">
   </div>
<section class="message-left">
    <div class="balloon__container">
  
      <div class="nes-balloon from-left">
        <p>${this.#subtitle}</p>
      </div>
      </div>
    </section>`;
  }
}
