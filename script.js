//Arithmetic Operators
let a = 10;
let b= 5;

console.log ("a = ",a , "& b = ",b);
console.log("a + b =",a + b);
console.log("a - b =",a - b);
console.log("a * b =",a * b);
console.log("a / b =",a / b);
console.log("a % b =",a % b); //Modulus
console.log("a ** b =",a ** b); //Exponantiation

//Unary Operators
let a = 10;
let b= 5;

console.log("a = ",a , "& b = ",b);
//a++;
console.log("a-- = ",a--);
console.log("a = ",a);

//Assignment Operators
let a = 10;
let b= 5;

a **= 4;
console.log("a = ",a);

//Comparison Operators
let a = 10;
let b= 5;

console.log("a >= b ",a >= b);

//Logical Operators
let a = 10;
let b= 5;

let cond1 = a < b;
let cond2 = a!==10;
console.log("cond1 || cond2 = ",cond1 || cond2);

//Conditional Statements
let age = 16;

if (age >= 18) {
    console.log("You Can Vote");
}

if (age < 18) {
    console.log("You Cannot Vote");
}

let mode = "light";
let color;

if (mode === "dark") {
    color="black";
}

if (mode === "light") {
    color="white";
}

if (mode === "dark") {
    color="black";
} else {
    color="white";
}

console.log(color);

let no = 26;

if (no%2 === 0) {
    console.log(no,"is even");
} else {
    console.log(no,"is odd");
}

let mode = "dark";
let color;

if(mode === "dark") {
    color = "black";
} else if(mode === "light") {
    color = "white";
} else if(mode === "blue") {
    color = "blue";
} else {
    color = "pink";
}

console.log(color);

if(mode === "dark") console.log(mode);

//Ternary Operators

let age = 10;

let result = age >= 18 ? "Adult" : "not Adult";
console.log(result);


let name = prompt("HELLO!");
console.log(name);


//Que 1 

let num = prompt("Enter a number:");

if(num % 3 === 0){
    console.log(num,"is a multiple of 3");
}else {
    console.log(num,"is NOT a multiple of 3");
}


//Que 2

let marks = 100;

if(marks >= 80 && marks <= 100) {
    grade = "A";
} else if(marks >= 70) {
    grade = "B";
} else if(marks >= 60) {
    grade = "C";
} else if(marks >= 50) {
    grade = "D";
} else if (marks >= 0) {
    grade = "E";
}

console.log("According to your marks,Your grade was :", grade);