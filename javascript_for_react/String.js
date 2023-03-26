//String are used to store and manipiulate text string can be created using the following  syntax
//The length property returns the length of a string
let name1 = "parth kakadiya";
console.log(name1.length);

//Template literals
//Template literals (template strings) allow you to use strings or embedded expressions in the form of a string. They are enclosed in backticks ``. For example,
let boy1 = "parth";
let boy2 = "bikgg";
console.log(`${boy2} is a friend of ${boy1}`);

//Escape sequence character
let fruit = 'bana\'na';
let name3 = "parth";
console.log(fruit);
//upercase
console.log(name3.toUpperCase());
//lowercase
console.log(name3.toLowerCase());
//Slice means it cut kre 2 thi 3 sudhi   4 ny le
console.log(name3.slice(2, 4));

//replace
//The replace() method returns a new string.
//The replace() method replaces only the first match
//ReplaceAll() replace all
console.log(name3.replace("parth", "gamini"));

//concat
//The concat() method can be used instead of the plus operator. These two lines do the same:
let friend = "naman";
console.log(name3.concat("is a friend of ", friend));

//trim remove extra space
//trimstart and trimend
let friend2 = "                rfrf                "
console.log(friend2.trim());

//if we want first character of string 
let fro = "partg" + "partgfd";
console.log(fro[0]);

for (let i = 0; i < fro.length; i++) {
    console.log(fro[i]);
}

//cheak if particular word in the string or <noscript>
const seq = "Hello my name is parth kakadiya";
const cheack = "Hello";
console.log(seq.includes(cheack));

//pro4
//slice() extracts a part of a string and returns the extracted part in a new string.
//The method takes 2 parameters: start position, and end position (end not included).
let str2 = "please give Rs 1000"
let amount = Number.parseInt(str2.slice("Plesse give Rs".length));
console.log(amount);
console.log(str2.slice(14));

//we dont change the value of exising stirng

//it return the index of 
let text = "Please locate where 'locate' occurs!";
console.log(text.search("locate"));

let text1 = "Please locate where 'locate' occurs!";
console.log(text.indexOf("locate"));

//The padStart() padEnd() method pads a string from the start.
let text3 = "5";
let padded = text.padStart(4, "0");

//string1 is not greater than string2, because h comes before w, so it is less than.
const string1 = "hello"
const string2 = "world"
console.log(string1 > string2)
    //console.log(string1 === string2)
    //const compareValue1 = string1.localeCompare(string2)

//If no character is found, [ ] returns undefined, while charAt() returns an empty string.

//text.split(",")    // Split on commas
//A string can be converted to an array with the split() method:

// String Search Methods
// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
//cheack if string startwith and endwith hello 
// String startsWith()
// String endsWith()