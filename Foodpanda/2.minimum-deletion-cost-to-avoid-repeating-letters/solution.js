function solution(S, C) {
  let res = 0;
  for (let i = 0; i < S.length;) {
    const ch = S.charAt(i);
    let max = 0, sum = 0;

    while (i < S.length && ch == S.charAt(i)) {
      max = Math.max(max, C[i]);
      sum += C[i];
      i++;
    }

    res += sum - max;
  }
  return res;
};
