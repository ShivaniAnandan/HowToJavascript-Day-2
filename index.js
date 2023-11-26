//Assignment 1
function check(num){
    if(num > 0){
        console.log("Positive");
    }
    else if(num < 0){
        console.log("Negative");
    }
    else if(num == 0){
        console.log("Zero");
    }
}

//let input = prompt("Enter Your Number");
console.log("Assignment 1 Output");
check(3);

//Assignment 2

function calculateFactorial(n) {
    // Check if the input is a positive integer
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
      return "Please provide a valid positive integer.";
    }
  
    // Initialize the factorial to 1
    let factorial = 1;
  
    // Multiply numbers from 1 to n
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  
  const result = calculateFactorial(5);
  console.log("Assignment 2 Output");
  console.log(result); 

  //Assignment 3
  function islarger(num1,num2){
    if(num1>num2){
        console.log(num1 + " is Larger");
    }
    else{
        console.log(num2+ " is Larger");
    }
  }
  console.log("Assignment 3 Output");
  //let num1 = prompt("Enter First Number: ");
  //let num2 = prompt("Enter Second Number: ");
  islarger(24,30);


//Assignment 4
function isPalindrome(str){
    let revstr = str.split(" ").reverse().join(' ');
    if(str === revstr){
        console.log(str+" is Palindrome");
    }
    else{
        console.log(str + " is not a Palindrome");
    }
}
console.log("Assignment 4 Output");
//let word = prompt("Enter Your String");
isPalindrome("madam");

//Assignment 5
function PrimeNumbers(n){
    let result = [];
    for(i=2;i<=n;i++){
        if(i%2===1){
            result.push(i);
        }
        else{
            continue;
        }
    }
    return result.join(',');
}
console.log("Assignment 5 Output");
//let number = prompt("Enter Your Number:");
console.log(PrimeNumbers(23));

//Assignment 6
function Calculate(number1,number2,operator){
    let res;
    if(operator === '+'){
        res = number1 + number2;
    }
    else if(operator === '-'){
        res = number1 - number2;
    }
    else if(operator === '*'){
        res = number1 * number2;
    }
    else if(operator === '/'){
        res = number1 / number2;
    }
    return res;
}
console.log("Assignment 6 Output");
//let number1 = parseInt(prompt("Enter First Number: "));
//let number2 = parseInt(prompt("Enter Second Number: "));
//let operator = prompt("Enter Your Operator:");
console.log(Calculate(3,7,'+'));  

//Assignment 7
function vowels(string){
    let count=0;
    for(let i=0;i<string.length;i++){
       if(string[i]=='a'||string[i]=='e'||string[i]=='i'||string[i]=='o'||string[i]=='u'){
        count++;
       }
    }
    return count;
}
console.log("Assignment 7 Output");
//let string = prompt("Enter String: ");
console.log(vowels("elephant"));

//Assignment 8
function isPerfectNumber(number) {
    // Check if the input is a positive integer
    if (typeof number !== 'number' || number <= 0 || !Number.isInteger(number)) {
      return false;
    }
  
    // Find the sum of proper divisors
    let sum = 0;
    for (let i = 1; i <= Math.floor(number / 2); i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
  
    // Check if the sum of divisors is equal to the original number
    return sum === number;
  }
  console.log("Assignment 8 Output");
const example1 = 6;
console.log(isPerfectNumber(example1));


//Assignment 9
function fibonacciSeries(limit) {
    // Check if the input is a positive integer
    if (typeof limit !== 'number' || limit <= 0 || !Number.isInteger(limit)) {
      console.log("Please provide a valid positive integer.");
      return;
    }
  
    // Initialize variables for the first two numbers in the series
    let num1 = 0;
    let num2 = 1;
  
    // Print the first two numbers (0 and 1)
    console.log(num1);
    console.log(num2);
  
    // Generate and print the rest of the series up to the limit
    while (num1 + num2 <= limit) {
      let nextNum = num1 + num2;
      console.log(nextNum);
      num1 = num2;
      num2 = nextNum;
    }
  }
console.log("Assignment 9 Output");
fibonacciSeries(15);

  
//Assignment 10
function printTable(n){
    for(let i=1;i<=10;i++){
        console.log(n+" * "+i+" = "+n*i);
    }
}
console.log("Assignment 10 Output");
printTable(10);