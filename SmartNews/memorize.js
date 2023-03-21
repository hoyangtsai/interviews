const add = (a, b) => {
  const c = a + b;
  console.log('add :>> ', c);
  return c;
}

const memorize = (fn) => {
  const cache = new Map();
  const cached = (...args) => {
    if (cache.has(fn.name)) {
      // do nothing
    } else {
      cache.set(fn.name, fn.apply(this, args));
      return cache.get(fn.name);
    }
  }
  return cached;
}

let memo_sum = memorize(add);

memo_sum(1, 2) // 3
memo_sum(1, 2) // not print 3