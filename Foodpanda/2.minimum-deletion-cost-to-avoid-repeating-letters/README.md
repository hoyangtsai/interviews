# Minimum Deletion Cost to Avoid Repeating Letters

You are given a string `S`. Deletion of the K-th letter of `S` costs `C[K]`. After deleting a letter, the costs of deleting other letters do not change.
You want to delete some letters from S to obtain a string without two identical letters next to each other. What is the minimum total cost of deletions to achieve such a string?

**Example 1:**

```txt
Input: S = "abccbd", C = [0, 1, 2, 3, 4, 5]
Output: 2
Explanation:
Delete the first occurrence of 'c' to achieve "abcbd".
```

**Example 2:**

```txt
Input: S = "aabbcc", C = [1, 2, 1, 2, 1, 2]
Output: 3
Explanation: 
By deleting all letters with a cost of 1, you can achieve string "abc".
```

**Example 3:**

```txt
Input: S = "aaaa", C = [3, 4, 5, 6]
Output: 12
Explanation:
Delete all but one letter 'a', and the lowest cost of deletions is 3+4+5=12.
```

**Solution:**

```js
// solution.js

function solution(S, C) {
  let res = 0;
  for (let i = 0; i < S.length;) {
    const ch = S.charAt(i);
    let max = 0, sum = 0;

    while (i < S.length && ch == S.charAt(i)) {
      max = Math.max(max, C[i]);
      sum += C[i];
      i++;
    }

    res += sum - max;
  }
  return res;
};

```

## Appendix

<https://leetcode.ca/2020-03-26-1578-Minimum-Deletion-Cost-to-Avoid-Repeating-Letters/>
