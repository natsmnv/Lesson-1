let arr = [];
let num = prompt('Enter your number');
let sum = 0;

while(num > -2 && num < 2 || num > 10 || num < -10 || num === null) {
    num = prompt('Enter your number');
}

if(num <= -2 && num >= -10) {
    num = Math.abs(num);
    if(!Number.isInteger(num)) {
        num = Math.round(num);
    }
}else if(!Number.isInteger(num)) {
    num = Math.round(num);
}

console.log(num);

for(let i = 0; i < num; i++) {
    let randomValue = Math.round(Math.random()*10);
    arr.push(randomValue);
    sum += randomValue;
}

console.log(arr);
console.log(sum);