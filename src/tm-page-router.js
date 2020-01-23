import {html} from 'lit-html';
import {LitElement, css} from 'lit-element';

window.customElements.define('tm-page-router', class extends LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            noTabs: {type: Boolean}
        };
    }

    constructor() {
        super();
        this.noTabs = false;
    }

    // noinspection JSUnusedGlobalSymbols
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        const {noTabs} = this;

        if (!noTabs) {
            const tabs = this.shadowRoot.getElementById('tabs');
            this.tabs = tabs;
            tabs.addEventListener('selected-changed', () => {
                this.selectPage(tabs.selected);
            });
        }

        const main = this.shadowRoot.getElementById('main');
        this.pages = Array.from(main.assignedNodes());

        this.pages.forEach((node, index) => {
            node._display = node.style.display;
            if (index > 0) {
                node.style.display = 'none';
                //node.classList.add('hidden');
            }
            if (!noTabs) {
                const menuItem = document.createElement('vaadin-tab');
                menuItem.appendChild(document.createTextNode(node.title));
                this.tabs.appendChild(menuItem)
            }
        });
    }

    selectPage(pageIndex) {
        const {pages} = this;
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
        page.style.display = page._display;
        //page.classList.remove('hidden');
        if (page.notifyResize !== undefined) {
            page.notifyResize();
        }
    }

    // noinspection JSUnusedGlobalSymbols
    static get styles() {
        // language=CSS
        return css`
            :host {
                
            }

            article {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
                width: 100%;
            }

            nav {
                width: 100%;
                flex: min-content;
                flex-shrink: initial;
                display: flex;
                flex-direction: row;
                justify-content: center;
            }

            main {
                flex: auto;
                overflow: scroll;
            }
            
            vaadin-tabs {
                width: 100%;
            }
            
            ::slotted(.hidden) {
                display: none;
            }
        `;
    } // noinspection JSUnusedGlobalSymbols


    render() {
        const {noTabs} = this;

        return html`
            <article>
                ${(noTabs ? html`` : html`
                    <nav id="nav">
                        <vaadin-tabs id="tabs"></vaadin-tabs>
                    </nav>
                `)}
                <main>
                    <slot id="main" name="page"></slot>
                </main>
            </article>
        `;
    }
});
