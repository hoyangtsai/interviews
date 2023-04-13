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