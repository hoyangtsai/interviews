function promiseAll(promises) {
  if (!Array.isArray(promises)) {
    return new TypeError('Arguments must be an array');
  }

  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  const outputs = [];
  let counter = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          outputs[index] = value;
          counter += 1;
          if (counter === promises.length) {
            resolve(outputs);
          }
        })
        .catch(reject);
    });
  });
}

