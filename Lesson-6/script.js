const ARR = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log(ARR);

let sum = 0;
let quantity = 0;

for(let i = 0; i < ARR.length; i++) {
    if(ARR[i] > 0) {
        sum += ARR[i];
        quantity++;
    }
}
console.log(`First task:\nSum: ${sum}\nQuantity: ${quantity}\n`);

let min = ARR[0];
let minNum;

for(let i = 1; i < ARR.length; i++) {
    if(min > ARR[i]) {
        min = ARR[i];
        minNum = i+1;
    }
}
console.log(`Second task:\nMin: ${min}\nNumber: ${minNum}`);

let max = ARR[0];
let maxNum;

for(let i = 0; i < ARR.length; i++) {
    if(max < ARR[i]) {
        max = ARR[i];
        maxNum = i+1;
    }
}
console.log(`Third task:\nMax: ${max}\nNumber: ${maxNum}`);

let negative = 0;

for(let i = 0; i < ARR.length; i++) {
    if(ARR[i] < 0) {
        negative++;
    }
}

console.log(`Fourth task:\nQuantity of negative elements: ${negative}`);

let notPaired = 0;
let sumNotPaired = 0;

for(let i = 0; i < ARR.length; i++) {
    if(ARR[i] % 2 !== 0 && ARR[i] > 0) {
        notPaired++;
        sumNotPaired += ARR[i];
    }
}

console.log(`Fifth task:\nQuantity of not paired elements: ${notPaired}`);

let paired = 0;
let sumPaired = 0;

for(let i = 0; i < ARR.length; i++) {
    if(ARR[i] % 2 === 0 && ARR[i] > 0) {
        paired++;
        sumPaired += ARR[i];
    }
}

console.log(`Sixth task:\nQuantity of paired elements: ${paired}`);

console.log(`Seventh task:\nSum of paired elements: ${sumPaired}`);

console.log(`Eight task:\nSum of not paired elements: ${sumNotPaired}`);

let multiply = 1;

for(let i = 0; i < ARR.length; i++) {
    if(ARR[i] > 0) {
        multiply *= ARR[i];
    }
}

console.log(`Ningth task:\nMultiply: ${multiply}`);

for(let i = 0; i < ARR.length; i++) {
    if(ARR[i] < max) {
        ARR[i] = 0;
    }
}

console.log(`Tenth task:\nArray: ${ARR}`);