//Functions

function myFirst() {
    console.log("Welcome Everyone");
    console.log("We are learning JS :)");
}  

myFirst();

function myFirst(msg,n) {
    //parameter
    console.log(msg,n);
}  

myFirst("WE ARE LEARNING JS!",100); //argument

function sum(x,y) { 
 return x + y; 
} 
 console.log(sum(3,4));

const Arrowsum = (a,b) => { 
   console.log(a + b);
};

let arrowmul = (x , y) => {
 return x * y;
}

const printHello = () => {console.log("Hello!");}

//practice1

function vowels(str) {
    let count = 0;
    for(let char of str) {
     if(
        char === "a" || 
        char === "e" ||
        char === "i" || 
        char === "o" || 
        char === "u"
     ) { 
        count++;
     }
    }
    console.log(count);
}

/*let vowels = (str) => {
    let count = 0;
    for(let char of str) {
     if(
        char === "a" || 
        char === "e" ||
        char === "i" || 
        char === "o" || 
        char === "u"
     ) { 
        count++;
     }
    }
    console.log(count);
}*/

let array = ["surat","ahmedabad","vadodra"];

// array.forEach(function printval(val){
//     console.log(val);
// });

array.forEach((val,idx,array) => {
    console.log(val.toUpperCase(),idx,array);
});

//practice2

let array = [11 , 33 , 55 , 77 , 99];

/*array.forEach(function square(val) {
    val = val*val;
    console.log(`Square  = ${val}`);
});*/

array.forEach((array) => {
    console.log(array*array);
});

//Array methods

let array = [18 , 96 , 56];

array.map((val) => {
    console.log(val);
});

let array = [1 , 2 , 3 , 4 , 5 , 6 ,7];
 let evenarray = array.filter((val) => {
    return val>=3;
});
console.log(evenarray);

let array = [1 , 2 , 3 , 4 ];

let output = array.reduce((result,val) => {
  return result + val;
});
console.log(output);

let array = [15 , 7 , 11 , 9 , 14];
let output = array.reduce((prev,curr) => {
  return prev > curr ? prev : curr;
});
console.log(output);

//practice3
let marks = [70,91,93,88,97,89,99];

let output = marks.filter((val) => {
    return val>90;
});
console.log(output);

//practice4
let n = prompt("Enter a Number :");
let array = [];

for(i = 1 ; i<= n;i++){
  array[i-1]=i;
}
console.log(array);

//practice5
let sum = array.reduce((prev,curr) => {
   return prev + curr;
});
console.log("sum =",sum);

let factorial = array.reduce((prev,curr) => {
    return prev * curr;
})
console.log("factorial =",factorial);