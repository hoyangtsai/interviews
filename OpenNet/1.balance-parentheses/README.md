# Balance Parentheses

A balanced sequence of parentheses is one in which every opening bracket has a corresponding closing bracket to it. More formally, a sequence of parentheses is considered balanced if it can be represented in the form s1(s2) where both s1 and s2 are either empty or balanced strings. 

Given a sequence of parentheses, find the minimum number of swaps needed to make the sequence balanced. It is not necessary to swap adjacent characters only. If it is impossible to balance the string, return -1.

**Example**

brackets = ")()(())("

**Function Description**

Complete the function `minimumSwaps` in the editor below.

`minimumSwaps` has the following parameter(s):

_string brackets:_ the string to analyze

**Returns**

  int: the minimum number of swaps or -1

**Constraints**

- 1 ≤ length of the string _brackets_ ≤ 10<sup>5</sup>
- _brackets_ consists of _')'_ and _'('_ only.

**Solution**

```js
// solution.js

function minimumSwaps(brackets) {
    let stack = [];
    let count = 0;
    for (const c of brackets) {
        if (c == '(') {
            stack.push(')');
        } else if (c == ')') {
            if (stack.length > 0) {
                stack.pop();
            } else {
                count += 1;
            }
        }
    }

    if (stack.length != count) {
        return -1;
    }
    // return Math.ceil(count / 2);
    return count;
}
```
