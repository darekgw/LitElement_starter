import {
    LitElement,
    html,
    css,
    property,
    TemplateResult
} from "lit-element";
import resetCSS from '../styles/reset.js';

export class RootElement extends LitElement {

    static get styles() {
        return [
            resetCSS
        ]
    }

    render() {
        return html `
        <h1>Hello, Lit-Element!!!</h1>
        `
    }
}