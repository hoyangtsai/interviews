// two-pointers top-down
function solution(S) {  
  let l = 0, r = S.length - 1;
  while (l < r) {
    if (S[l] == 'b' && S[r] == 'a' || S[r] == 'a' && S[r - 1] == 'b') return false;
    l++;
    r--;
  }
  
  return true;
}

// bottom-up
function solution(S) {  
  for (let i = 0; i < S.length; i++) {
    if (S[i] == 'b' && S[i + 1] == 'a') return false;
  }

  return true;
}
