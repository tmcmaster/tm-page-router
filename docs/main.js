import {html, render} from "./web_modules/lit-html.js";

render(html`
    <style>
        body {
          background-color: lightgray;
          padding: 0;
          margin: 0;
        } 
    </style>
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
     </tm-page-router>
`, document.querySelector('body'));