
/**
 * # implement an object called util
 * 
 * util has 2 methods: isNumber and pickBy
 * 
 * util.isNumber(3); // -> true
 * 
 * const object = { 'a': 1, 'b': '2', 'c': 3 };
 * 
 * util.pickBy(object, util.isNumber);
 * => { 'a': 1, 'c': 3 }
 */

const util = {
  isNumber: (x) => {
    return typeof x === 'number' && !Number.isNaN(x)
  },
  
  pickBy: (obj, func) => {
    // let res = {};
    // Object.entries(obj).forEach(([k, v]) => {
    //   if (func(v)) {
    //     res[k] = v;
    //   }
    // });
    // return res;
    
    return Object.entries(obj).reduce((prev, curr) => {
      const [k, v] = curr;
      if (func(v)) {
        return {
          ...prev,
          [`${k}`]: v
        }
      }
      return prev;
    }, {});
  }
};

const object = { 'a': 1, 'b': '2', 'c': 3 };
 
const res = util.pickBy(object, util.isNumber);
console.log('res =>', res);