function solution(N) {
  for (let i = 0; i < N; i++) {
    if (i == N - 1) {
      process.stdout.write('L'.repeat(N));
    } else {
      process.stdout.write('L\n');
    }
  }
}