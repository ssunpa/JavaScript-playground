// 1.String concatenation
console.log('my' + 'cat');
console.log('1' + 4);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2.Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

// 3.Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4.Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5.Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal

// 6.Logical operators: ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;

// ||(or), finds the first falsy value
console.log(`or: ${value1 || value2 || check()}`); //시간이 많이 걸리는 연산일수록 뒤로

// &&(and), fides the first falsy value
console.log(`or: ${value1 && value2 && check()}`); //시간이 많이 걸리는 연산일수록 뒤로

// often used to compress long if-statement
// nullableObject && nullableObject.something
/*
if (nullableObject != null) {
    nullableObject.somthing;
}
*/

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😥');
    }
    return true;
}

// !(not)
console.log(!value1);

// 7.Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const sunpa1 = { name: 'sunpa' };
const sunpa2 = { name: 'sunpa' };
const sunpa3 = sunpa1;
console.log(sunpa1 == sunpa2);
console.log(sunpa1 === sunpa2);
console.log(sunpa1 === sunpa3);

//equality - puzzler
console.log(0 == false); //t
console.log(0 === false); //f
console.log('' == false); //t
console.log('' === false); //f
console.log(null == undefined); //t
console.log(null === undefined); //f

// 8.Conditional operators: if
// if, else if, else
const myName = 'sunpa';
if (myName === 'sunpa') {
    console.log('Hi, sunpa!');
} else if (myName === 'sunny') {
    console.log('Hi sunny');
} else {
    console.log('who are you');
}

// 9.Ternary operator: ?
// condition ? true : false;
console.log(myName === 'sunpa' ? 'yeah!' : 'noo😫');

// 10.Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const AAPL = 'ipad';
switch (AAPL) {
    case 'iphone':
    case 'ipad':
        console.log('i got it😎');
        break;
    case 'imac':
    case 'imacbook':
        console.log('i want it🤑');
        break;
    default:
        console.log('what is it🤔')
}

// 11.Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is excuted first,
// then check the dondition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i--) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let num = 0; num <= 10; num++) {
    if (num % 2 == 1) {
        continue;
    }
    console.log(`num: ${num}`);
}
// Q2. iterate form 0 to 10 and print numbers untile reaching 8 (use break)
for (let num = 0; num <= 10; num++) {
    if (num > 8) {
        break;
    }
    console.log(`num: ${num}`);
}