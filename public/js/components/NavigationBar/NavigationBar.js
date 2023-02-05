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
var _NavigationBar_children;
import Component from '../Component/Component.js';
import Button from '../Button/Button.js';
export default class NavigationBar extends Component {
    constructor(parentElement, cssClasses = '') {
        super(parentElement, 'section', cssClasses);
        _NavigationBar_children.set(this, void 0);
        __classPrivateFieldSet(this, _NavigationBar_children, [
            new Button('My Poké Ball', this.element, 'button', 'nes-btn'),
        ], "f");
    }
    render() {
        super.render();
        __classPrivateFieldGet(this, _NavigationBar_children, "f").forEach((component) => component.render());
    }
}
_NavigationBar_children = new WeakMap();
