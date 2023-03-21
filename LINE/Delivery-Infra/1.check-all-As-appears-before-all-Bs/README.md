# Check if All A's Appears Before All B's

Given a string `S` consisting of N letters `'a'` and/or `'b'` returns `true` when all occurrences of letter `'a'` are before all occurrences of letter `'b'` and returns `false` otherwise.

**Examples:**

```txt
Input: S = "aabbb"
Output: true

Input: S = "ba"
Output: false

Input: S = "aaa"
Output: true
Explanation:
Note that 'b' does not need to occur in S.

Input: S = "b"
Output: true
Explanation:
Note that 'a' does not need to occur in S.

Input: S = "abba"
Output: false
```

**Solution:**

```js
// solution.js

// two-pointers top-down
function solution(S) {  
  let l = 0, r = S.length - 1;
  while (l < r) {
    if (S[l] == 'b' && S[r] == 'a' || S[r] == 'a' && S[r - 1] == 'b') return false;
    l++;
    r--;
  }
  
  return true;
}

// bottom-up
function solution(S) {  
  for (let i = 0; i < S.length; i++) {
    if (S[i] == 'b' && S[i + 1] == 'a') return false;
  }

  return true;
}

```

## Reference

[Check if All A's Appears Before All B's - Leetcode](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/)
