# Balancing Parentheses

Given a string that consists of left and right parentheses, " (' and ') ', balance the parentheses by inserting parentheses as necessary.
Determine the minimum number of characters that must be inserted.

**Example:**

```txt
Input: s = '()))'
Output: 2
Explanation:
Insert a '(' 2 times at the beginning of the string to make it valid: '((()))'.
```

**Solution:**

```js
// solution.js

function getMin(s) {
  let stack = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c == '(') {
      stack.push(')');
    } else if (c == ')') {
      if (stack.length > 0) {
        stack.pop();
      } else {
        count++;
      }
    }
  }
  return count + stack.length;
}
```
