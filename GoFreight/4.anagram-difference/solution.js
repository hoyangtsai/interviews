function getMinimumDifference(a, b) {
  if (a.length != b.length) return [];

  let ans = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].length != b[i].length) {
      ans.push(-1);
    } else {
      let charCount = Array(26).fill(0);
      for (const c of a[i]) {
        charCount[c.charCodeAt() - 'a'.charCodeAt()]++;
      }
      for (const c of b[i]) {
        charCount[c.charCodeAt() - 'a'.charCodeAt()]--;
      }

      let count = 0;
      for (let j = 0; j < 26; j++) {
        if (charCount[j] != 0) {
          count += Math.abs(charCount[j]);
        }
      }

      ans.push(count / 2);
    }
  }

  return ans;
}