# Longest Increasing Subsequence

A subsequence is created by deleting zero or more elements from a sequence while maintaining order.  
A sequence is strictly increasing if every element in the sequence is greater than the previous element. For example, [1, 2, 3] is strictly increasing while [1, 2, 2] is not.

Given an array of integers, determine the length of the longest strictly increasing subsequence.

For example, s = _[1, 2, 2, 3, 1, 6]._ Two strictly increasing subsequences are (1, 2), (1, 2, 3). The longest increasing subsequence has a length of _4: LIS = [1,2,3,6]_.

**Function Description**

Complete the function _findLIS_ in the editor below.

findLIS has the following parameter(s):
  
  int s[n]: an array of integers

**Returns**

  _int:_ the length of the longest strictly increasing subsequence in the array

**Constraints**

- 1 <= n < 1000
- 1 <= s[i] <= 1000000

**Solution**

```js
// solution.js

function findLIS(s) {
    const n = s.length;
    if (n == 1) return n;

    const len = Array(n).fill(1);

    for (let j = 1; j < n; j++) {
        for (let i = 0; i < j; i++) {
            // next number greater than previous
            if (s[j] > s[i]) {
                len[j] = Math.max(len[j], len[i] + 1);
            }
        }
    }

    return Math.max(...len);
}
```
