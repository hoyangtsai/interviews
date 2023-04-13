// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {

    function isSymmetric(i, j) {
        while (
            (S[i++] == '<' || S[i++] == '?') &&
            (S[j--] == '>' || S[j--] == '?')
        ) {
            return true;
        }
        return false;
    }

    let max = 0;
    let l = 0, r = S.length - 1;

    while (l < r) {
        if ()

        l++;
        r--;
        if (isSymmetric) {
           max = Math.max(max, r - l + 1); 
        }

    }
}
