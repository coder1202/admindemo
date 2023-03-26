// Higher order Function - episode 5
// Higher order are function that either accept one or more function as argument or return a function 
// forEach

// filter
// map
// sort
// Reduce
const companies = [
    { name: "google", category: "product Based", start: 1981, end: 2004 },
    { name: "Amazon", category: "Product Based", start: 1992, end: 2008 },
    { name: "paytm", category: "Product Based", start: 1999, end: 2007 },
    { name: "conforge", category: "Service Based", start: 1989, end: 2010 },
    { name: "Mindtree", category: "Product Based", start: 1992, end: 2008 }
];
const ages = [33, 12, 34, 56, 67, 45, 34, 44, 22, 45, 33, 91, 23, 28];

//for
// for (let i = 0; companies.length; i++) {
//     console.log(companies[i]);
// }

//The forEach() method calls a function (a callback function) once for each array element.
//forEach
// companies.forEach(function(company, index) {
//     console.log(index, company.name);
// });

// companies.forEach((company, index) => {
//     console.log(company.name);
// });

//filter
//The filter() method creates a new array with array elements that pass a test.

// for (let i = 0; i <= ages.length; i++) {
//     if (ages[i] >= 20) {
//         console.log(ages[i]);
//     }
// }

// const age = ages.filter(function(ages) {
//     if (ages >= 20) {
//         return true;
//     }
// });
// console.log(age);

// // filter with arrow functiion
// // const finalage=ages.filter(ages=>age>=30);
// const age1 = ages.filter((ages) => {
//     if (ages >= 20) {
//         return true;
//     }
// });

//filter it show only servise based company
// const service = companies.filter((company) => {
//     if (company.category === "product Based") {
//         return true;
//     }
// });
// console.log(service);

//MaP
//The map() method creates a new array by performing a function on each array element.
//The map() method does not execute the function for array elements without values.
//The map() method does not change the original array.

// companies.map(function(company, index) {
//     console.log(company, index);
// });
// companies.map((company, index) => {
//     console.log(index + 1, company)
// });
// const d123 = companies.map((company, index) => {
//     //iterable
//     return `${company.name} ${company.category}`
// });
// console.log(d123);

//sort 
// const soreted = companies.sort(function(c1, c2) {
//     if (c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
//console.log(soreted);
// const soreted2 = companies.sort((c1, c2) => c1.start < c2.start ? 1 : -1);
// console.log(soreted2);
const soreted12 = ages.sort((c1, c2) => c1 - c2);
console.log(soreted12);



//The reduce() method runs a function on each array element to produce (reduce it to) a single value.
//The reduce() method works from left-to-right in the array. See also reduceRight().
//The reduce() method does not reduce the original array.

let total = 0;
for (let i = 0; i < ages.length; i++) {
    total += ages[i];
}
console.log(total);

const sum2 = ages.reduce(function(total, age) {
    return total + age
});
console.log(sum2);