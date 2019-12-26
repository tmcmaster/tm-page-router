### need to review using templates

```html
    <template slot="page" title="Five" reload>
        <paper-input label="Test Label" value="This is a test"></paper-input>
    </template>
```

```javascript
    function _selectGivenTemplate(page, index) {
        console.log('Page: ', page.tagName);
        if (page.tagName === 'TEMPLATE' && !page.getAttribute('loaded')) {
            if (!page.getAttribute('loaded') || page.getAttribute('reload'))
                console.log('Applying template');
            let clone = document.importNode(page.content, true);
            const body = this.shadowRoot.getElementById('body');
            body.appendChild(clone);
            page.setAttribute('loaded', true);
        }
        page.classList.remove('hidden');
    }
```