# Player of Longest Playing Time

There is a list of player playing time per game. Please find who has the longest playing time.

**Examples:**

```json
[
    [
        { "name": "Kaka", "playingTime": 24 },
        { "name": "Messi", "playingTime": 56 }
    ]
    [
        { "name": "Kaka", "playingTime": 22 }
    ]
]
```

```txt
Output: Messi
```

If not only one person has the longest playing time, it should list all players ordered by name.

```json
[
    [
        { "name": "Kaka", "playingTime": 34 },
        { "name": "Messi", "playingTime": 56 }
    ]
    [
        { "name": "Kaka", "playingTime": 22 }
    ]
]
```

```txt
Output: Kaka,Messi
```

**Solution:**

```js
// solution.js

//Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

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
  const games = JSON.parse(input);

  let map = {};
  let max = 0;
  let players = [];
  for (let g of games) {
    for (let p of g) {
      const { name, playingTime } = p;
      if (!map[name]) {
        map[name] = playingTime;
      } else {
        map[name] += playingTime;
      }
      if (map[name] >= max && !players.includes(name)) {
        max = map[name];
        if (map[name] == max) {
          players.push(name);
        } else {
          players = [name];
        }
      }
    }
  }

  console.log(players.join(','));
});
```
