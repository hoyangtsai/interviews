function solution(A) {
  // write your code here

  if (A.length < 3) return 0;

    let ans = 0;
    let leftMax = [];
    let rightMax = [];
    const W = A.length;

    leftMax[0] = A[0];
    for (let i = 1; i < W; i++) {
      leftMax[i] = Math.max(A[i], leftMax[i - 1]);
    }

    rightMax[W - 1] = A[W - 1];
    for (let i = W - 2; i >= 0; i--) {
      rightMax[i] = Math.max(A[i], rightMax[i + 1]);
    }

    for (let i = 1; i < W; i++) {
      ans += Math.min(leftMax[i], rightMax[i]) - A[i];
    }
    return ans;
}

console.log(solution([3, 0, 3]) === 3);
console.log(solution([0, 3, 1, 2, 0, 5, 3]) === 6);
console.log(solution([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) === 6);

/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */