# Counting Pairs

Given an integer k and a list of integers, count the number of distinct valid pairs of integers _(a, b)_ in the list for which _a + k = b_. Two pairs of integers _(a, b)_ and _(c, d)_ are considered distinct if at least one element of _(a, b)_ does not also belong to _(c, d)_. Note that _the elements in a pair might be the same element in the array. An instance of this is below where k = 0_.

**Example 1:**

```txt
Input: numbers = [1, 1, 1, 2], k = 1
Output: 4
Explanation:
This array has three different valid pairs: (1, 1) and (1, 2) and (2, 2). For k = 1, there is only 1 valid pair which satisfies a + k = b; the pair (a, b) = (1, 2).
```

**Example 2:**

```txt
Input: numbers = [1, 2], k = 0
Output: 2
Explanation:
There are three valid pairs: (1, 1), (2, 2) and (1, 2). For k = 0, two valid pairs satisfy a + K = b: 1 + 0 = 1 and 2 + 0 = 2.
```

**Solution:**

```js
// solution.js

function countPairs(numbers, k) {
  let lo = new Set();
  let hi = new Set();
  let ans = [];
  for (const n of numbers) {
    lo.add(n);
    hi.add(n + k);
  }
  for (const n of hi) {
    if (lo.has(n)) {
      ans.push(`(${n - k}, ${n})`);
    }
  }
  return ans.length;
}
```
