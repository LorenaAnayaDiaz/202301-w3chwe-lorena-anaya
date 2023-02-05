var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Button_button;
import Component from '../Component/Component.js';
export default class Button extends Component {
    constructor(buttonText, parentElement, type = '', cssClasses = '') {
        super(parentElement, 'button', cssClasses);
        _Button_button.set(this, void 0);
        __classPrivateFieldSet(this, _Button_button, buttonText, "f");
        const button = this.element;
        button.type = type;
    }
    render() {
        super.render();
        const button = this.element;
        button.textContent = __classPrivateFieldGet(this, _Button_button, "f");
    }
}
_Button_button = new WeakMap();
