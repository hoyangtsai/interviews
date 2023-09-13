function minimumSwaps(brackets) {
    let stack = [];
    let count = 0;
    for (const c of brackets) {
        if (c == '(') {
            stack.push(')');
        } else if (c == ')') {
            if (stack.length > 0) {
                stack.pop();
            } else {
                count += 1;
            }
        }
    }

    if (stack.length != count) {
        return -1;
    }
    // return Math.ceil(count / 2);
    return count;
}

console.log(minimumSwaps("))()(()(")) // expect 1, but output 2
