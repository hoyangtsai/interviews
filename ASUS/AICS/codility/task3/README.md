# Longest symmetric string of <>

A string made of an even number of characters ("<" and/or ">") is called symmetric if all characters in its first half are "<" and all characters in its second half are "" Examples of symmetric strings are: ""(empty string), "<>", "<<>>", "<<<>>>", etc.

Write a javascript function:
  
  ```js
  function solution (S);
  ```

that, given a string S made of N characters ("<", ">" and/or "?"), returns the length of the longest symmetric substring that can be obtained after replacing question marks with "<" or ">" characters.

Examples:

1. For S = "<><??>>", after replacing all question marks with "<", the string "<><<<>>" is obtained. Its longest symmetric substring is "<<>>", so the function should return 4.
2. For S = "??????", the optimal option is to replace the first three question marks with "<" and the next
three question marks with "", thus obtaining the string "<<<>>>". The function should return 6.
3. For S = "<<?", the function should return 2.

Write an efficient algorithm for the following assumptions:

- the length of string S is within the range [1..200,000];
- string S is made only of the following characters: '<', '>' and/or '?'.

## Solution

```js
// solution.js

function solution(S) {
  const N = S.length;

  let nextOpens = new Array(N).fill(-1);
  let closestId = -1;
  let qs = new Set();

  for (let i = 0; i < N; i++) {
    const c = S.charAt(i);
    if (c === '<') {
      closestId = i;
    } else if (c === '?') {
      qs.add(i);
    }
    nextOpens[i] = closestId;
  }

  let max = 0;
  let slot = new Array(N).fill(0);

  for (let i = N - 2; i >= 0; i--) {
    if (S.charAt(i) === '>') {
      slot[i] = 0;
      continue;
    }
    const j = slot[i + 1];
    if (i + j + 1 < N && (S.charAt(i + j + 1) === '?' || S.charAt(i + j + 1) === '>')) {
      slot[i] = j + 2;
      if (slot[i] > max) {
        max = slot[i];
      }
    } else if (S.charAt(i + j - 1) === '?' || S.charAt(i + j - 1) === '>') {
      const count = Math.floor(j / 2);
      const lastOpenId = i + count - 1;
      if (nextOpens[i + j - 1] === lastOpenId || qs.has(lastOpenId)) {
        slot[i] = j;
      } else {
        slot[i] = 0;
      }
    } else {
      slot[i] = 0;
    }
  }

  return max;
}

// console.log(solution('<><??>>'))
console.log(solution('<<??'))

```
