"use strict";

// TASK-1
// Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

// function isDivided(number){

//     if (number%3==0&&number%7==0) {
//         console.log("Is Divided by 3 and 7");
//     }else{
//         console.log("Is NOT Divided by 3 and 7");
//     }
// }

// isDivided(42);

// TASK-2
// Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir.

// function factorial(number) {
//   let factorial = 1;
//   if (number > 0) {
//     for (let i = 1; i <= number; i++) {
//       factorial *= i;
//     }
//   } else {
//     console.log("Number is negative");
//   }
//   console.log(factorial);
// }
// factorial(3)

// TASK-3
// Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

// function multiSum(numbers) {
//   let sum = 0;
//   let multiply = 1;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//       multiply = numbers[i] ** 2;
//       sum += multiply;
//     }
//   }
//   console.log(sum);
// }
// let numbers = [1, 2, 4, 7, 8];
// multiSum(numbers);

// TASK-4
// Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin.

// function confirmassion(mail,pasword) {
//     if (mail=="cavid@code.edu.az" && pasword==12345) {
//         console.log("Girish olundu");
//     }
//     else{
//         console.log("Yanlish");
//     }
// }

// confirmassion("cavid@code.edu.az",12345)

// TASK-5
// Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.
// function sumOfOddArray(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 1) {
//       sum += numbers[i];
//     }
//   }
//   console.log(sum);
// }
// let numbers = [1, 2, 4, 7, 8];
// sumOfOddArray(numbers)

// TASK-6
// Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

// function countOfEven(numbers) {
//   let count = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// let numbers = [1, 2, 4, 7, 8];
// countOfEven(numbers);

//   TASK-7
// Sinifde yazdiqlarimin praktikasi.
