import {html, render} from "./web_modules/lit-html.js";

import './web_modules/@wonkytech/tm-examples.js';

const DEBUG = false;

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
        ${(DEBUG ? html`
            <section title="Auto Size" class="auto">
                <style>
                    .auto div.main {
                        box-sizing: border-box;
                        border: solid red 1px;
                    }
                    .auto article {
                        box-sizing: border-box;
                        /*border: solid blue 1px;*/
                        background: yellow;
                    }
                    .auto .small {
                    }
                    .auto .wide {
                        width: 700px;
                    }
                    .auto .tall {
                        height: 600px;
                        //background: orange;
                    }
                    .fixed .fit {
                        width: 100%;
                        height: 100%;
                    }
                </style>
                <div class="main">
                    <tm-page-router>
                        <article class="small" slot="page" title="Fixed Small">
                            <div>Small</div>
                        </article>
                        <article class="wide"  slot="page" title="Fixed Wide">
                            <div>Wide</div>
                        </article>
                        <article class="tall"  slot="page" title="Fixed Tall">
                            <div>Tall</div>
                        </article>
                        <article class="fit"  slot="page" title="Fit Size">
                            <div>Fit</div>
                        </article>
                        <article slot="page" title="Auto Small">
                            <div class="small">Small</div>
                        </article>
                        <article slot="page" title="Auto Wide">
                            <div class="wide">Wide</div>
                        </article>
                        <article slot="page" title="Auto Tall">
                            <div class="tall">Tall</div>
                        </article>
                     </tm-page-router>            
                </div>
            </section>
            <section title="Fixed Size" class="fixed">
                <style>
                    .fixed tm-page-router {
                        width: 100%;
                        height: 100%;
                    }
                    .fixed div.main {
                        box-sizing: border-box;
                        border: solid darkgreen 2px;
                        width: 500px;
                        height: 500px;
                    }
                    .fixed article {
                        display: inline-block;
                        box-sizing: border-box;
                        /*border: solid blue 1px;*/
                        background: yellow;
                    }
                    
                    article {
                        display: inline-block;
                    }
                    
                    article div {
                        display: inline-block;
                    }
                    
                    .fixed .small {
                    }
                    .fixed .wide {
                        width: 600px;
                    }
                    .fixed .tall {
                        height: 600px;
                    }
                    .fixed .fit {
                        width: 100%;
                        height: 100%;
                    }
                </style>
                <div class="main">
                    <tm-page-router>
                        <article class="small" slot="page" title="Fixed Small">
                            <div>Small</div>
                        </article>
                        <article class="wide"  slot="page" title="Fixed Wide">
                            <div>Wide</div>
                        </article>
                        <article class="tall"  slot="page" title="Fixed Tall">
                            <div>Tall</div>
                        </article>
                        <article class="fit"  slot="page" title="Fit Size">
                            <div>Fit</div>
                        </article>
                        <article slot="page" title="Auto Small">
                            <div class="small">Small</div>
                        </article>
                        <article slot="page" title="Auto Wide">
                            <div class="wide">Wide</div>
                        </article>
                        <article slot="page" title="Auto Tall">
                            <div class="tall">Tall</div>
                        </article>
                     </tm-page-router>            
                </div>
            </section>
        ` : '')}
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
    </tm-examples>

`, document.querySelector('body'));
