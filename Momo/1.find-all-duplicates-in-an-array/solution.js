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