// synchronous means:- 
// Synchronous means the code runs in a particular sequence of instruction given in the program.
// Each instruction waits for the precvious instruction to complete its execution.

// 1----------
// 2----------
// 3----------
// 4----------
// 5----------


// example:-  
// console.log("one");
// console.log("two");
// console.log("three");



// Asynchronous means:- 
// Due to synchronous prgramming, sometimes imp instruction get blocked due to previous insteuction, which causes a delay in the UI.
// Asynchronous code execution allows to exectue next instruction immeditely and doesn't block the flow.

// example:- 

// statement one will execute
// console.log("one");
// statement two will execute
// console.log("two");

// asynchronous code is running here.
//And then this setTimeout will run.
// setTimeout(()=>{
    // console.log("hello")
// }, 4000);

// statement three will execute
// console.log("three");
// statement foure will execute
// console.log("foure");


// function sum (a,b){
//     console.log(a+b);
// }

// function calculator (a, b, sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2, sum);

const hello = () =>{
    console.log("hello");
};

setTimeout(hello, 3000)
