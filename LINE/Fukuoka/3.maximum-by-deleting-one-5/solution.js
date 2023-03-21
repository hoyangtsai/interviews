function solution(A) {
  const isNeg = (A < 0);
  A = isNeg ? A * -1 : A;

  const strA = String(A);

  let max = Number.MIN_VALUE;
  for (let i = 0; i < strA.length; i++) {
    // convert string to array for splice manipulation
    let nums = strA.split('');
    if (strA[i] == 5) {
      nums.splice(i, 1);
      let pos = parseInt(nums.join(''));
      if (isNeg && pos > 0) pos *= -1;
      max = Math.max(max, pos);
    }
  }

  return max;
}

console.log(solution(15958)) // 1958
console.log(solution(-5859)) // -589
console.log(solution(-5000)) // 0