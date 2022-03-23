// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const cat = {
    name: 'samsaeg',
    color: ['black', 'white', 'brown'],
    size: null,
    birthDate: new Date(),
    isCharming: true,
    jump: function () {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(cat);
console.log(json);

json = JSON.stringify(cat, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(cat, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'hasam' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(cat);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
cat.jump();
// obj.jump(); // Error!

console.log(cat.birthDate.getDate());
console.log(obj.birthDate.getDate());
