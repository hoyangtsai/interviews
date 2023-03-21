function countPairs(numbers, k) {
  let lo = new Set();
  let hi = new Set();
  let ans = [];
  for (const n of numbers) {
    lo.add(n);
    hi.add(n + k);
  }
  for (const n of hi) {
    if (lo.has(n)) {
      ans.push(`(${n - k}, ${n})`);
    }
  }
  return ans.length;
}