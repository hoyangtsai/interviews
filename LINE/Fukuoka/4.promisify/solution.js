function promisify(fn, hasCallback = true) {
  if (typeof fn !== 'function') return;

  // High-order function
  return (...args) => {
    return new Promise((resolve, reject) => {
      if (hasCallback === false) {
        resolve(fn.apply(null, args));
      } else {
        function cb(err, ...results) {
          if (err) {
            return reject(err)
          }
          return resolve(results.length === 1 ? results[0] : results) 
        }
        args.push(cb);
        fn.apply(null, args);
      }
    }) 
  }
}