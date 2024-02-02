"use strict";

// TASK-1
//Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.
function isDivided(number) {
  if (number % 3 == 0 && number % 7 == 0) {
    console.log("Is Divided by 3 and 7");
  } else {
    console.log("Is NOT Divided by 3 and 7");
  }
}
isDivided(42);
// TASK-2
// Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir.

function factorial(number) {
  let factorial = 1;
  if (number > 0) {
    for (let i = 1; i <= number; i++) {
      factorial *= i;
      
    }
  } else {
    console.log("Number is negative");
  }
  console.log(factorial);
}
factorial(3)



// TASK-3
// Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

 function multiSum(numbers) {
   let sum = 0;
   let multiply = 1;
   for (let i = 0; i < numbers.length; i++) {
     if (numbers[i] % 2 == 0) {
       multiply = numbers[i] ** 2;
       sum += multiply;
     }
   }
   console.log(sum);
 }
 let numbers = [1, 2, 4, 7, 8];
 multiSum(numbers);

// TASK-4
// Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin.

 function confirmassion(mail,pasword) {
     if (mail=="cavid@code.edu.az" && pasword==12345) {
         console.log("Girish olundu");
     }
     else{
         console.log("Yanlish");
     }
 }
 confirmassion("cavid@code.edu.az",12345)

// TASK-5
// Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.
 function sumOfOddArray(numbers) {
   let sum = 0;
   for (let i = 0; i < numbers.length; i++) {
     if (numbers[i] % 2 == 1) {
       sum += numbers[i];
     }
   }
   console.log(sum);
 }
 let numbers2 = [1, 2, 4, 7, 8];
 sumOfOddArray(numbers2)

// TASK-6
// Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

 function countOfEven(numbers) {
   let count = 0;
   for (let i = 0; i < numbers.length; i++) {
     if (numbers[i] % 2 == 0) {
       count++;
     }
   }
   console.log(count);
 }
 let numbers3 = [1, 2, 4, 7, 8];
 countOfEven(numbers3);


//   TASK-7
// Sinifde yazdiqlarimin praktikasi.

// alert("Hello world");

// let person = prompt("please enter your name");

// if(person == ""){
//   console.log("invalid");
// }
// else{
//   console.log(person);
// }

// let elem = confirm("Press a button!");
// console.log(elem);

// let worker1 = {
//   id:1,
//   name:"Tofiq",
//   surname:"Nasibli",
//   age:19
// }

// let worker2 = {
//   id:2,
//   name:"Ali",
//   surname:"Shukurlu",
//   age:18
// }

// let worker3 = {
//   id:3,
//   name:"Ali",
//   surname:"Huseynov",
//   age:19
// }

// let result = worker1.name + " " + worker1.surname;
// console.log(result);

// const workers = [worker1,worker2,worker3,worker4];

// for (let i = 0; i < workers.length; i++) {

// let result = workers[i].name + " " + workers[i].surname;
// console.log(result);

// }

// let sumAge = 0;
// for (let i = 0; i < workers.length; i++){
// sumAge += workers[i].age;
// }
// console.log(sumAge);

// let averageAge = sumAge / workers.length;

// if(averageAge > 50){
//   console.log("Old");
// }
// else{
//   console.log("Young");
// }

// document.querySelector("h1").innerText = workers[1].name;

// for (const item of workers) {
//   console.log(item.name);
// }

// const elems = [1,2,3,4,5];

// for (const item of elems) {
//   console.log(item);
// }

// const product = {
//   name:"Iphone",
//   price:4000,
//   model:"15"
// }

// for (const key in product) {
//   console.log(key + " " + product[key]);
// }

// for (const worker of workers) {
//   for (const key in worker) {
//     if(key == "name"){
//       let objectData = '${key} - ${worker[key]}';
//       console.log(objectData);
//     }
//   }
// }

// function showText(){
//   let isActive = true;

//   if(isActive){
//     return;
//   }

//   console.log("tested");
// }
// showText();

// function showName(text){
// console.log(text);
// }

// showName("Ali");

// function showFullData(name,surname,age){
// const fullData = `${name} ${surname} ${age}`;
// console.log(fullData);
// }

// showFullData("Tofiq","Nasibli",19);

// function num(num = 100){
//   console.log(num + 200);
// }

// num(5);

// function getStudentsByAge(workers){
//   let count = 0;
//   for (const worker of workers) {
//     if(worker.age > 20)
//     count++;
//   }
//  count **= 2;
//  return count;
// }

// console.log(getStudentsByAge(workers));

// let status = true;

// if(status){
//   let elem = 100;
//   console.log("Yes");
// }

// function test(){
//   let surname = "test";
// }
