# Build as many signs with a list of names from a given string of letters

There is a company that sells large letters made out of wood and metal (similar to the ones spelling "HOLLYWOOD"). The company is going out of business, and the owners want to sell off their remaining stock. They have listed all the remaining letters in a catalogue in a string S (in no particular order), and have advertised their "Everything must go" offer online.

Attracted by the reduced prices, Alice has decided to order some letters from the company. She wants to build as many signs with the name of her new blog as possible and place them around the city. She hasn't decided on the name of her blog yet, and is considering K different possibilities. Right now she is wondering about the maximum number of signs she can build if she chooses one of the names from her list.
Knowing the list of possible names of Alice's blog L and the company catalogue state S, find the maximum number of copies of a name from L that Alice can build.

Write a function:

  ```js
    function solution(S, L);
  ```

that, given the string S and the list L consisting of K strings, returns the maximum number of copies of a string from L that can be built only using letters from S.

Examples:

1. Given S = "BILLOBILLOLLOBBI", L= ["BILL", "BOB"], the function should return 3. The sign "BILL" can be built three times using the letters from S and the sign "BOB" can be built only twice.
2. Given S = "CAT", L = ["ILOVEMYDOG", "CATS"], the function should return 0. None of the proposed names can be built using the letters from S.
3. Given S = "ABCDXYZ", L = ["ABCD", "XYZ"], the function should return 1. Both signs "ABCD" and "XYZ" can be built only once using the letters from S.

Assume that:

- the length of string S is within the range [1..100];
- K is an integer within the range [1..10];
- the lengths of the strings in L are within the range [1..100];
- string S is made only of uppercase letters (A-Z);
- strings in L consist only of uppercase letters (A-Z).

## Solution

```js
// solution.js

function solution(S, L) {
  const charCounts = {};
  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  let maxCount = 0;
  for (let i = 0; i < L.length; i++) {
    const nameCounts = {};
    const name = L[i];
    let canBuild = true;
    for (let j = 0; j < name.length; j++) {
      const char = name[j];
      nameCounts[char] = (nameCounts[char] || 0) + 1;
      // name's char not in charCounts, can't build the string
      // nameCounts[char] counts greater than charCounts[char], can't build the string
      if (!charCounts[char] || nameCounts[char] > charCounts[char]) {
        canBuild = false;
        break;
      }
    }

    if (canBuild) {
      let nameMinCount = Infinity;
      for (const char of Object.keys(nameCounts)) {
        // each char of name can build from charCounts
        const nameCount = Math.floor(charCounts[char] / nameCounts[char]);
        // take the minimum repetitions
        /**
         * ex.
         * S = 'BILLOBILLOLLOBBI', L[0] = 'BILL'
         * charCounts :>>  { B: 4, I: 3, L: 6, O: 3 }
         * nameCounts :>>  { B: 1, I: 1, L: 2 }
         * B can be built 4 times, but L only can be built 3 times
         */
        nameMinCount = Math.min(nameMinCount, nameCount);
      }
      maxCount = Math.max(maxCount, nameMinCount);
    }
  }
  
  return maxCount;
}
```
