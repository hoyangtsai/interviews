# Compose

Implement a function called compose, which takes multiple functions as arguments and returns a function that performs right-to-left function composition.

- The rightmost function may be of any arity, whereas the rest of the functions must be unary.
- If there are no arguments, the result should be a function which returns its first argument.
- The result should be the first function if only one function is passed as an argument.
- The default export should be the compose function.

**Example 1:**

```js
const multiplyNumbers = (a, b) => a * b;
const doubleNumbers = (a) => 2 * a;

compose(
    doubleNumbers,
    multiplyNumbers
)(3, 7); // 42
```

**Example 2:**

```js
const divideBy2 = (a) => a / 2;
const square = (a) => a * a;
const max = (...args) => Math.max.apply(null, args);

compose(divideBy2, square, max)(2, 1, 4, 3) // 8
compose(divideBy2, square, max)(3, 0, 6, 5) // 18
```

**Example 3:**

Let concat be a function which takes two arrays as arguments and returns their concatenation. Let flatten be a function which takes an array as argument and returns an array which is flattened to a single level deep.

```js
compose(
    flatten,
    concat,
)([[1], [2]], [[3, 5], [8]]); // [1, 2, 3, 5, 8]
```

**Solution:**

```js
// solution.js

function compose(...funcs) {
  return (...args) => funcs.reduceRight((args, fn) => [fn.apply(this, args)], args)[0]
}

```
