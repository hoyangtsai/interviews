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

console.log('Should return 3:', solution("BILLOBILLOLLOBBI", ["BILL", "BOB"]));
console.log('Should return 0:', solution("CAT", ["ILOVEMYDOG", "CATS"]));
console.log('Should return 1:', solution("ABCDXYZ", ["ABCD", "XYZ"]));
