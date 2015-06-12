/**
 * Deanna Henry
 * Expression Assignment
 * Section 02
 * June 11, 2015.
 */

//tested to see if connected.);


// Triangle Calculator

// Welcome User

alert("Welcome to Triangle Calc!");

var name = prompt("Hi! What is your name?");
console.log(name);

// add personal touch

alert("Thank you "+name+". Now lets figure out that missing number!");

// Ask user for info on angle

var side1 = prompt("Alright, What is the degree of your first side?");
console.log(side1);

// Ask user for side 2 of angle

var side2 = prompt("Please enter the second side ");
console.log(side2);

alert("Thank you "+name+" for the information");

//Calculation for the answer.
var degree= 180

var side3 = degree - side1 - side2;

alert("Ok "+name+", the missing degree angle is "+side3+"");

//test code. Code works entered in differnt number with calc on the side both gave same answers
//which would be 180 (degree)- side1 (50)- side2 (60) equals side3 (70)