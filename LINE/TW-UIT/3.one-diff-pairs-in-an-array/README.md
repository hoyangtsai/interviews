# One-dff Pairs in an Array

Write a function:

function solution(arrays) {}

that, given an array A of N integers, please return how many pairs that diffs by 1

**Example 1:**

```txt
Input: A = [7]
Output: 0
```

**Example 2:**

```txt
Input: A = [4, 3]
Output: 1
```

**Example 3:**

```txt
Input: A = [11, 1, 8, 12, 14]
Output: 1
Explanation: Pair of elements which differ by 1 is (11, 12).
```

**Example 4:**

```txt
Input: A = [4, 10, 8, 5, 9]
Output: 3
Explanation: Pairs of elements which differ by 1 are (4, 5), (10, 9) and (8, 9).
```

**Example 5:**

```txt
Input: A = [5, 5, 5, 5, 5],
Output: 0
Explanation: There are no two elements in A whose values differ by 1.
```

**Solution:**

```js
// solution.js

//Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var input = "";

process.stdin.on('data', function (text) {
  input += text;
});

process.stdin.on('end', function () {
  array = JSON.parse(input)
  //do your processing here.
  //     console.log(input);

  let counter = {};
  for (let n of input) {
    counter[n] = (counter[n] || 0) + 1;
  }

  let res = 0;
  for (let [k, c] of Object.entries(counter)) {
    if (counter[parseInt(k) + 1]) {
      res++;
    }
  }

  console.log(res);
});
```

## Reference

[K-diff Pairs in an Array - Leetcode](https://leetcode.com/problems/k-diff-pairs-in-an-array/)
