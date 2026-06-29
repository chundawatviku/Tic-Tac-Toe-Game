//Arrays
let marks = [90,83,86,57,94];
console.log(marks);

let names = ["Apeksha","Krishna","kamal","Jaydeep","Viku","Ruhu"];

for(let index = 0; index<names.length;index++) {
    console.log(names[index]);
}

//for-of loop
for(let val of names) {
     console.log(val);
}

let cities = ["surat","vadodra","ahmedabad","Jamnagar","gandhinagar"];

for(let val of cities) {
    console.log(val.toUpperCase());
}

//practice1

let marks = [85,97,44,37,76,60];

let sum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5] 


console.log("Average marks = ",sum / marks.length);

for(let val of marks) {
    console.log(val);
}

//practice2

let price = [250,645,300,900,50];
let i = 0;

for(let val of price) {
    // console.log(`value at index ${i} = ${val} `);
    let offer = val/10;
    price[i] = price[i] - offer;
     console.log(`value after offer = ${price[i]}`);
    i++;
}

//Arrays methods
let names = ["Apeksha","Krishna","kamal","Jaydeep","Viku","Ruhu"];
console.log(names);
names.push("Mamta","Joy");
console.log(names);
names.pop();
console.log(names.toString());

let marks1 = [90,83,86,57,94];
let marks2 = [85,97,44,37,76,60];
let marks = marks1.concat(marks2,marks1);
console.log(marks1);
console.log(marks2);
console.log(marks);

let names = ["Apeksha","Krishna","kamal","Jaydeep","Viku","Ruhu"];
names.shift();
console.log(names);

let names = ["Apeksha","Krishna","kamal","Jaydeep","Viku","Ruhu"];
console.log(names.slice(0,7));

let marks = [90,83,86,57,94];

// marks.splice(2,2,66,77);
marks.splice(3,1);

//practice3

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
companies.shift();
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);