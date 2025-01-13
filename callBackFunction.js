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

// const hello = () =>{
//     console.log("hello");
// };

// setTimeout(hello, 3000);

// Lexical scoping:-
// function inside function has access of all variables of there parent function

// function outer() {
//   // local variable
//   let userName = "swaraj";

  // Note that innrt function must not contain any local variable
//   function inner() {
//     console.log("inner", userName);
//   }

//   //function calling
//   inner();
// }

// outer function does not hava any access to outer variables

// Uncaught ReferenceError: userName is not defined " ERROR"
// console.log(outer());
// console.log("Too outer", userName);


// closuer
// If we are trying to return some thing from function inside function then it will not only return function defenition it will return full function becaure inner function and parent function is sharing memory.

// function makeFunc(){
//     const name = "swaraj";

//     function displayName(){
//          console.log(name);
//     }
//     return displayName;
// }

// const myFunction = makeFunc();
// myFunction();

// senario of closuer:


// this is normal way to get things done but suppose you have 500 buttons so you have to rewrite this 500 time to avoid this we can use closuer concept.

// document.getElementById("orange").onclick = function () {
//     document.body.style.backgroundColor = `orange`;
// }

// document.getElementById("red").onclick = function(){
//     document.body.style.backgroundColor = `red`;
// }

function onClickHandler(color){

    return function (){
        document.body.style.backgroundColor = `${color}`;
    }
    
}

document.getElementById("orange").onclick = onClickHandler ("orange");

document.getElementById("red").onclick = onClickHandler("red");