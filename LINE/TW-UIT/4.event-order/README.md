# Event Order

We have 3 div elements, each of them has a click handler associated.

```html
<div class="div-1">
    <p>Div 1</p>
    <div class="div-2">
        <p>Div 2</p>
        <div class="div-3">
            <p>Div 3</p>
        </div>
    </div>
</div>
```

Please write code for assigning these event handlers in a way, that when Div 3 is clicked, following sequence is print in console: div-2 -> div-3 -> div-1

**Solution:**

```js
// addEventListener.js

const div1 = document.querySelector('.div-1');
const div2 = document.querySelector('.div-2');
const div3 = document.querySelector('.div-3');

div1.addEventListener('click', (e) => {
  // console.log('div-1');
  console.log(e.currentTarget.className);
}, false);

// use capture
div2.addEventListener('click', (e) => {
  // console.log('div-2');
  // console.log(e.target); // div-3
  console.log(e.currentTarget.className);
}, true);

div3.addEventListener('click', (e) => {
  // console.log('div-3');
  console.log(e.currentTarget.className);
}, false);
```
