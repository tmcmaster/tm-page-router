import { h as html } from '../common/lit-html-acd9a6eb.js';
import { LitElement, css } from '../lit-element.js';
import '../common/disable-upgrade-mixin-ae41579f.js';
import './polymer-elements.js';
import './vaadin-elements.js';

window.customElements.define('tm-page-router', class extends LitElement {
  // noinspection JSUnusedGlobalSymbols
  static get properties() {
    return {};
  }

  constructor() {
    super();
  } // noinspection JSUnusedGlobalSymbols


  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    const main = this.shadowRoot.getElementById('main');
    const tabs = this.shadowRoot.getElementById('tabs');
    tabs.addEventListener('selected-changed', () => {
      this._selectPage(tabs.selected);
    });
    this.pages = Array.from(main.assignedNodes());
    this.tabs = tabs;
    this.pages.forEach((node, index) => {
      node._display = node.style.display;

      if (index > 0) {
        node.style.display = 'none'; //node.classList.add('hidden');
      }

      const menuItem = document.createElement('vaadin-tab');
      menuItem.appendChild(document.createTextNode(node.title));
      tabs.appendChild(menuItem);
    });
  }

  _selectPage(pageIndex) {
    const {
      pages
    } = this;
    pages.forEach((page, index) => {
      if (index === pageIndex) {
        this._selectGivenPage(page);
      } else {
        //page.classList.add('hidden');
        page.style.display = 'none';
      }
    });
  }

  _selectGivenPage(page) {
    const component = page.getAttribute('component');

    if (component !== undefined && component !== null) {
      page.appendChild(document.createElement(component));
      page.removeAttribute('component');
    }

    page.style.display = page._display; //page.classList.remove('hidden');

    if (page.notifyResize !== undefined) {
      page.notifyResize();
    }
  } // noinspection JSUnusedGlobalSymbols


  static get styles() {
    // language=CSS
    return css`
            :host {
                display: flex;
                flex-direction: column;
            }
            nav {
                flex-shrink: initial;
                display: flex;
                flex-direction: row;
                justify-content: center;
            }
            main {
                flex: auto;
                overflow: scroll;
            }
            
            ::slotted(.hidden) {
                display: none;
            }
        `;
  } // noinspection JSUnusedGlobalSymbols


  render() {
    return html`
            <nav id="nav">
                <vaadin-tabs id="tabs"></vaadin-tabs>
            </nav>
            <main>
                <slot id="main" name="page"></slot>
            </main>
        `;
  }

});
