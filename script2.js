// document.write("Assignment 1")

// WAP to check gven number is perfect or Not

// function perfectNumber(num){

//     let sum = 0;
//     for(let i = 1; i < num; i++){

//         if(num % i === 0 ){
//            (sum = sum + i);
//         }
//     }
//     if(sum == num){
//         console.log(`${sum} is perfect no.`);
//     }
//     else{
//         console.log(`${sum} is not perfect no.`);
//     }
// }
// // let num = 28;
// perfectNumber(6);

// second way
// let isPerfectNumber = function(num){
//     sum = 0;
//     for(let i = 1; i<num; i++){

//         if(num % i === 0){
//            sum += i;
//         }
//     }

//      let result = sum === num ? "perfect no." : "not perfect"
//      console.log(result);

// }

// isPerfectNumber(6);

// WAR to print fibonacci series upto given number

//7. WAP to print reverse of given number

// function reverseNumber(num){
//     // let num = 123
//     let res;
//     let result =0;

//     while(num != 0){
//         res = parseInt(num % 10);
//         result = parseInt(result * 10 + res);

//         num = parseInt(num / 10);
//     }

//     console.log(result)

// }
// reverseNumber(123);

// 8. WAP to print addtion of digits of given number for export. 123 = 1+2+3 = 6

// let num = 100;
// let temp;
// let sum = 0 ;

// let numString = num.toString().length;

// for(let i = 1; i <= numString; i++){
//    temp = num % 10;
//    sum = sum + temp;
//    num = parseInt (num / 10);
// }
// console.log(`The sum of given number is:- ${sum}`);

// type 2

// function sumOfGivenNumber(num){
//     let sum = 0;
//     let temp;
//     let numString = num.toString().length;

//     for(let i = 1; i <= numString; i++){
//         temp = num % 10;
//         sum = sum + temp;
//         num = parseInt(num/10);
//     }
//     console.log(`The sum of given number is:- ${sum}`);
// }
// sumOfGivenNumber(100)

// 4. WAP to check number is amstrong or not

// let num = 120;
// sum = 0;
// let rem;
// // to get the length of number
// let numString = num.toString().length;
// for(let i = 1; i<=numString; i++){
//     // take reminder
//     rem = num % 10;
//     // cube of that reminder
//     let temp = rem * rem * rem;
//     //removing that number from given number
//     num = parseInt(num / 10);
//     // adding all valuse of cube
//     sum += temp;
//     // console.log(sum);
// }

// if(num === sum){
//     console.log(`${sum} :- is an amstrong number`)
// }
// else{
//     console.log(`${sum}:-  is not an amstrong number`)
// }

//WAP to check given number is prime of not

    let num = 7;

    let isPrime = true;

     if(num === 1){
        console.log("1 is neither prime nor composite number.");
     }
     else if(num >1){
        for(let i =2; i <=num/2; i++){
            if(num % i == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            console.log("is prime");
        }else{
            console.log("not prime");
        }
       
    }
    else{
        console.log("there is no prime no.");
    }



// function isPrime(n) {
//   // Corner case
//   if (n <= 1) return false;

//   // Check from 2 to n-1
//   for (let i = 2; i < n; i++) if (n % i == 0) return false;

//   return true;
// }

// // Driver Code

// isPrime(2) ? console.log("true") : console.log("false");
