function solution1(A) {
  const n = A.length;
  let min = Number.MAX_VALUE;
  let ans1 = 0, ans2 = 0;
  for (let i = 0; i < n; i++) {
    // even zeros
    if (i % 2 != A[i % n]) ++ans1;
    // odd zeros
    if ((i + 1) % 2 != A[i % n]) ++ans2;
    if(i == n - 1) {
      min = Math.min(ans1, ans2, min);
    }         
  }

  return min;
}

function solution2(A) {
  function getFlipCount(arr, expected) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != expected) count++;
      expected ^= 1;
    }
    return count;
  }

  return Math.min(getFlipCount(A, 0), getFlipCount(A, 1));
}
