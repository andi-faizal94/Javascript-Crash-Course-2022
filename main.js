// log a statement using console.log()
console.log('hello from main.js');

// Variable

let age = 25;
// console.log(age);

const salary = 800000;
// console.log(salary);

// different const and let
// const cannot initialize
// let can initialize

// const salaries;
// in console get error : SyntaxError: Missing initializer in const declaration
const b = 0;
// b = 1;
// in console get error : TypeError: Assignment to constant variable.
// console.log(b);

let c = 1;
c = 2;
console.log(c);
// in console get value is c = 2, because reinitialize in let c
