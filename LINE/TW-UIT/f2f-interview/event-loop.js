setTimeout(function () {
  console.log(1);
});
new Promise(function (resolve) {
  console.log(2);

  for (let i = 0; i < 10000; i++) {
    i == 9999 && resolve();
  }
}).then(function () {
  console.log(3);
});
console.log(4);

// 2 4 3 1

// console.log('1');
// setTimeout(function () {
//   console.log('2');
//   new Promise(function (resolve) {
//     console.log('3');
//     resolve();
//   }).then(function () {
//     console.log('4')
//   })
// })
// new Promise(function (resolve) {
//   console.log('5');
//   resolve();
// }).then(function () {
//   console.log('6')
// })

// setTimeout(function () {
//   console.log('7');
//   new Promise(function (resolve) {
//     console.log('8');
//   }).then(function () {
//     console.log('9')
//   })
// })
// console.log('10');

// 1 5 10 6 2 3 4 7 8

// https://blog.csdn.net/alokka/article/details/104866527