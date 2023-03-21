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