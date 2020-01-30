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

        this._rebuildTabs();

    }

    _rebuildTabs() {

        const {noTabs} = this;

        if (!noTabs) {
            while (this.tabs.hasChildNodes()) {
                this.tabs.removeChild(this.tabs.firstChild);
            }
        }

        const main = this.shadowRoot.getElementById('main');
        this.pages = Array.from(main.assignedNodes());
        this.pages.forEach((node, index) => {
            if (node._display === undefined) {
                node._display = node.style.display;
            }

            if (index > 0) {
                node.style.display = 'none'; //node.classList.add('hidden');
            }
            if (!noTabs) {
                const menuItem = document.createElement('vaadin-tab');
                menuItem.appendChild(document.createTextNode(node.title));
                this.tabs.appendChild(menuItem);
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
        if (page.notifyResize !== undefined) {
            page.notifyResize();
        }
    }

    _pagesChanged(e) {
        console.log('TM-PAGE-ROUTER - pagesChanged', e);
        if (this.tabs) {
            const selectedTab = this.tabs.selected;
            this._rebuildTabs();
            this.tabs.selected = selectedTab;
            this.selectPage(selectedTab);
        }
    }

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
                ${noTabs ? html`` : html`
                    <nav id="nav">
                        <vaadin-tabs id="tabs"></vaadin-tabs>
                    </nav>
                `}
                <main>
                    <slot id="main" name="page" @slotchange=${(e) => this._pagesChanged(e)}></slot>
                </main>
            </article>
        `;
    }

});
