for (var i = 0; i < 3; i++) {
  (function(i) {
    setTimeout(function () {
      console.log(i);
    }, 100);
  })(i)
}

// console.log('---Event loop---');

// setTimeout(function () {
//   console.log(1)
// }, 0);
// new Promise(function executor(resolve) {
//   console.log(2);
//   for (var i = 0; i < 10000; i++) {
//     i == 9999 && resolve();
//   }
//   console.log(3);
// }).then(function () {
//   console.log(4);
// });
// console.log(5);

// 2 3 5 4 1