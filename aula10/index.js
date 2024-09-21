/**
 * Arithmetic
 * + Addition / Concatenation
 * - / * **
 * % Rest of the division
 * ++ Increment
 * -- Decrement
 */

let num1 = 2;
const num2 = 10;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);

console.log(num1++);
console.log(++num1);
console.log(num1--);
console.log(--num1);

num1 += 50;
console.log(num1);

// JS can do math with numbers in strings!
const numA = 10;
const numB = Number('4.24');
console.log(numA * numB)
console.log(typeof numB);
