function solution(S) {
  const N = S.length;

  let nextOpens = new Array(N).fill(-1);
  let closestId = -1;
  let qs = new Set();

  for (let i = 0; i < N; i++) {
    const c = S.charAt(i);
    if (c === '<') {
      closestId = i;
    } else if (c === '?') {
      qs.add(i);
    }
    nextOpens[i] = closestId;
  }

  let max = 0;
  let slot = new Array(N).fill(0);

  for (let i = N - 2; i >= 0; i--) {
    if (S.charAt(i) === '>') {
      slot[i] = 0;
      continue;
    }
    const j = slot[i + 1];
    if (i + j + 1 < N && (S.charAt(i + j + 1) === '?' || S.charAt(i + j + 1) === '>')) {
      slot[i] = j + 2;
      if (slot[i] > max) {
        max = slot[i];
      }
    } else if (S.charAt(i + j - 1) === '?' || S.charAt(i + j - 1) === '>') {
      const count = Math.floor(j / 2);
      const lastOpenId = i + count - 1;
      if (nextOpens[i + j - 1] === lastOpenId || qs.has(lastOpenId)) {
        slot[i] = j;
      } else {
        slot[i] = 0;
      }
    } else {
      slot[i] = 0;
    }
  }

  return max;
}

// console.log(solution('<><??>>'))
console.log(solution('<<??'))
