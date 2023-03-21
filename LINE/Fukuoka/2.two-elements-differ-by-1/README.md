# Two Elements Differ by 1

Write a function that, given an array A of N integers, returns true if A contains at least two elements which differ by 1, and false otherwise.

**Examples:**

```txt
Input: A = [7]
Output: false

Input: A = [4,3]
Output: true

Input: A = [11, 1, 8, 12, 14]
Output: true
Explanation: Pair of elements which differ by 1 is (11, 12).

Input: A = [4, 10, 8, 5, 9]
Output: true
Explanation: Pairs of elements which differ by 1 are (4, 5), (10, 9) and (8, 9).

Input: A = [5, 5, 5, 5, 5]
Output: false
Explanation: There are no two elements in A whose values differ by 1.
```

**Solution:**

```js
// solution.js

function solution(A) {
  if (A.length < 2) return false;

  const numberSet = new Set(A);

  return A.some((num) => numberSet.has(num - 1) || numberSet.has(num + 1));
}
```
