// User defined function
// 1 function without parameter & without return type 
// 2 function with parameter & without return type 
// 3 function without parameter & with return type
// 4 function with parameter & with return type  
// 1 function without parameter & without return type
function add1() {
    console.log("U r in First type function");
}
// add1();
// 2 function with parameter & without return type 
function add2(a, b) {
    console.log("aDDITION IS " + (a + b));
}
// add2(10,2);
// 3 function without parameter & with return type
function add3() {
    return (8 + 8);
}
var res = add3();
// console.log("Result is "+res);
// 4 function with parameter & with return type  
function add4(a, b) {
    return (a + b);
}
// console.log(`
//     Addition is ${add4(10,4)}
// `);
//Anonymous Function
// function does not have any name 
// it execute logic there itself 
var temp1 = function () {
    console.log("Anonymous Function is called ");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
var res1 = temp2(10, 5);
// console.log("Result is "+res1);
//Fat arrow function/ Arrow function 
var temp3 = function () {
    console.log("Fat arrow is used");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
var res3 = temp4(10, 20);
console.log("value of res3 is " + res3);
