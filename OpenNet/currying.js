const add = x => y => x + y;

function add(x) {
  return function(y) {
    return x + y;
  }
}

const add5 = add(5); // return function(y) { 5 + y }
add5(10); // add(5)(10)