function findLIS(s) {
    const n = s.length;
    if (n == 1) return n;

    const len = Array(n).fill(1);

    for (let j = 1; j < n; j++) {
        for (let i = 0; i < j; i++) {
            // next number greater than previous
            if (s[j] > s[i]) {
                len[j] = Math.max(len[j], len[i] + 1);
            }
        }
    }

    return Math.max(...len);
}
