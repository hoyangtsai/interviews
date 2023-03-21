import { compose } from './solution';

const multiplyNumbers = (a, b) => a * b;
const doubleNumbers = (a) => 2 * a;

const ex1 = compose(doubleNumbers, multiplyNumbers)(3, 7); // 42

console.log('ex1 :>> ', ex1);

const divideBy2 = (a) => a / 2;
const square = (a) => a * a;
const max = (...args) => Math.max.apply(null, args);

const ex21 = compose(divideBy2, square, max)(2, 1, 4, 3) // 8
const ex22 = compose(divideBy2, square, max)(3, 0, 6, 5) // 18

console.log('ex21 :>> ', ex21);
console.log('ex22 :>> ', ex22);
