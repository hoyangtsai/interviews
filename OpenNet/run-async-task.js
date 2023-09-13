console.clear();

function fibonacci(n) {
  return n < 1
    ? 0
    : n <= 2
      ? 1
      : fibonacci(n - 1) + fibonacci(n - 2);
}

const doFib = (iterations) =>
  new Promise(async (resolve) => {
    console.log('start do Fib');
    const start = Date.now();
    const result = await fibonacci(iterations);
    console.log(`doFib done in ${Date.now() - start}ms`);
    resolve(result);
  });

const run = () => {
  const main = async () => {
    const start = Date.now();

    const values = await Promise.all([
      doFib(30),
      doFib(30),
      doFib(30),
      doFib(30),
      doFib(30),
      doFib(30),
      doFib(30),
      doFib(30),
      doFib(30),
    ]);
  };

  main().catch(console.error);
}

run();

