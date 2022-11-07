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

function names() {
  callback('andi');
}

names(() => console.log('halo'));
