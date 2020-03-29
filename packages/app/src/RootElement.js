import {
    LitElement,
    html,
    css,
    property,
    TemplateResult
} from "lit-element";

export class RootElement extends LitElement {

    render() {
        return html `
        <h1>Hello Web-component</h1>
        `
    }
}