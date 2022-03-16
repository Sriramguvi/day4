//task 1 
//1
var a,b,c,d;
function num(a,b,c,d){
    console.log(`a:${a} b:${b} c:${c} d:${d}`)
}
num(10,1,2,3);
//2
var myvar=1;
console.log(myvar);
//3
var firstname,lastname,age,maritialStatus,country;
firstname="sri";
lastname="ram";
age=23;
maritialStatus="single";
country="india";
console.log( firstname, lastname, age, maritialStatus, country);
//4
var firstname,lastname,age,maritialStatus,country;
console.log(`firstname:${firstname="sri"} lastname:${lastname="ram"} age:${age=23} maritialstatus: ${maritialStatus="single"} country:${country="india"}`)
//task 2

//JavaScript program to swap two variables
//question 2

let x1=2;
let y1=3;
let x =(`Enter the first variable:${x1} `);
let y =(`Enter the second variable:${y1} `);

//create a temporary variable
let temp;

//swap variables
temp = x;
x = y;
y= temp;

console.log(`The value of a after swapping: ${x}`);
console.log(`The value of b after swapping: ${y}`);
// question 5
// taking kilometers 
const kilometers = prompt("Enter value in kilometers: ")


// conversion factor
const factor = 0.621371

// calculate miles
const miles = kilometers * factor
// square rrot
// question 1
var num1=9;
var number = (`Enter the number:${num1} `);

var result = Math.sqrt(num1);
console.log(`The square root of ${number} is ${result}`);
// program to convert celsius to fahrenheit
// ask the celsius value to the user 
// question 4
const celsius = prompt("Enter a celsius value: ");

// calculate fahrenheit
const fahrenheit = (celsius * 1.8) + 32

// display the result
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);

