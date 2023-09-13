# Spam Detection

Implement a prototype of an email spam detection algorithm.

For simulation, _subjects_ of _n_ emails and _k_ spam words are given in two arrays of strings, _subjects_, and _spam_words_. An email is considered spam if it contains at least two spam words in the subject. If a spam word is repeated, it counts as two so the email is considered spam. The spam words are not case-sensitive.

Given subjects and spam_words, return an array of n strings, "spam" or "not_spam", one for each subject.

**Example**

**Suppose subjects = ["free prize worth millions", "ten tips for a carefree lifestyle"] and spam_words = ["free", "money", "win", "millions"].**

| Subject                           | Spam Words     | Answer   |
| :-------------------------------- | :------------- | :------- |
| free prize worth millions         | free, millions | spam     |
| ten tips for a carefree lifestyle | -              | not_spam |

**Hence the answer is ["spam", "not_spam"].**

**Function Description**

Complete the function getSpamEmails in the editor below. _getSpamEmails_ takes the following arguments:

  _string subjects[n]:_ the subjects of the email  
  _string spam_words[n]:_ the spam words

**Returns**

  _string[n]:_ the results of spam detection

**Constraints**

- 1 <= n <= 10<sup>3</sup>
- 1 <= k <= 10<sup>5</sup>
- 1 <= | subjects[i] | <= 10<sup>5</sup>
- 1 <= | spam words[i] | <= 10<sup>5</sup>
- It is guaranteed that the subjects and spam words consist of lowercase and uppercase English letters and spaces only.

**Solution**

```js
// solution.js

function getSpamEmails(subjects, spam_words) {
  const res = [];
  
  for (let i = 0; i < subjects.length; i++) {
      const subjectLowerCase = subjects[i].toLowerCase();
      let spamWordCount = 0;


      for (let j = 0; j < spam_words.length; j++) {
          const spamWordLowerCase = spam_words[j].toLowerCase();

          const subjectArr = subjectLowerCase.split(' ');

          for (let k = 0; k < subjectArr.length; k++) {
            if (subjectArr[k] == spamWordLowerCase) {
              spamWordCount++;
            }

            if (spamWordCount >= 2) {
              break;
            }
          }

          if (spamWordCount >= 2) {
              break;
          }
      }
      
      res[i] = spamWordCount >= 2 ? "spam" : "not_spam";
  }

  return res;
}
```
