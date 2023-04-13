# ASCII Encoded Strings

Many simple encoding methods have been devised over the years. A common method is the ASCI character set used to display characters on the screen. Each character is given a numeric value which can be interpreted by the computer.

To decode the string, first reverse the string of digits, then successively pick valid values from the string and convert them to their ASCII equivalents. Some of the values will have two digits, and others three. Use the ranges of valid values when decoding the string of digits.

For reference, the characters in s correspond to the following ASCII values:

- The value range for A through Z is 65 through 90.
- The value range for a through z is 97 through 122.
- The value of the space character is 32.

Given a string, decode it following the steps mentioned above.

## Example

The table below shows the conversion from the string `Hacker Rank` to the ASCI string `729799107101114328297110107`

<style>
th {
    display: none;
}
</style>

|             |    |    |    |     |     |     |    |    |     |     |
| ----------- | -- | -- | -- | --- | --- | --- | -- | -- | --- | --- |
| **Character**   | H  | a  | c  | k   | e   | r   | R  | a  | n   | k   |
| **ASCII Value** | 72 | 97 | 99 | 107 | 101 | 114 | 82 | 97 | 110 | 107 |

The last step of the encoding is to reverse the ASCII string `7010117928411101701997927`.

To decode the string, first reverse the string of digits, then successively pick valid values from the string and convert them to their ASCIl equivalents. Some of the values will have two digits. and others three. Use the ranges of valid values when decoding the string of digits

For reference, the characters in s correspond to the following ASCII values:

- The value range for _A_ through _Z_ is _65_ through _90_.
- The value range for _a_ through _z_ is _97_ through _122_.
- The value of the space character is _32_.

## Function Description

Complete the function decode in the editor below.

decode has the following parameter(s):
  _string encoded_: an encoded string

Returns:
  _string_: the original decoded string

Constraints

- 1 <= |s| <= 10^5
- s[i] is an ascii character in the range [A-Za-2] or a space character


<details>
  <summary>Sample Case 0</summary>

__Sample Input__

```c
STDIN                                                 Function
-----                                                 ---------
23511011501782351112179911801562340161171141148   →   string decode = "23511011501782351112179911801562340161171141148"
```

__Sample Output__

```txt
Truth Always Wins
```

__Explanation__

Reverse _encoded_ to get _84114117116104326510811997121115328710511011522_. Then replace each ASCII value with its corresponding character
</details>

## Solution

```js
// solution.js

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
```
