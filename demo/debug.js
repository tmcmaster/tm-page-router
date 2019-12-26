import {html, render} from "../docs/web_modules/lit-html.js";

import '../docs/web_modules/@wonkytech/tm-examples.js';

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
    <tm-examples heading="Page Router" .sites="${sites}" debug>
        <section title="Auto Size" class="auto" debug>
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
        <section title="Fixed Size" class="fixed" debug>
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
    </tm-examples>

`, document.querySelector('body'));
