function getMin(s) {
  let stack = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c == '(') {
      stack.push(')');
    } else if (c == ')') {
      if (stack.length > 0) {
        stack.pop();
      } else {
        count++;
      }
    }
  }
  return count + stack.length;
}