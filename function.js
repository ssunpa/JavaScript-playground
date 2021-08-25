// Function
// - funndamental uilding block in thr program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// fuction is object in JS
function printHello() {
    console.log('hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('hey <3');
log(1324);

// 2.Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'sunnny';
}
const sunpa = { name: 'sunpa' };
changeName(sunpa);
console.log(sunpa);

// 3.Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4.Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('choi', 'sun', 'pa');

// 5.Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
}
printMessage();

// 6.Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

// 7.Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}

//good
function upgradeUser(user) {
    if (user.poing <= 10) {
        return;
    }
    //long upgrade logic...
}

// First-class function
// functions are treated like other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1.Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
    //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 4));

// 2.Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'luv u') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yess');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('noo');
};
randomQuiz('hate u', printYes, printNo);
randomQuiz('luv u', printYes, printNo);

// Arrow function
// always anonymous
/*
const simplePrint = function () {
    console.log('simplePrint!');
};
*/

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    //do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();

// Quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
    let result;
    switch (command) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '/':
            result = a / b;
            break;
        case '*':
            result = a * b;
            break;
        case '%':
            result = a % b;
            break;
        default:
            result = '🤔';
    }
    return result;
}

console.log(calculate('d', 3, 4));
