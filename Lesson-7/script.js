const animals = [
  ["🐭", "mouse", "Jerry"],
  ["🐹", "hamster", "Biscuit"],
  ["🐰", "rabbit", "Bugs"],
  ["🦊", "fox", "Mrs. Fox"],
  ["🐻", "bear", "Paddington"],
];

const food = [
  ["🍎", "apple", 10],
  ["🍐", "pear", 12],
  ["🍊", "tangerine", 15],
  ["🍋", "lemon", 5],
  ["🍌", "banana", 7],
];

const universes = [
  ["🖤", "DC", ["Superman", "Batman", "Wonder Woman"]],
  ["❤️", "Marvel", ["Iron Man", "the Hulk", "Black Widow"]],
];

function getInfo(tableName, arr) {
  document.open();
  document.write(`<br \/>`);
  document.write(`<h3>${tableName}</h3>`);
  document.write(`<br \/>`);
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if(Array.isArray(arr[i][j])) {
          document.write(`<div>${arr[i][j].join('; ')}</div>`);
          continue;
        }else document.write(`<div>${arr[i][j]}</div>`);
      }
      document.write(`<br \/>`);
    }
  document.close();
}

getInfo('Animals', animals);
getInfo('Food', food);
getInfo("Universe", universes);