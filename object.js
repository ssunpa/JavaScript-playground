// Objects
// one of the JavaScipt's data types.
// a collection of related data and/or fuctionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1.Literals and properties
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const sunpa = { name: 'sunpa', age: 20 };
print(sunpa);

// with JavaScript magic(dynamically typed language)
// can add properties later
sunpa.hasJob = true;
console.log(sunpa.hasJob);

// can delete properties later
delete sunpa.hasJob;
console.log(sunpa.hasJob);

// 2.Computed properties
//key should be always string
console.log(sunpa.name);
console.log(sunpa['name']);
sunpa['hasJob'] = true;
console.log(sunpa.hasJob);

function printValue(obj, key) {
    console.log(obj[key]); //obj.key -> undefined
}
printValue(sunpa, 'name');
printValue(sunpa, 'age');

// 3.Property value shorthand
const person1 = { name: 'bob', age: 4 };
const person2 = { name: 'steve', age: 10 };
const person3 = { name: 'dave', age: 8 };
const person4 = new Person('choi', 20);
console.log(person4);

// 4.Constructor function
function Person(name, age) {
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in sunpa);
console.log('age' in sunpa);
console.log('random' in sunpa);
console.log(sunpa.random);

// 6.for..in vs for..of
// for (key in obj)
console.clear();
for (key in sunpa) {
    console.log(key);
}

//for (value of iterable)
const array = [1, 2, 3, 4];
for (value of array) {
    console.log(value);
}

// 7.Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'sunpa', age: 10 };
const user2 = user;
user2.name = 'sunny';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);
console.clear();

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 있는 애가 앞의 애 값을 덮어씌움
console.log(mixed.color);
console.log(mixed.size);
