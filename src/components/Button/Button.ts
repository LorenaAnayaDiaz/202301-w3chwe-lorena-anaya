import Component from '../Component/Component.js';

export default class Button extends Component {
  #button: string;

  constructor(
    buttonText: string,
    parentElement: HTMLElement | null,
    type: string = '',
    cssClasses: string = ''
  ) {
    super(parentElement, 'button', cssClasses);
    this.#button = buttonText;
    const button = this.element as HTMLButtonElement;
    button.type = type;
  }

  render(): void {
    super.render();
    const button = this.element as HTMLButtonElement;
    button.textContent = this.#button;
  }
}
