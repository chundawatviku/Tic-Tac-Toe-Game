//for Loop
for(let i = 10;i >= 1;i--){
    console.log("Count");
}

//calculate sum 1 to 5
let sum = 0;
let n = 7;

for(let i = 1;i <= n;i++) {
    sum = sum + i;
}
 console.log("sum =",sum);
console.log("loop has ended");

//while Loop
let i = 1;
while(i <= 5) {
    console.log("i =",i);
    i++;
}

//do-while Loop
let i = 1;
do {
    console.log("i =",i);
    i++;
}while(i <= 10);

//for-of Loop
let string = "Damsel";
let size = 0

for(let val of string) {
    console.log("val =",val); 
    size++;
}

console.log("string size =",size);

//for-in Loop
let student = {
    name : "shreya",
    age : 19,
    cgpa : 9.2,
    isPass : true,
};

for(let key in student) {
    console.log("key =",key, " , value =",student[key]);
}

//Que1

for(let i = 0;i <= 100;i++) {
    console.log("i =",i);
}

for(let num = 0;num <= 100;num++) {
if(num%2 === 0) {
    console.log("num =", num);
}
}

//Que2

let gamenumber = 52;
let usernumber = prompt("Guess the Game Number : ");


while(usernumber != gamenumber) {
     usernumber = prompt("You entered wrong number.Guess again : ");
}

console.log("Congratulations,You have entered the right number");

strings

let str = "Anne";
let str1 ='Power';

console.log(str[0]);

//Template literals
let specialstr = `this is a template.`
console.log(specialstr);

let obj = {
    item : "pen",
    price : 10,
};

let output = `The cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output);

console.log("the cost of",obj.item,"is",obj.price,"rupees.");

//escape character
let str = "Chundawat Viku";
str = str.toUpperCase();

console.log(str);

let str = "    Chundawat Viku  ";
str = str.trim();
console.log(str);   //console.log(str.trim());

let str = "HELLO";
console.log(str.slice(0,4));

let str1 = "Chundawat";
let str2 = "Viku";
console.log(str1.concat(str2));   
console.log(str1 + str2);

let str = "Hello me";
console.log(str.replace("lo","p"));

let str = "Hello me";
console.log(str.charAt(1));

//practice
let fullName = prompt("Enter Your FullName without spaces : ");
let username = "@" + fullName + fullName.length;
console.log(username);

// str1 = "@";
// str2 = fullName;
// str3 = fullName.length;
// console.log(str1 + str2 + str3);
