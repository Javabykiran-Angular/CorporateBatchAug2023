//Type assertion 
// it is required for compiler purpose 
// u  variable must be any/Object/Unknown
var a;
// 1 angle bracket => in ts file 
// 2 as synatx => in View file => .html 
// 1 angle bracket
var temp = a;
// temp.
// 2 as synatx 
var temp1 = a;
// temp1.
// Operators
// arithmathic => +,-,*,/,%
// logical => &&,||,
// bitwise => &,|,^,!,~,<<,>>
// assignment => =,+=,-=,*=,/=,%=
// relation => >,<,>=,<=,!=,== (It checks only value ), === (strongly equality => it checkas value as well as type )
// ternary => condition?expression1:expression2
// unary => ++,--,post/pre ++a,a--
// Control Statement 
// if ,if-else,nested if-else,if-else ladder,switch,break,continue
var cnt = 21;
// if(cnt<4){
//     console.log("Condition is true ")
// }else{
//     console.log("Condition is False ")
// }
var choice = 21;
// switch(choice){
//     case 1: console.log("U r in Case 1");
//             break;
//     case 2: console.log("U r in Case 2");
//     break;
//     default : console.log("U r in default");
//             break;
// }
//loop statement
// while,do-while,for,foreach
var count = 5;
// while(count!=0){
//     console.log("Count is "+count);
//     count--;
// }
// do-while
// do{
//     console.log("Count is "+count);
//     count--;
// }while(count!=0)
// for loop 
// for(var i=0;i<4;i++){
//     console.log("value of i is "+i)
// }
// console.log("Access i is after loop "+i);
// var scope => its global scope 
// let => scope = within nearest a block ({})
for (var i = 0; i < 4; i++) {
    console.log("value of i is " + i);
}
