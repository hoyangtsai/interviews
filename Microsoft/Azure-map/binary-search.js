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