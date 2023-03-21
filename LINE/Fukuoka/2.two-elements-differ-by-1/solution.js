function solution(A) {
  if (A.length < 2) return false;

  const numberSet = new Set(A);

  return A.some((num) => numberSet.has(num - 1) || numberSet.has(num + 1));
}