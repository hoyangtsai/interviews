function sleepPromisify(milliSeconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, milliSeconds)
  })
}

sleepPromisify(1000).then(() => {
  console.log('callback after 1s');
});

// ----

const succCallback = () => {
  console.log(`this is success`)
}

const errCallback = () => {
  console.log(`this is error`)
}

function sleep(milliSeconds, succCallback, errCallback) {
  setTimeout(() => {
    succCallback();
  }, milliSeconds)
}

function promisify(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(args, resolve, reject);
    });
  }
}


// const sleep = (ms) => setTimeout(() => {
//   console.log('done :>> ');
// }, ms);

// const promisifisedSleep = promisifySleep(sleep);
// promisifisedSleep(1000).then(succCallback).catch(errCallback);
