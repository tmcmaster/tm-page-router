import {html, css, LitElement} from 'lit-element';

import '@wonkytech/polymer-elements';
import '@wonkytech/vaadin-elements';

window.customElements.define('tm-page-router', class extends LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {};
    }

    constructor() {
        super();
        //this.router = new Navigo('/', true, '#!');
    }

    // noinspection JSUnusedGlobalSymbols
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        const main = this.shadowRoot.getElementById('main');
        const nav = this.shadowRoot.getElementById('nav');

        Array.from(main.assignedNodes()).forEach(node => {
            console.log(node.title);
            const menuItem = document.createElement('vaadin-tab');
            menuItem.appendChild(document.createTextNode(node.title));
            nav.appendChild(menuItem)
        });
    }

    static get styles() {
        // language=CSS
        return css `
            :host {
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                border: solid red 2px;
                color: black;
                width: 500px;
                height: 500px;
            }
            nav {
                color: gray;
                flex-shrink: initial;
            }
            main {
                color: darkgray;
                box-sizing: border-box;
                border: solid blue 2px;
                flex: auto;
            }
        `;
    }

    // noinspection JSUnusedGlobalSymbols
    render() {
        return html`
            <nav id="nav"></nav>
            <main>
                <slot id="main" name="page"></slot>
            </main>
        `;
    }
});
