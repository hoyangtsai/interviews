
function solution(S) {
  let count = 0;
  for (let i = 0; i < S.length;) {
      if (S.charAt(i) == 'X') {
          count++;
          i += 3;
      } else {
          i++;
      }
  }
  return count;
}

console.log(5 === solution("X..X.X..X...X.X.X"))
