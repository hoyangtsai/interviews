# Palindrome Permutation

Determine whether given string is a palindrome.

**Examples:**

```txt
Example 1
Input: aabbaa
Output: true

Example 2
Input: Aabbaa
Output: true

Example 3
Input: abcde
Outout: false
```

**Solution:**

```js
// solution.js

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var input = "";

process.stdin.on('data', function (text) {
  input += text;
});

process.stdin.on('end', function () {
  // do your processing here.
  // console.log(input);

  let s = input.toLowerCase();
  let map = Array(26).fill(0);
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    map[s.charCodeAt(i) - 'a'.charCodeAt()]++;
    if (map[s.charCodeAt(i) - 'a'.charCodeAt()] % 2 == 0) {
      count--;
    } else {
      count++;
    }
  }

  console.log(count <= 1);
});
```

## Appendix

<https://leetcode.com/problems/palindrome-permutation/description/>
