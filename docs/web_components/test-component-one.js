import {html, } from 'lit-html';
import {LitElement} from 'lit-element';

window.customElements.define('test-component-one', class extends LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            heading: {type: String}
        }
    }

    constructor() {
        super();
        this.heading = 'Hello World! from the test-component-one web component';
    }

    // noinspection JSUnusedGlobalSymbols
    render() {
        return html`
      <style>
        :host {
          display: inline-block;
        }
        h2 {
            color: gray;
        }
      </style>
      <h2>${this.heading}</h2>
    `;
    }


});
