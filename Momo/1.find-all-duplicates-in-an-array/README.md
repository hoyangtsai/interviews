# Find All Duplicates in an Array

Given an integer array `nums` of length n where all the integers of `nums` are in the range `[1, n]` and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in `O(n)` time and uses only constant extra space.

Hint: you can use Set to solve this problem.

**Examples 1:**

```txt
Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
```

**Examples 2:**

```txt
Input: [1,2,3,4]
Output: []
```

**Solution:**

```js
// solution.js

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let ans = [];
  let seen = new Set();
  for (const n of nums) {
    if (seen.has(n)) {
      ans.push(n);
    } else {
      seen.add(n);
    }
  }
  return ans;
};

/**
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */
```
