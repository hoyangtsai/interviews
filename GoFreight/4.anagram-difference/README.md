# Anagram Difference

An anagram is a word whose characters can be rearranged to create another word. Given two strings, determine the minimum number of characters in either string that must be modified to make the two strings anagrams. If it is not possible to make the two strings anagrams, return -1.

**Example:**

```txt
Input: a = ['tea', 'tea', 'act'], b= ['ate', 'toe', 'acts]
Output: [0, 1, -1]
Explanation:
• a[0] = tea and b[0] = ate are anagrams, so O characters need to be modified.
• a[1] = tea and b/1] = toe are not anagrams. Modify 1 character in either string (o -› a or a -› o) to make them anagrams.
• a[2] = act and b[2] = acts are not anagrams and cannot be converted to anagrams because they contain different numbers of characters.
```

**Solution:**

```js
// solution.js

function getMinimumDifference(a, b) {
  if (a.length != b.length) return [];

  let ans = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].length != b[i].length) {
      ans.push(-1);
    } else {
      let charCount = Array(26).fill(0);
      for (const c of a[i]) {
        charCount[c.charCodeAt() - 'a'.charCodeAt()]++;
      }
      for (const c of b[i]) {
        charCount[c.charCodeAt() - 'a'.charCodeAt()]--;
      }

      let count = 0;
      for (let j = 0; j < 26; j++) {
        if (charCount[j] != 0) {
          count += Math.abs(charCount[j]);
        }
      }

      ans.push(count / 2);
    }
  }

  return ans;
}
```