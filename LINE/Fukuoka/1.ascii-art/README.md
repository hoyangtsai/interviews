# ASCII-art

Write a function that prints out ASCII-art in the shape of the capital letter L, made up of copies of the capital letter L. Parameter N is an integer (between 1 and 100) and represents the expected size of the ASCII-art (the output should comprise N rows, the last of which should comprise N letters L).

**Example:**

```txt
Input: N = 4
Output:
L
L
L
LLLL
```

**Solution:**

```js
// solution.js

function solution(N) {
  for (let i = 0; i < N; i++) {
    if (i == N - 1) {
      process.stdout.write('L'.repeat(N));
    } else {
      process.stdout.write('L\n');
    }
  }
}
```
