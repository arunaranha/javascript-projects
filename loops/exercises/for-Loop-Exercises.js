/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

//Exe #1.a
    for (let i = 0; i < 21; i++) {
      console.log(i);
      
    }
//Exe #1.b
    for (let i=3; i<30; i=i+2){
      console.log(i);
    }
//Exe #1.c
    for (let i =12; i >= -14; i=i-2) {
  console.log(i);

}    
//Exe #1.d



/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

//Exe #2.a  

let str1="LaunchCode";
let arr1=[1, 5, 'LC101', 'blue', 42];
for (i=0; i< arr1.length; i++){
  console.log(arr1[i]);
}

//Exe 2.b
/*
for (i=str1.length; i>=0; i--){
  
  console.log(str1[i]);
}
*/

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

//Exe #3.a,b
let evenN = [];
let oddN = [];
let arrayA = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
//console.log(arrayA.length);
for (i=0; i<arrayA.length; i++){
  if (arrayA[i] % 2 === 0) { 
     evenN.push(arrayA[i]);
    
   } else oddN.push(arrayA[i]);
  }
  console.log("The even array is: ");
  console.log(evenN);
  console.log("The odd array is: ");
  console.log(oddN);

