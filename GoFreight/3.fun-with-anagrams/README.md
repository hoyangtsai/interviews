# Fun with Anagrams

Two strings are anagrams if they are permutations of each other. In other words, both strings have the same size and
the same characters. For example, "aaagmnrs" is an anagram of "anagrams". Given an array of strings, remove each string that is an anagram of an earlier string, then return the remaining array in sorted order.

**Example:**

```txt
input: str = ["code", "doce", "ecod", "framer", "frame"]
output: ["code", "framer", "frame"]
Explanation:
• "code" and "doce" are anagrams. Remove "doce" from the array and keep the first occurrence "code" in the array.
• "code" and "ecod" are anagrams. Remove "ecod" from the array and keep the first occurrence "code" in the array.
• "code" and "framer" are not anagrams. Keep both strings in the array.
• "framer" and "frame" are not anagrams due to the extra 'r' in 'framer'. Keep both strings in the array.
```

**Solution:**

```js
// solution.js

function funWithAnagrams(text) {
  let ans = [];

  let found = new Set();

  for (let i = 0; i < text.length; i++) {
    let word = text[i];
    // sorting chars
    word = word.split('').sort().join('');

    if (!found.has(word)) {
      ans.push(text[i]);
      found.add(word);
    }
  }

  ans.sort();

  return ans;
}
```