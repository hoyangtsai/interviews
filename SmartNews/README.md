# SmartNews

## FSE Knowledge

### Center a box and the text in it

```html
<head>
    <style>
        body {
            background: rgb(238, 163, 50);
        }
        section {
            width: 300px;
            height: 300px;
            background: #FFF;
        }

        .wrap {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .box {
            text-align: center;
            line-height: 300px;
        }
    </style>
</head>
<body>
<main class="wrap">
    <section class="box">Hello</section>
</main>
</body>
```

### What is closure

A closure is a function defined inside another function and has access to its lexical scope even when it is executing outside its lexical scope. The closure has access to variables in three scopes:

- Variables declared in its own scope
- Variables declared in the scope of the parent function
- Variables declared in the global scope

In JavaScript, all functions are closures because they have access to the outer scope, but most functions don’t utilise the usefulness of closures: the persistence of state. Closures are also sometimes called stateful functions because of this.

In addition, closures are the only way to store private data that can't be accessed from the outside in JavaScript. They are the key to the UMD (Universal Module Definition) pattern, which is frequently used in libraries that only expose a public API but keep the implementation details private, preventing name collisions with other libraries or the user’s own code.

Good to hear

- Closures are useful because they let you associate data with a function that operates on that data.
- A closure can substitute an object with only a single method.
- Closures can be used to emulate private properties and methods.

### For loop setTimeout

What is console log?

```js
// for-loop-var-setTimeout.js

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
      // log `3` three times
    console.log(i);
  }, 1);
}
```

Why?

`var` was the default statement to declare a variable until ES2015. It creates a function-scoped variable that can be reassigned and re-declared. However, due to its lack of block scoping, it can cause issues if the variable is being reused in a loop that contains an asynchronous callback because the variable will continue to exist outside of the block scope.

How to fix it

```js
// for-loop-let-setTimeout.js

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1);
}
```

Why?

`let` was introduced in ES2015 and is the new preferred way to declare variables that will be reassigned later. Trying to redeclare a variable again will throw an error. It is block-scoped so that using it in a loop will keep it scoped to the iteration.

### Implement a memorize function

```js
// memorize.js

const add = (a, b) => {
  const c = a + b;
  console.log('add :>> ', c);
  return c;
}

const memorize = (fn) => {
  const cache = new Map();
  const cached = (...args) => {
    if (cache.has(fn.name)) {
      // do nothing
    } else {
      cache.set(fn.name, fn.apply(this, args));
      return cache.get(fn.name);
    }
  }
  return cached;
}

let memo_sum = memorize(add);

memo_sum(1, 2) // 3
memo_sum(1, 2) // not print 3
```

### What is reflow and what causes reflow

When the layout, window size, etc of an element is changed, the position of all the elements after it changes accordingly. This in turn affects the flow of the page and is called reflow.

A few methods you can use to avoid reflow are:

1. Avoid setting multiple inline styles
2. Avoid tables in your layout
3. Add animations to elements that are fixed or absolute

## Programming

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

```txt
Input: [3, 0, 3]
Output: 3
Image:
x x
x x
x x
---

Input: [0, 3, 1, 2, 0, 5, 3]
Output: 6
Image:
     x
     x
 x   xx
 x x xx
 xxx xx
-------

Input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
Output: 6
Image:
       x
   x   xx x
 x xx xxxxxx
------------

Example 1:
Input: [3,0,3]
Output: 3

 █○█
 █○█
 █○█
 303


Example 2:
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

        █
    █○○○██○█
  █○██○██████
 010210132121


Legend:
█ : elevation (" " is elevation 0)
○ : trapped rain water
```

```js
// programming-solution-dp.js

function solution(A) {
  // write your code here

  if (A.length < 3) return 0;

    let ans = 0;
    let leftMax = [];
    let rightMax = [];
    const W = A.length;

    leftMax[0] = A[0];
    for (let i = 1; i < W; i++) {
      leftMax[i] = Math.max(A[i], leftMax[i - 1]);
    }

    rightMax[W - 1] = A[W - 1];
    for (let i = W - 2; i >= 0; i--) {
      rightMax[i] = Math.max(A[i], rightMax[i + 1]);
    }

    for (let i = 1; i < W; i++) {
      ans += Math.min(leftMax[i], rightMax[i]) - A[i];
    }
    return ans;
}

console.log(solution([3, 0, 3]) === 3);
console.log(solution([0, 3, 1, 2, 0, 5, 3]) === 6);
console.log(solution([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) === 6);

/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */
```

```js
// programming-solution-two-pointers.js

function solution(A) {
  // write your code here

  let left = 0, right = A.length - 1;

  let ans = 0;
  let leftMax = 0, rightMax = 0;
  while (left < right) {
    // right greater than left
    if (A[left] < A[right]) {

      if (A[left] >= leftMax) {
        leftMax = A[left]
      } else {
        ans += (leftMax - A[left])
      }
      left++;
    } else {

      if (A[right] >= rightMax) {
        rightMax = A[right]
      } else {
        ans += (rightMax - A[right])
      }

      right--;
    }
  }

  return ans;
}

/**
 * - Time complexity: O(n). n is size of A length.
 * - Space complexity: O(1).
 */

```

### Reference

[Trapping Rain Water - Leetcode](https://leetcode.com/problems/trapping-rain-water/description/)
