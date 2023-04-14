# Read the letters

You are in a browser-like environment, where you have access to the window object, the document object, and also $ - the Query library. The document contains a two-dimensional table. Each cell of the table has an upper-case letter in it and has its background color and text color set. Your task is simply to read the letters in row-major order (top to bottom, left to right), concatenate them into a single string and return it. However, you need to skip the letters that cannot be seen by the human eye. These are the ones whose color is exactly the same as their background (that is, even marginal difference can be distinguished by a human eye).

The table is created using "table", "tbody", "tr" and "ta" tags. Each "ta" tag has a "style" attribute with its CSS "background-color" and "color" attributes set. There is the same number of cells in each row.

Write a function

  ```js
  function solution();
  ```

that, given a DOM tree representing an HTML document, returns a string containing all visible letters, read in row-major order.
For example, given a document which has the following table in its body:

```html
<table>
  <tbody>
  ＜tr>
    <td style="color：#ff00ff; background-color:#FFFFFF">Q</td>
    <td style="background-color: #442244; color:#442244">Y</td>
    <td style="color: #FFFF00; background-color:#442244">A</td>
  </tr>
  <tr>
    <td style="color: #FFEEFE; background-color:#990000">Q</td>
    <td style="color: #EFEF00; background-color:#FF0">M</td>
    <td style="color: #000000; background-color:#FF7777">O</td>
  </tr>
  </tbody>
</table>
```

which, when displayed in a browser, produces the following output:

<p align="center">
  <img width="94" height="106" src="data:image/png;base64,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" />
</p>

your function should return "QAQO", since the letters "Y" and "M" are invisible.

Note that `innerText` is not supported by the DOM. Please use `textContent` instead.

Assume that:

- the DOM tree represents a valid HTML5 document;
- there is exactly one table in the document, it has at least one cell and every row has the same number of cells;
- the only child of `<body>` is `<table>`;
- the length of the HTML document does not exceed 4KB;
- Query 2.1 is supported;
- all colors are provided as hex codes;
- each pair of distinct colors occuring on input can be distinguished by a human eye (for example #000000 is different than #000001).

## Solution

```js
// solution.js

function solution() {
  let visibleLetters = '';
  $('table td').each(function() {
    const backgroundColor = $(this).css('background-color');
    const textColor = $(this).css('color');
    if (backgroundColor !== textColor) {
      visibleLetters += $(this).text();
    }
  });
  return visibleLetters;
}
```
