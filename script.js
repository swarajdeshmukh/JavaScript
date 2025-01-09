// day 1
// document.write("hello world!");
// console.log("This is conslog!");
// alert("Hello this is alert");


// day 2
// addtion of two number:-

// let a = 10, b = 10;
// let c = a + b;

// type1
// console.log(`addtion is ${c}`);
// //type 2
// console.log(`addtion of two number is:- ${a + b}`);

// taking input from user :
// let num1 = parseInt(prompt("Enter num1:-"));
// let num2 = parseInt(prompt("Enter num2:-"));
// let num3 = num1 + num2;
// console.log(`Addtion is ${num3}`);


// WAP to print area of traingle, square and circle

// let area;
// let pi = 3.14, radius = 25, half = 1/2, base = 35, height = 75, side = 76;

// area = (`area of circle is:- ${pi * radius * radius} + area of triangle is:- ${half * base * height } +  area of square:- ${side * side} `);


// console.log(area);

// WAP to calculate simple intrest of given number  (p*r*t/100)

// let principal = 10000, interes = 3, time = 10;
// let total_interest = (`Simple Interest is:- ${principal * interes * time / 100}`);

// console.log(total_interest);

// WAP to print student marksheet
// studentName, rNo, sub1, sub2, sub3, total, precentage;

// let studentName = prompt("Enter name of student:- ");
// let rNo = parseInt(prompt("Enter roll no.:- "));
// let sub1 = parseInt(prompt("Enter sub1 marks:- "));
// let sub2 = parseInt(prompt("Enter sub2 marks:- "));
// let sub3 = parseInt(prompt("Enter sub3 marks:- "));
// let total = (`${sub1 + sub2 + sub3}`);
// let precentage = (`${total / 300 * 100 }`);

// document.write(studentName);
// document.write(rNo);
// document.write(sub1);
// document.write(sub2);
// document.write(sub3);
// document.write(`Total Marks is:- ${total}`);
// document.write(`percentage is:- ${precentage} + % `);


//day 3 
// operators + condition statements:-

// && all condition must be true

// OPR   COND1  COND2  RESULT 
// &&      T       T    T
        // F       T    F
        // T       F    F
        // F       F    F

// ||      T       T    T
        // F       T    T
        // T       F    T
        // F       F    F

//  !   // T            F
        // F            T

// 1. Selection statement - if/ if-else / nested if-else

//WAp to check given number is even or odd

// let num = parseInt(prompt("Enter a number:-"));

// if(num % 2 == 0){
//     alert("number is even");
// }
// else{
//     alert("number is odd");
// }

// WAP to check the char and print corresponding color names

// let ch = prompt("Enter char:-").toLocaleLowerCase();

// if(ch == 'a' || ch == 'A'){
//     console.log("Aqua");

// }
// else if(ch == 'b' || ch =='B'){
//     console.log("Black")
// }
// else if(ch == 'c' || ch =='C'){
//     console.log("Copper")
// }
// else if(ch == 'd' || ch =='D'){
//     console.log("Denim")
// }
// else if(ch == 'e' || ch =='E'){
//     console.log("Emerald green")
// }
// else if(ch == 'f' || ch =='F'){
//     console.log("Fuchsia")
// }
// else if(ch == 'g' || ch =='G'){
//     console.log("Green")
// }
// else if(ch == 'h' || ch =='H'){
//     console.log("--")
// }
// else if(ch == 'i' || ch =='I'){
//     console.log("Indigo")
// }
// else if(ch == 'j' || ch =='J'){
//     console.log("Jade")
// }
// else if(ch == 'k'  || ch =='k' ){
//     console.log("Khaki")
// }
// else if(ch == 'l' || ch =='L'){
//     console.log("Lemon")
// }
// else if(ch == 'm' || ch =='M'){
//     console.log("Magenta")
// }
// else if(ch == 'n' || ch =='N'){
//     console.log("Navy blue")
// }
// else if(ch == 'o' || ch =='O'){
//     console.log("Olive")
// }
// else if(ch == 'p' || ch =='P'){
//     console.log("Pink")
// }
// else if(ch == 'q' || ch =='Q'){
//     console.log("Quartz grey")
// }
// else if(ch == 'r' || ch =='R'){
//     console.log("Red")
// }
// else if(ch == 's' || ch =='S'){
//     console.log("Scarlet")
// }
// else if(ch == 't'  || ch == 'T'){
//     console.log("Tan")
// }
// else if(ch == 'u' || ch == 'U'){
//     console.log("--")
// }
// else if(ch == 'v' || ch == 'V'){
//     console.log("Violet")
// }
// else if(ch == 'w' || ch == 'W'){
//     console.log("White")
// }
// else if(ch == 'x' || ch == 'X'){
//     console.log("--")
// }
// else if(ch == 'y' || ch == 'Y'){
//     console.log("Yellow")
// }
// else if(ch == 'z' || ch == 'Z'){
//     console.log("--")
// }
// else{
//     console.log("wrong charactor...");
// }


// WAP to print greatest of 3 numbers

// let num1 = parseInt(prompt("Enter num1:- "));

// let num2 = parseInt(prompt("Enter num2:- "));

// let num3 = parseInt(prompt("Enter num3:- "));

// if(num1 > num2 && num1 > num3){
//     console.log("Num1 is greater!");
// }
// else if(num2 > num1 && num2 > num3){
//     console.log("Num2 greater!");
// }
// else{
//     console.log("Num3 greater!");
// }


// WAP enter 2 numbers and 1 operator from user and print correspoinding 

// let num1 = parseInt(prompt("Enter num1:- "));

// let num2 = parseInt(prompt("Enter num2:- "));

// let opr = prompt("Enter operator:- ");

// let result;

// if(opr == '+'){

//     //error in calculator:-
//     if(num1 === 56 && num2 === 9){
//         console.log(77);

//     }
//     else{
//         result = num1+num2;
//     }
// //    console.log(result);
// }
// else if(opr == '-'){
//     result = num1 - num2;
//     // console.log(result);
// }
// else if(opr == '*'){

//     //error in calculator:-
//     if(num1 === 45 && num2 === 3){
//         console.log(555);

//     }
//     else{
//         result = num1*num2;
//     }
    
//     // console.log(result);
// }
// else if(opr == '/'){

//     //error in calculator:-
//     if(num1 === 56 && num2 === 6){
//         console.log(4);

//     }
//     else{
//         result = num1/num2;
//     }
    
//     // console.log(result);
// }
// else{
//     alert("Enter valid opr!");
// }

// console.log(result);


// Type of Function
// 1. No argument no return
// pallindrome means  the srting givin  is 121 after revers if it is equal to = 121 is pallindrome

// function pallindrome(){
//   let num = parseInt(prompt("Enter number"));
//   let result = 0;
//   let rem;
//   let temp = num;

//   while(num != 0){
//     rem = parseInt( num % 10);
//     result = parseInt(result * 10 + rem);
//     num = parseInt(num / 10);
//   }
//   console.log(result);

//   if(temp == result){
//     console.log("pallindrome.");
//   }
//   else{
//     console.log("not pallindrom");
//   }

// }
// pallindrome();

// 2. With argument  but no return

// function pallindrom(num){

//   let result = 0;
//   let rem;
//   let temp = num;

//   while(num != 0){
//     rem = parseInt( num % 10); 
//     result = parseInt(result*10+rem);
//     num = parseInt(num/10);
//   }
//   console.log(result);

//   if(temp == result){
//     console.log("yes");
//   }else{
//     console.log("no");
//   }

// }

// let num = parseInt(prompt("Enter a number"));
// pallindrom(num);

// 3. With argument and return

function pallindrome(num){

  let result = 0;
  let rem;
  let temp = num;

  while(num != 0){
    rem = parseInt(num % 10);
    result = parseInt(result * 10 + rem);
    num = parseInt(num/10);
  }
  if(temp == result){
    return true;
  }else{
    return false;
  }
}

let num = parseInt(prompt("Enter a number"));
let ispal = pallindrome(num); 
if(ispal == true){
  console.log("yes");
}
else{
  console.log("no");
}

