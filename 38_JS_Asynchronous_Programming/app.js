console.log('Synchronous Programming');
console.log('CAR 1');
console.log('CAR 2');
console.log('CAR 3');
console.log('CAR 4');
console.log('CAR 5');

console.log('-------------');

console.log('Asynchronous Programming');
console.log('CAR 1');
console.log('CAR 2');
setTimeout( () => {
    console.log('CAR 3');
}, 3000);
console.log('CAR 4');
console.log('CAR 5');