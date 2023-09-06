//optional parameter function
function add1(a, b) {
    console.log("Value of a " + a); //10
    console.log("Value of b " + b); //undefined
    console.log("Addition of a+b " + (a + b)); //NAN=> Not a number 
}
// add1(10);
function add2(a, b) {
    console.log("Value of a " + a); //10
    console.log("Value of b " + b); //undefined
    console.log("Addition of a+b " + (a + b)); //NAN=> Not a number 
}
// add2();
// add2(20,2);
//default parameter function
function add3(a, b) {
    if (b === void 0) { b = 10; }
    console.log("Value of a " + a); //20
    console.log("Value of b " + b); //40
    console.log("Addition of a+b " + (a + b)); //30=> Not a number 
}
// add3(20)
// add3(20,40);
function add4(a, b) {
    if (a === void 0) { a = 50; }
    console.log("Value of a " + a); //20
    console.log("Value of b " + b); //40
    console.log("Addition of a+b " + (a + b)); //30=> Not a number 
}
// add4(45,10);
function add5(a, b) {
    if (a === void 0) { a = 50; }
    console.log("Value of a " + a); //50
    console.log("Value of b " + b); //undefined
    console.log("Addition of a+b " + (a + b)); //NAN=> Not a number 
}
// add5();
add5(10);
