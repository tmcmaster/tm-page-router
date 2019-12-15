import {html, render} from "./web_modules/lit-html.js";

import './web_components/test-component-one.js';

let sites = {
    'src': 'https://github.com/tmcmaster/tm-page-router',
    'pika': 'https://www.pika.dev/npm/@wonkytech/tm-page-router',
    'npm': 'https://www.npmjs.com/package/@wonkytech/tm-page-router',
    'docs': 'https://github.com/tmcmaster/tm-page-router#readme'
};

render(html`
    <style>
        body {
          background-color: lightgray;
          padding: 0;
          margin: 0;
        } 
    </style>
    <tm-examples heading="Polymer Elements" .sites="${sites}">
        <section title="paper-button">
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
                <article slot="page" title="Four" component="test-component-one"></article>
                <article slot="page" title="Five">
                    <paper-input label="Test Label" value="Test Value"></paper-input>
                </article>
             </tm-page-router>
        </section>
    </tm-examples>

`, document.querySelector('body'));
