// log a statement using console.log()
console.log('hello from main.js');

// Variable

let ages = 25;
// console.log(ages);

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

// Datatype string

// single quotes
const name = 'Vishwas';
// const languange = "Javascript";
// mean or read  is double quotes
// replace eslint double qoutes to single qoute
const languange = 'Javascript';
// backtick
const channel = `Code evolution`;

// Datatype number

const total = 0;
const pi = 3.14;

// Datatype Boolean

const isPrimaryNumber = true;
const isNewUser = false;

let num;
//in console is undefined
const res = undefined;
// initialize value undefined
const data = null;
// initialize value null

console.log(res, data);

// Datatype object
const person = {
  firstName: 'Bruce',
  lastName: 'Wayne',
  age: 30,
};

// how to akses value in object
person.firstName;
person.lastName;
person.age;

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
// or you can use destucturing object
const { firstName, lastName, age } = person;
console.log(firstName, lastName, age);

// Datatype array
const oddNumber = [1, 3, 5, 7, 9];
// how to access value
console.log(oddNumber[0]);
console.log(oddNumber[1]);
console.log(oddNumber[2]);
console.log(oddNumber[3]);

// assignment operator
let x = 10;
let y = 10;

// arithmetic operator
let z = x + y;
console.log(z);
console.log(x + y);
console.log(x - y);
console.log(x++);
console.log(++x);

// comparison operator

// comparison only value in variable
const comparisonValue = x == y;
console.log(comparisonValue);

console.log(x != y);
console.log(x < y);
console.log(x > y);

// compariso value and datatype in variable
const comparisonValueAndDataType = x === y;
console.log(comparisonValueAndDataType);

console.log(x !== y);
console.log(x <= y);
console.log(x >= y);

// logical operator

// logical AND (&&)
const validNumber = x > y && x < y;

// logical OR (||)
const isvalidNumbers = x > y || x < y;

// logical NOT (!)
const isValid = true;
console.log(!isValid);

// string operator
const strings = "It's my name" + ' ' + 'Andi';
console.log(strings);
//  or can use template literal to add string
const nickName = 'Andi';
const fullName = 'Andi faizal';
const full = `${nickName} ${fullName}`;
console.log(full);

// Conditional

// ternary operator
const isEven = 10 % 2 === 0 ? true : false;
console.log(isEven);

// type conversion

console.log(1 + '1');
// expected 11
console.log(true + 1);
// expected 2
console.log(true - 1);
// expected 0
console.log(false + false);
// expected 0
console.log(true + false);
// expected 1
console.log(true + true);
// expected 2
console.log('4' + '2');
// expected 42
console.log('4' - '2');
// expected 2
console.log(true + '2');
// expected true2
console.log(5 - null);
// expected true2
console.log(5 - undefined);
// expected NaN
console.log('5' - null);
// expected 5

// Convert
// Different Use Number and parseInt

console.log(Number('5'));
// expected 5

console.log(parseInt('5'));
// expected 5

console.log(Number(false));
// expected 0

console.log(parseInt(false));
// expected NaN

console.log(Number(''));
// expected 0

console.log(parseInt(''));
// expected NaN

// Equality

const var1 = 'test';
const var2 = 'test';

console.log(var1 == var2);
console.log(var1 === var2);

const varia1 = 10;
const varia2 = '10';

console.log(varia1 == varia2);
console.log(varia1 === varia2);

// Conditional Statements

const number = 0;

//if

if (number > 0) {
  console.log('number is positif');
}

// if else
if (number > 0) {
  console.log('number is positif');
} else {
  console.log('negatif');
}

// else if

if (number > 0) {
  console.log('number is positif');
} else if (number < 0) {
  console.log('number is negatif');
} else {
  console.log('number is zero');
}

// switch
const color = 'blue';

switch (color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  case 'green':
    console.log('color is green');
    break;
  default:
    console.log('not a valid color');
}

// For loop

for (let a = 1; a <= 5; a++) {
  console.log(`iteraration number ${a}`);
}

// While Loop
let i = 1;
while (i <= 5) {
  console.log(`iteration number ${i}`);
  i++;
}

// Do .. while loop

let j = 1;
do {
  console.log(`iteraration number ${j}`);
  j++;
} while (j <= 5);

// For of loop

const arrayNumber = [1, 2, 3, 4, 5];

for (const a of arrayNumber) {
  console.log(`iteration number ${a}`);
}

// Function

// function greet() {
//   console.log('Good morning ');
// }

function greet(username) {
  return console.log(`Good morning ${username}`);
}

// invoke
greet('andi');
greet('dyana');
greet('chanana');

//  Function Declaration
// example hoisting
// you can invoke function add in here
add(3, 4);

const sum = add(1, 3);
console.log(sum);

// Function Expression
// example
// you will message error
// ReferenceError: Cannot access 'sumExpression' before initialization

// const numberSum = sumExpression(2, 4);
// console.log(numberSum);

// Arrow Function
// example
// You can't use the function before you declared it:
// you will message error
// ReferenceError: Cannot access 'arrowFunction' before initialization

// const arrow = arrowFunction(1, 4);
// console.log(arrow);

// function declaration is hoisting.
// Function declarations in JavaScript are hoisted to the top of the enclosing function or global scope. You can use the function before you declared it:

function add(a, b) {
  return a + b;
}

// function expression not hoisted;
// You can't use the function before you declared it:

const sumExpression = function (a, b) {
  return a + b;
};

// arrow function
// Is not hoisting

const arrowFunction = (a, b) => {
  return a + b;
};

// const sum = add(1, 3);
// console.log(sum);

// Block Scope

if (true) {
  const myNames = 'Vishas';
}
// expected error
// myNames is not defined
// because the variable in block scope
// console.log(myNames);

// Function Scope
function testFn() {
  const MyName = 'Hundai';
  console.log(MyName);
}

testFn();

// Global Scope
// Global Scope can use access in function scope and block scope

const numberOfGlobal = 10;
const Superman = 'Superman';

if (true) {
  console.log(numberOfGlobal);
  console.log(Superman);
}

function fnGlobal() {
  console.log(numberOfGlobal);
  console.log(Superman);
}

fnGlobal();
