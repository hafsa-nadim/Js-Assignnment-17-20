//                              Question: 01

let array1 = [["Hafsa", "Eraj"], [18, 20], [true, false]];


//                              Question: 02

let matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];


//                              Question: 03

for (let i=1; i<=10; i++){
    document.write(i + "<br>")
}


//                              Question: 04

let num = +prompt("Enter a number to show it's multiplication table: ");
let tableLength = +prompt("Enter the length of multi[lication table: ");
for (let i=1; i<=tableLength; i++){
    document.write(num + " x " + i + " = " + i*num + "<br>");
}


//                             Question: 05

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i=0; i<fruits.length; i++){
    document.write(fruits[i] + "<br>");
}
document.write("<br><br>")
for(let i=0; i<fruits.length; i++){
    document.write("Element at index " + i + " is " + fruits[i] + "<br>")
}


//                            Question: 06

document.write("<h1>Counting:</h1>" + "<br>");
for (let i=1; i<=15; i++) {
    document.write( i + ", ");
}
document.write("<h1>Reverse Counting:</h1>" + "<br>");
for (let i=10; i>=1; i--) {
    document.write( i + ", ");
}
document.write("<h1>Even:</h1>" + "<br>");
for (let i=0; i<=20; i++){
    if(i%2 === 0){
        document.write( i + ", "); 
    }
}
document.write("<h1>Odd:</h1>" + "<br>");
for (let i=0; i<=20; i++){
    if(i%2 !== 0){
        document.write( i + ", "); 
    }
}
document.write("<h1>Series:</h1>" + "<br>");
for (let i=1; i<=20; i++){
    if(i%2 === 0){
        document.write( i + "k, "); 
    }
}


//                           Question: 07

let items = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("What do you want to oder?");
let userItems = userInput.toLowerCase();
let flag = false;
for (var i=0; i<items.length; i++){
    if(userItems === items[i]){
        flag = true
    }
}
if(flag === true){
    alert(userItems + " is available at index " + items.indexOf(userItems) + " in our Bakery")
}
else{
    alert("Sorry!" + userItems + " is not available in our Bakery")
}


//                              Question: 08

var Arr = [24, 53, 78, 91, 12];
var largeNum = Arr[0];
for (let i = 1; i < Arr.length; i++) {
  if (Arr[i] > largeNum) {
    largeNum = Arr[i]; 
  }
}
console.log("The largest number is: " + largeNum);


//                                Question: 09

var Arr = [24, 53, 78, 91, 12];
var smallNumber = Arr[0];
for (let i = 1; i < Arr.length; i++) {
  if (Arr[i] < smallNumber) {
    smallNumber = Arr[i]; 
  }
}
console.log("The smallest number is: " + smallNumber);


//                                Question: 10

for (let i = 1; i<=100; i++){
    if (i % 5 === 0){
        console.log(i)
    }
}