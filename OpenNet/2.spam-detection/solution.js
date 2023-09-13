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

          // const regex = new RegExp(`\\b${spamWordLowerCase}\\b`, 'g');
          // const matches = subjectLowerCase.match(regex);
          // if (matches) {
          //     spamWordCount += matches.length >= 2 ? 2 : 1;
          // }

          if (spamWordCount >= 2) {
              break;
          }
      }
      
      res[i] = spamWordCount >= 2 ? "spam" : "not_spam";
  }

  console.log('res :>> ', res);
  return res;
}



// getSpamEmails([ 'I paid him paid', 'Summertime Sadness' ], [ 'I', 'Sadness', 'paid' ])


getSpamEmails([
  'gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd',
  'gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd',
  'alcgxovldqfzaor hdigyojknvi ztpcmxlvovafh phvshyfiqqtqbxjj qngqjhwkcexec dkmzakbzrkjwqdy',
  'gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd',
  'ssjoatryxmbwxbw xnagmaygz fnzpqftobtaotua xmwvzllkujidh kzwzcltgqngguft ahalwvjwqncksiz',
  'gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd gwnpnzijd'
],
[
  'gpuamkxkszhkbpph',
  'kinkezplvfjaq',
  'opodo',
  'krjz',
  'imlvumuare',
  'excfyc',
  'beurg',
  'jyos',
  'dhvuyfvtvn',
  'dyluacvray',
  'Gwnpnzijd'
])