process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var input = "";

process.stdin.on('data', function (text) {
  input += text;
});

process.stdin.on('end', function () {
  // do your processing here.
  // console.log(input);

  let s = input.toLowerCase();
  let map = Array(26).fill(0);
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    map[s.charCodeAt(i) - 'a'.charCodeAt()]++;
    if (map[s.charCodeAt(i) - 'a'.charCodeAt()] % 2 == 0) {
      count--;
    } else {
      count++;
    }
  }

  console.log(count <= 1);
});