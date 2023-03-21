# Promisify

You are given an initial function named `promisify`, and it receives two arguments: fn (type: function) and hasCallback (type: Boolean, default: true). Originally the function returns another function that receives the `args` object (containing the arguments) from the parent function. The `promisify` function needs to be updated in order to satisfy the following requirements:

1. It must convert the function passed in the parameter fn into a Promise object (thus it can resolve/reject).
2. When the hasCallback parameter is true, fn is a function implementing the callback pattern `(error, response) => {}`.
3. When the hasCallback parameter is false, fn is a regular function.
4. If a non-function type is passed as the fn argument, invalid (string) should be returned.
5. When a function is `promisified`, it can receive any number of arguments.

**Example 1: Asynchronous function**

```js
const fs = require('fs')
const promisified = promisify(fn: fs.readdir)
promisified('./')
  .then((dirs) => {
    //Must resolve
  })
  .catch(err => {
    //Must NOT reject
  })
```

**Example 2: Asynchronous function with options**

```js
const fs = require('fs')
const promisified = promisify(fn: fs.readdir)
promisified('./', { encoding: 'utf8' })
  .then((dirs) => {
    //Must resolve
  })
  .catch(err => {
    //Must NOT reject
  })
```

**Example 3: Asynchronous function (failing). It should fail because the file nonexistent. txt that the method fs unlink is trying to delete does not exist, thus fs.unlink is expected to return an error and the error should be rejected by the promise.**

```js
const fs = require('fs')
const promisified = promisify(fs.unlink)
promisified('./nonexistent.txt')
  .then((res) => {
    //Must NOT resolve
  })
  .catch(err => {
    //Must fail
  })
```

**Example 4: Synchronous function. The second argument (hasCallback) is false.**

```js
function returnOne() {
  return 1;
}

const promisified = promisify(returnOne, false)
promisified()
  .then((res) => {
    //Must resolve
  })
  .catch((err) => {
    //Must NOT reject
  })
```

**Solution:**

```js
// solution.js

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
```
