// 
// Your previous Java content is preserved below:
// 
/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

Input: [3, 0, 3]
Output: 3
Image:
x x
x x
x x
---

Input: [0, 3, 1, 2, 0, 5, 3]
Output: 6
Image:
     x
     x
 x   xx
 x x xx
 xxx xx
-------

Input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
Output: 6
Image:
       x
   x   xx x
 x xx xxxxxx
------------
*/



function solution(A) {
  // write your code here

  if (A.length < 3) return 0;

  //   let ans = 0;
  //   let leftMax = [];
  //   let rightMax = [];
  //   const W = A.length;

  //   leftMax[0] = A[0];
  //   for (let i = 1; i < W; i++) {
  //     leftMax[i] = Math.max(A[i], leftMax[i - 1]);
  //   }

  //   rightMax[W - 1] = A[W - 1];
  //   for (let i = W - 2; i >= 0; i--) {
  //     rightMax[i] = Math.max(A[i], rightMax[i + 1]);
  //   }

  //   for (let i = 1; i < W; i++) {
  //     ans += Math.min(leftMax[i], rightMax[i]) - A[i];
  //   }
  //   return ans;

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

console.log(solution([3, 0, 3]) === 3);
console.log(solution([0, 3, 1, 2, 0, 5, 3]) === 6);
console.log(solution([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) === 6);


// time complexity: O(n). n is size of A length.
// space complexity: O(1).


// // Given n non-negative integers representing an elevation map
// // where the width of each bar is 1, compute how much water it
// // is able to trap after raining.
// //
// // Example 1:
// // Input: [3,0,3]
// // Output: 3
// //
// //  █○█
// //  █○█
// //  █○█
// //  303
// //
// //
// // Example 2:
// // Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// // Output: 6
// //
// //         █
// //     █○○○██○█
// //   █○██○██████
// //  010210132121
// // 
// //
// // Legend:
// // █ : elevation (" " is elevation 0)
// // ○ : trapped rain water
// 
// class Solution {
//     public int trap(int[] height) {
//         
//     }
// }
