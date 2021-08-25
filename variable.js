// 1.Use strict
// added in ES5
// use this for Valina Javascript
'use strict';

// 2.Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global sunpa'
{
    let name = 'sunpa';
    console.log(name);
    name = 'hey';
    console.log(name);
    console.log(globalName);
}
//console.log(name); //error
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);

// 3.Constant, r(read only)
// use const whenever possible.
// only use le if variable needs to change.
const daysInweek = 7;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data type: all objects by default are mutable in JS
// favor immutable data type always for few reaseons:
// -security
// -thread safety
// -reduce human mistakes

// 4.Variable type
// primitive, single item: number, string, boolean, null, undifined, symbol
// object, box container
// function, first-class function

const count = 10; // integer
const size = 10.2; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number';
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'p';
const sunpa = 'sunpa';
const sayHi = 'hi' + sunpa;
console.log(`value: ${sayHi}, type: ${typeof sayHi}`);
const hello = `hello ${sunpa}!`; // template literals (string)
console.log(`value: ${hello}, type: ${typeof hello}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symble, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);

// object, real-life object, data structure
const sunpaa = { name: 'sunpa', age: 20 };
sunpaa.age = 21;

// 5.Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '5' + 3;
console.log(`value: ${text}, type: ${typeof text}`);
text = '10' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // error