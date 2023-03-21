function maxEnergy(mat) {
  // Write your code here
  const m = mat.length;
  const n = mat[0].length;

  const dirs = [[1, -1], [1, 0], [1, 1]];

  let matrix = Array.from(Array(m).fill(Infinity), () => Array(n).fill(Infinity));
  matrix[0][0] = mat[0][0];

  let visited = Array.from(Array(m).fill(false), () => Array(n).fill(false));

  function Cell(x, y, sum) {
    this.x = x;
    this.y = y;
    this.sum = sum;
  }

  function isValidCell(x, y) {
    return x >= 0 && x < m && y >= 0 && y < n;
  }

  function shortestFist(a, b) {
    return a.sum - b.sum;
  }

  let queue = [];
  for (let i = 0; i < n; i++) {
    queue.push(new Cell(0, i, mat[0][i]));
  }

  function getMin(matrix) {
    let min = Number.MAX_VALUE;
    for (let i = 0; i < n; i++) {
      min = Math.min(min, matrix[m - 1][i]);
    }
    return min;
  }

  while (queue.length > 0) {
    const curr = queue.shift();

    if (curr.x == m - 1 && curr.y == n - 1) {
      const min = getMin(matrix);
      return 100 - min;
    }

    visited[curr.x][curr.y] = true;

    for (const [dx, dy] of dirs) {
      const nextX = curr.x + dx;
      const nextY = curr.y + dy;

      if (isValidCell(nextX, nextY) && !visited[nextX][nextY]) {
        const nextSum = matrix[curr.x][curr.y] + mat[nextX][nextY];

        // console.log('nextSum =>', nextSum);

        if (nextSum < matrix[nextX][nextY]) {
          matrix[nextX][nextY] = nextSum;
          queue.push(new Cell(nextX, nextY, nextSum));
        }
      }
    }

    queue.sort(shortestFist);
  }

  const min = getMin(matrix);
  return 100 - min;
}

function maxEnergy(mat) {
  // Write your code here
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