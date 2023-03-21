# Maximum by Deleting One 5

Write a function that given an integer N, returns the maximum possible value obtainable by deleting one '5' digit from the decimal representation of N. It is guaranteed that N will contain at least one '5' digit.

**Examples:**

```txt
Input: N = 15958
Output: 1958

Input: N = -5859
Output: -589

Input: N = -5000
Output: 0
Explanation: After deleting the 5, the only digits in the number are zeroes, so its value is 0.
```

**Solution:**

```js
// solution.js

function solution(A) {
  const isNeg = (A < 0);
  A = isNeg ? A * -1 : A;

  const strA = String(A);

  let max = Number.MIN_VALUE;
  for (let i = 0; i < strA.length; i++) {
    // convert string to array for splice manipulation
    let nums = strA.split('');
    if (strA[i] == 5) {
      nums.splice(i, 1);
      let pos = parseInt(nums.join(''));
      if (isNeg && pos > 0) pos *= -1;
      max = Math.max(max, pos);
    }
  }

  return max;
}

console.log(solution(15958)) // 1958
console.log(solution(-5859)) // -589
console.log(solution(-5000)) // 0
```
