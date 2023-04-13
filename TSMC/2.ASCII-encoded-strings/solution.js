function decode(encoded) {
  encoded = encoded.split('').reverse().join('');

  let num = 0;
  let str = '';
  for (let i = 0; i < encoded.length; i++) {
    num = num * 10 + (encoded[i] - '0');
    if (num >= 32 && num <= 122) {
      str += String.fromCharCode(num);
      num = 0;
    }
  }

  return str;
}