import {html, } from '../web_modules/lit-html.js';
import {LitElement} from '../web_modules/lit-element.js';

window.customElements.define('test-component-one', class extends LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            heading: {type: String}
        }
    }

    constructor() {
        super();
        this.heading = 'This component was created and loaded into the DOM, when this tab was first selected.';
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
      <h4>${this.heading}</h4>
    `;
    }


});
