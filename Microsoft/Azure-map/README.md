# Interview Microsoft Azure Maps

## Find the Rotation Count in Rotated Sorted array

Given a 1D integer array that is sorted in ascending order, we can rotate the array to the right a number of times. If numbers fall off the right side of the array, they go back to the first positions.

Can you write a function that tells me how many times the array was rotated?

1) No empty arrays, and length > 1
2) No repeated numbers
3) Don't assume it starts with 0

**Examples:**

```txt
input: arr = [6, 1, 2, 3, 4, 5]
output: 1

input: arr = [5, 0, 1, 2, 3, 4]
output: 1

input: arr = [0, 1, 2, 3, 4, 5]
output: 0

input: arr = [3, 4, 5, 0, 1, 2]
input: 3
```

### Solution

```js
// solution.js

function countRotate(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) return i;
  }
  return 0;
}

/**
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 */

console.log(countRotate([6, 1, 2, 3, 4, 5])) // 1
console.log(countRotate([5, 0, 1, 2, 3, 4])) // 1
console.log(countRotate([0, 1, 2, 3, 4, 5])) // 0
console.log(countRotate([3, 4, 5, 0, 1, 2])) // 3
console.log(countRotate([4, 5, 6, 7, 0, 1, 2])) // 4
```

```js
// binary-search.js

function countRotate2(nums) {
  if (nums.length == 1) {
    return 0;
  }

  let l = 0, r = nums.length - 1;

  if (nums[r] > nums[0]) {
    return 0;
  }

  while (l <= r) {
    const mid = parseInt((l + r) / 2);

    // next number smaller than mid
    if (nums[mid] > nums[mid + 1]) {
      return mid + 1;
    }

    // previous number greater than mid
    if (nums[mid - 1] > nums[mid]) {
      return mid;
    }

    if (nums[mid] > nums[0]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return -1;
}

/**
 * - Time complexity: O(log n)
 * - Space complexity: O(1)
 */

console.log(countRotate([6, 1, 2, 3, 4, 5])) // 1
console.log(countRotate([5, 0, 1, 2, 3, 4])) // 1
console.log(countRotate([0, 1, 2, 3, 4, 5])) // 0
console.log(countRotate([3, 4, 5, 0, 1, 2])) // 3
console.log(countRotate([4, 5, 6, 7, 0, 1, 2])) // 4
```

### Reference

[Find Minimum in Rotated Sorted Array - Leetcode](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

<https://www.geeksforgeeks.org/find-rotation-count-rotated-sorted-array/>
