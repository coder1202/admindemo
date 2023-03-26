// Higher order Function - episode 5
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

//forEach
// companies.forEach(function(company, index) {
//     console.log(index, company.name);
// });

// companies.forEach((company, index) => {
//     console.log(company.name);
// });

//filter
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