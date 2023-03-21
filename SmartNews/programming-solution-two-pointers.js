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
