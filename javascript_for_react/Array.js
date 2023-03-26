//Array -- collection of item that we control with index
//Array are variable which can hold more than one value.
//array are mutable
//array can be changed
//string value not change in string


let a = [1, 3, 5, 7];
console.log(a);

console.log(a[1]);
console.log("the length of the array is ", a.length);

//change the value of array element  or also add value if before value is undefine like 
a[1] = 5;
console.log(a);

const cars1 = new Array("Saab", "Volvo", "BMW");
const cars = ["Saab", "Volvo", "BMW"];
const fruits = ["Banana", "Orange", "Apple"];

console.log(cars[0]);

//cars.length // Returns the number of elements
//cars.sort() // Sorts the array
console.log(cars.sort);
console.log(cars.length);

//array last eleemnt
let fruit = fruits[fruits.length - 1];
console.log(fruit);
fruits.push("Lemon"); // Adds a new element (Lemon) to fruits
console.log(fruits);

console.log(Array.isArray(fruits));

//In JavaScript, arrays use numbered indexes.  
//In JavaScript, objects use named indexes.
//Arrays are a special kind of objects, with numbered indexes.

//The pop() method removes the last element from an array:
let app = ["entertain", "efff", "gggg", "fdfs"];
console.log(app.pop([3]));
console.log(app);

//The push() method adds a new element to an array (at the end):
console.log(app.push("parth"));
console.log(app);

//The shift() method removes the first array element and "shifts" all other elements to a lower index.
console.log(app.shift());
console.log(app);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
console.log(app.unshift("paadd"));
console.log(app);

//The concat() method creates a new array by merging (concatenating) existing arrays:
//The concat() method does not change the existing arrays. It always returns a new array.
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

//The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [
    [1, 2],
    [3, 4],
    [5, 6]
];
const newArr = myArr.flat();
console.log(newArr);

//The splice() method adds new items to an array.
//The slice() method slices out a piece of an array.
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(2, 0, "Lemon", "Kiwi");

//With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
//0 indicate how many element add || 1 define how many elemenmt remove
fruits2.splice(0, 1);

//The slice() method slices out a piece of an array into a new array.
const citrus = fruits2.slice(1);

//The sort() method sorts an array alphabetically:
fruits2.sort();

//The reverse() method reverses the elements in an array.
fruits2.reverse();

//Min 
const points = [40, 100, 1, 5, 25, 10];
//points.sort(function(a, b){return a - b});
let point = points.sort(function(a, b) {
    return a - b
});
console.log(point[0]);