//JavaScript has only one type of number. Numbers can be written with or without decimals.
//JavaScript Numbers are Always 64-bit Floating Point
//Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.

let x = 10;
let y = 20;
let z = "The result is: " + x + y;
console.log(z);

let z1 = "30";
let result = x + y + z1;
console.log(result);

let x1 = "100";
let y2 = "10";
let z3 = x / y;
console.log("vdf", z3);

//not a number not a legal number.
let aaaa = 100 / "Apple";
console.log(aaaa);

//Normally JavaScript numbers are primitive values created from literals:
//do not create object number
let y123 = new Number(123);


//BigInt
//JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.

let y1234 = BigInt(1234567890123456789012345)
console.log(y1234);

//The toString() method returns a number as a string.
let tostring1 = 123;
console.log(x.toString());

//toExponential() returns a string, with a number rounded and written using exponential notation.
let ex = 9.656;
ex.toExponential(2);

//toFixed() returns a string, with the number written with a specified number of decimals:
let fix = 9.656;
fix.toFixed(0);

//toPrecision() returns a string, with a number written with a specified length:
let pre = 9.656;
pre.toPrecision();
pre.toPrecision(2);

//valueOf() returns a number as a number.
let value = 123;
value.valueOf();

//parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
//covert string to number
parseInt("-10");