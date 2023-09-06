//array
// array is dynamically growable & shrinkable 
// array can store homogenous as well as hetrogenous data type 
let a:number[]=[10,20,30];
let a1:number[]=[];
let a2=[2.5,4.5,6];
let a3=["Raokhande",40,'Sumit',true];
let a4:any[]=[5,"Sumit",5.6,true];

// for(let i=0;i<a.length;i++){
//     console.log("value of a is "+a[i]+" index is "+i)
// }

// console.log(a);
// console.log(a.join("#"));
// console.log(a.join(" "));
// console.log(a.join());


// a.forEach((kuchBhi,i,arr)=>{
//     console.log("Data is "+kuchBhi+" index is "+i+" array is "+arr);
// });

//Rest Parameter function & Spread Operator

function display(str:string,...item:number[]){
    console.log(item);    
    console.log("Name is "+str)
}

// display(10,20,30);
// display();
// display("Sumit",50,100,200);


//push & pop
// LIFO => Last in first Out 
let b:number[]=[];

// b.push(40);
// console.log(b);
// b.push(50,100);
// console.log(b);
// let res=b.pop();
// console.log(b)
// console.log("Poped value is "+res)

//Splice 
// let c:number[]=[10,45,89,90];
// console.log(c);
// c.splice(2,0,100)
// console.log(c);
// c.splice(1,0,200,300,500);
// console.log(c);
// c.splice(3,1);
// console.log(c);
// c.splice(2,2)
// console.log(c);
// c.splice(4,1,600);
// console.log(c);
// c.splice(2,1,700,800);
// console.log(c);

//Map method
// it performs element by element operation

let d:number[]=[2,3,4,5,6];

let sqrarr=d.map((value)=>{
    return (value*value)
});
// console.log("Original array "+d);
// console.log("Squared Array "+sqrarr);

//slice method 
// it copy the a section of data from an array 

let strcourse:string[]=["Core java",'Advnaced Java','Spring boot','Angular 12','Docker','Jenkings','AWS'];

let copiedDarray=strcourse.slice(1,5);
console.log(strcourse);
console.log(copiedDarray);











