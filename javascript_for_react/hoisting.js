//scope
//Scope determines the accessibility (visibility) of variables.

//Hoisting
//In JavaScript, a variable can be declared after it has been used.
//In other words; a variable can be used before it has been declared.
//Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

//let allow hosting means we redclare but const and let not allowed
//To avoid bugs, always declare all variables at the beginning of every scope.

//A function can be called before declaring it.
//it is undefine
getname();

//this function return value 
abc();
console.log(a);

var a = 5;
//it give error that our getname is not defijne 
const dof = function getname() {
    console.log("Parth kakadiya");
}

function abc() {
    console.log("rfrff");
}