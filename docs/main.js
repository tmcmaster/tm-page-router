import {html, render} from "./web_modules/lit-html.js";

import './web_modules/@wonkytech/tm-examples.js';

let sites = {
    'src': 'https://github.com/tmcmaster/tm-page-router',
    'pika': 'https://www.pika.dev/npm/@wonkytech/tm-page-router',
    'npm': 'https://www.npmjs.com/package/@wonkytech/tm-page-router',
    'docs': 'https://github.com/tmcmaster/tm-page-router#readme'
};

render(html`
    <style>
        body {
          padding: 0;
          margin: 0;
        } 
    </style>
    <tm-examples heading="Page Router" .sites="${sites}">
        <section title="Static Pages">
            <tm-page-router>
                <article slot="page" title="One">
                    <h3>Page One</h3>
                </article>
                <article slot="page" title="Two">
                    <h3>Page Two</h3>
                </article>
                <article slot="page" title="Three">
                    <h3>Page Three</h3>
                </article>
                <article slot="page" title="Paper Input">
                    <paper-input label="Test Label" value="Test Value"></paper-input>
                </article>
             </tm-page-router>
        </section>
        <section title="Lazy Load Pages">
            <style>
                input {
                    border: solid lightgrey 1px;
                }
            </style>
            <tm-page-router>
                <article slot="page" title="Static">
                    <h3>Static Page</h3>
                </article>
                <article slot="page" title="Lazy Load" component="input">
                    <h3>Lazy Loaded Input</h3>
                </article>
             </tm-page-router>
        </section>
        <section title="Narrow">
            <style>
                input {
                    border: solid lightgrey 1px;
                }
                tm-page-router.narrow {
                    width: 400px;
                    box-sizing: border-box;
                    border: solid lightgray 3px;
                }
            </style>
            <tm-page-router class="narrow">
                ${Array(10).fill(0).map((v,i) => html`
                     <article slot="page" title="Page ${i+1}">
                        <h3>Page ${i+1}</h3>
                     </article>
                `)}
             </tm-page-router>
        </section>
        <section title="No Tabs">
            <style>
                aside {
                   width: 100px;
                }
                
            </style>
            <aside>
                ${Array(3).fill(0).map((v,i) => html`
                    <mwc-button @click="${(e) => document.getElementById('router').selectPage(i)}">Page ${i+1}</mwc-button>
                `)}
            </aside>
            <tm-page-router id="router" noTabs>
                ${Array(3).fill(0).map((v,i) => html`
                     <article slot="page" title="Page ${i+1}">
                        <h3>Page ${i+1}</h3>
                     </article>
                `)}
             </tm-page-router>
        </section>
    </tm-examples>

`, document.querySelector('body'));
