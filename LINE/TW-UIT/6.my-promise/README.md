# My Promise

Write your own promise from scratch with:

1. `constructor` usage
2. `then` and `catch` clauses

**Solution:**

```js
// my-promise.js

/** 
 *  Complete Custom Promise function
 *
 *  Example
 *  let promise = new MyPromise((resolve, reject) => {
 *     setTimeout(() => { resolve() }, 1000);
 *  });
 *  
 *  promise.then(() => {
 *     console.log('done')
 *  }).catch(() => {
 *     console.error('error')
 *  })
 **/

class MyPromise {
  constructor(executionFunction) {
    this.promiseChains = [];

    this.handleError = () => {}

    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);
    executionFunction(this.onResolve, this.onReject);
  }

  then(handleSuccess) {
    this.promiseChains.push(handleSuccess);
    return this;
  }

  catch(handleError) {
    this.handleError = handleError;
    return this;
  }

  onResolve(value) {
    let storeValue = value;
    try {
      this.promiseChains.forEach((nextFunction) => {
        storeValue = nextFunction(storeValue);
      });
    } catch (error) {
      this.promiseChains = [];
      this.onReject(error);
    }
  }

  onReject(error) {
    this.handleError(error);
  }
}

let promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000);
})

promise.then(() => {
  console.log('done');
}).catch((err) => {
  console.log('error');
});
```

## Reference

<https://skilled.dev/course/build-a-javascript-promise>
