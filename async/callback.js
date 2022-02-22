'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('sync hey'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async hey'), 2000);

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'sun' && password === 'sunny') ||
                (id === 'pa' && password === 'papaya')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'sun') {
                onSuccess({ name: 'sun', role: 'admin' });
            } else if (user === 'pa') {
                onSuccess({ name: 'pa', role: 'user' });
            } else {
                onError(new Error('no access'));
            }
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter yout password');
userStorage.loginUser(
    id,
    password,
    (user) => {
        userStorage.getRoles(
            user,
            (userWithRole) => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            (error) => {
                console.log(error);
            }
        );
    },
    (error) => {
        console.log(error);
    }
);
