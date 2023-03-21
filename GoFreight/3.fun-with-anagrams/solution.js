function funWithAnagrams(text) {
  let ans = [];

  let found = new Set();

  for (let i = 0; i < text.length; i++) {
    let word = text[i];
    // sorting chars
    word = word.split('').sort().join('');

    if (!found.has(word)) {
      ans.push(text[i]);
      found.add(word);
    }
  }

  ans.sort();

  return ans;
}