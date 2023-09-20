/**
 * We want to be able to "write text"
 * (And a bit of coercion, casting/conversion, search)
 */

/**
 * single quotes: ''
 * double quotes: ""
 * backticks: ``
 */

let teachingStaff = "Florian, Daniel, I'll break";
let programmingHaiku = `I do Programming,
Programing is what I do
The sun is shining
`;
// `
// <div>
//   <span>${teachingStaff}</span>
// </div>
// `

//  Concatenation

let firstName = 'Rudy';
console.log('Hello ' + firstName + '!');
console.log(`Hello ${firstName}!`);

// Advantages of backticks

//  Template literal

// Multi-line

// index in Strings
console.log(firstName[firstName.length - 1]);
console.log(firstName.at(-1));
console.log(firstName.includes('ude'));

/**
 * Some available methods
 * length, upper / lower case, includes, replace, replaceAll ...
 */
console.log(programmingHaiku.length);
console.log(programmingHaiku.toUpperCase());
console.log(programmingHaiku.toLowerCase().includes('pro'));
console.log(programmingHaiku.replaceAll('a', '*'));
console.log('RegExp attempt: ', programmingHaiku.match(/pro/i));
console.log('a' < 'A');
//           97   65

// Immutability
const myName = 'elena';

const capitalizeName = myName[0].toUpperCase() + myName.slice(1);

console.log(capitalizeName);

// Comparing strings

console.log('abc' < 'CDE');

console.log('String comparisons: ', '2' === 2);

const firstWord = 'réservé';
const secondWord = 'reserve';

console.log(
  firstWord.localeCompare(secondWord, undefined, { sensitivity: 'base' })
);
// function sum(a:number, b:number) {
// 	return a + b
// }

// sum(3, 5)
