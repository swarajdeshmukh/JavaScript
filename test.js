// function AtmMachine() {
//   let accountBalance = 0;
//   while (true) {
//     let operation = prompt(
//       "Enter 1 for Deposit, 2 for Withdrawal, or 3 to Exit:"
//     );

//     if (operation === "1") {
//       let depositAmount = parseFloat(prompt("Enter the deposit amount:"));
//       if (depositAmount > 0) {
//         accountBalance += depositAmount;
//         alert(`Deposit successful! Your new balance is: ${accountBalance}`);
//       } else {
//         alert("Invalid deposit amount! Please enter a positive number.");
//       }
//     } else if (operation === "2") {
//       let withdrawalAmount = parseFloat(prompt("Enter the withdrawal amount:"));
//       if (withdrawalAmount > 0) {
//         if (withdrawalAmount <= accountBalance) {
//           accountBalance -= withdrawalAmount;
//           alert(
//             `Withdrawal successful! Your remaining balance is: ${accountBalance}`
//           );
//         } else {
//           alert("Insufficient balance! Please enter a smaller amount.");
//         }
//       } else {
//         alert("Invalid withdrawal amount! Please enter a positive number.");
//       }
//     } else if (operation === "3") {
//       alert("Thank you for using the ATM. Goodbye!");
//       break;
//     } else {
//       alert("Invalid option! Please enter 1, 2, or 3.");
//     }
//   }
// }
// AtmMachine();

// Largest of five numbers

// function largestOfFiveNum(){
//     let num1 = prompt("Enter num1:- ");
//     let num2 = prompt("Enter num2:- ");
//     let num3 = prompt("Enter num3:- ");
//     let num4 = prompt("Enter num4:- ");
//     let num5 = prompt("Enter num5:- ");

//     if(num1 > num2 && num1 > num3 && num1 > num4 && num1 >num5){
//         console.log("num1 is greater")
//     }
//     else if(num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
//         console.log("num2 is greater")
//     }
//     else if(num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
//         console.log("num3 is greater")
//     }
//     else if(num4 > num1 && num4 > num2 && num4> num3 && num4 > num5){
//         console.log("num4 is greater")
//     }
//     else{
//         console.log("num5 is greater")
//     }
// }
// largestOfFiveNum();

// WAP that assign grades based on marks:

// function calculateGrade(marks) {
//   if (marks >= "90") {
//     console.log(`${marks} - Grade is "A"`);
//   } else if (marks >= 75) {
//     console.log(`${marks} - Grade is "B"`);
//   } else if (marks >= 75) {
//     console.log(`${marks} - Grade is "B"`);
//   } else if (marks >= 50) {
//     console.log(`${marks} - Grade is "C"`);
//   } else {
//     console.log(`${marks} - Grade is "F"`);
//   }
// }

// while (true) {
//   let option = prompt("Enter Option 1 for Continue, 2 for Exit:");

//   if (option === "1") {
//     let marks = prompt("Enter Marks:- ");
//     marks = parseFloat(marks);

//     if (marks <= 0 || marks > 100) {
//       alert("Invalid Marks!");
//     } else {
//       calculateGrade(marks);
//     }
//   } else if (option === "2") {
//     console.log("Thank you!!!");
//     break;
//   } else {
//     console.log("Invalid Option! Please enter 1 or 2.");
//   }
// }
