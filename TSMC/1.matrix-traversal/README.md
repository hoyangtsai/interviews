# Matrix Traversal

Given a 4 x 4 matrix mat, the initial energy is 100. The task is to reach the last row of the matrix with the maximum possible energy left.

The matrix can be traversed in the following way:

1. Start with any cell in the first row.
2. In each move, traverse from cell `(i, j)` of the $i^{th}$ row and $j^{th}$ column to any existing cell out of `(i + 1, j - 1)`, `(i + 1, j)` or `(i + 1, j + 1)`
3. Finish the traversal in the last row.

After stepping on a cell `(i, j)`, energy decreases by `mat[i][j]` units. Find the maximum possible energy left at the end of
the traversal

Note: The final energy can be negative.

## Example

```java
mat[][] = ([10. 20, 30, 40],
         [60, 50, 20, 80],
         [10, 10, 10, 10],
         [60. 50. 60. 50])
```

Possible paths:
0 - based indexing is used.

- (0, 0) - (1, 1) - (2, 2) - (3, 3)
- (0. 1) - (1. 2) - (2. 2) - (3, 2)

For the first path, energy left = 100 - 10 - 50 - 10 - 50 = -20
For the second path, energy left = 100 - 20 - 20 -10 - 50 = 0

It can be proven that 0 is the maximum energy possible at
the end of the traversal so return O

## Solution

```js
// solution.js

function maxEnergy(mat) {
  const m = mat.length;
  const n = mat[0].length;

  let min = Number.MAX_VALUE;
  for (let i = 1; i < m; i++) {
    min = Number.MAX_VALUE;
    for (let j = 0; j < n; j++) {
      if (j > 0 && j < n - 1) { // When all paths are possible
        mat[i][j] += Math.min(mat[i - 1][j], mat[i - 1][j - 1], mat[i - 1][j + 1]);
      } else if (j > 0) { // When diagonal right is not possible
        mat[i][j] += Math.min(mat[i - 1][j], mat[i - 1][j - 1]);
      } else if (j < n - 1) { // When diagonal left is not possible
        mat[i][j] += Math.min(mat[i - 1][j], mat[i - 1][j + 1]);
      }

      min = Math.min(mat[i][j], min);
    }
  }

  return 100 - min;
}
```
