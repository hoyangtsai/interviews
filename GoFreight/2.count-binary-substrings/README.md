# Count Binary Substrings

A binary string is a string consisting only of Os and 1s. A substring is a contiguous group of characters within a string.

Given a binary string, find the number of substrings that contain an equal number of Os and 1s and all the Os and 1s are grouped together. Note that duplicate substrings are also counted in the answer. For example, '0011' has two overlapping substrings that meet the criteria: '0011' and '01'.

**Example:**

```txt
Input: S = "011001"
Output: 4
Explanation:
The substrings "01", "10", "1100", and "01" have equal numbers of Os and 1s with all Os and 1s grouped consecutively. Hence, the answer is 4. Note that the substring "0110" has an equal number of Os and 1s but is not counted because not all Os and 1s are grouped together.
```

**Solution:**

```js
// solution.js

function getSubstringCount(s) {
  let curr = 1, prev = 0, ans = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      curr++;
    } else {
      ans += Math.min(curr, prev)
      prev = curr;
      curr = 1;
    }
  }
  return ans + Math.min(curr, prev);
}
```

## Reference

<https://leetcode.com/problems/count-binary-substrings/>
