// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let minNum = (a, b, c) => {
//     let minNumber = a;
//     if(b < a && b < c){
//         minNumber = b;
//     }
//     if(c < b && c < a) {
//         minNumber = c;
//     }
//
//     console.log( `${minNumber}` );
// }
//
// minNum(2,7,5);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let maxNum = (a, b, c) => {
//     let maxNumber = a;
//     if(b > a && b > c){
//         maxNumber = b;
//     }
//     if(c > b && c > a) {
//         maxNumber = c;
//     }
//
//     console.log( `${maxNumber}` );
// }
//
// maxNum(2,7,5);


// - створити функцію яка повертає найбільше число з масиву

// let maxNum = (array) =>  {
//     let maxNum = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] > maxNum){
//             maxNum = array[i];
//         }
//     }
//     return maxNum;
//
// }
// let arr =  maxNum( [5, 3, 7, 4, 3, 2, 2] );
// console.log( arr );

// - створити функцію яка повертає найменьше число з масиву

// let minNum = (array) => {
//     let minimumNum = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] < minimumNum){
//             minimumNum = array[i];
//         }
//     }
//     return minimumNum;
// }
// let arr = minNum([1,3,5,6,7]);
// console.log( arr );


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let sumOfArray = (array) => {
//     let startNumber = 0;
//     for (let i = 0; i < array.length; i++) {
//         startNumber += array[i];
//     }
//     return startNumber
// }
// console.log( sumOfArray( [1, 2, 10] ) );

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let averageNumber = (array) => {
//     let startNumber = 0;
//     for (let i = 0; i < array.length; i++) {
//         startNumber += array[i];
//     }
//    return startNumber/array.length;
// }
// let array = averageNumber([2,2,2])
// console.log( array );

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let minMaxnum = (nums) => {
//     let min = nums[0];
//     let max = nums[0];
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] > max) {
//             max = nums[i]
//         }
//             if(nums[i] < min){
//                 min = nums[i]
//             }
//     }
//     console.log( `Max: ${max}` );
//     return min
// }
// let numbers = minMaxnum([1,5,7])
//
// console.log( `Min: ${numbers} `);

// - створити функцію яка заповнює масив рандомними числами // (цей код генерує рандомні числа в діапазоні від 0 до 100 -
// Math.round(Math.random()*100)) та виводить його.

// let  randomer = (qnty) =>  {
//     let arr = [];
//     for (let i = 0; i < qnty; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     console.log(arr);
// }
//
// randomer(8);


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let limitFunc = (num, limit) => {
//     let arr = [];
//     for (let i = 0; i < num; i++) {
//         arr.push(Math.round(Math.random()*limit));
//     }
//     console.log( arr );
// }
// limitFunc(10,100);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function reverse(array){
//     let output = [];
//     for (var i = array.length - 1; i> -1; i--){
//         output.push(array[i]);
//     }
//     return output;
// }
// console.log(reverse([1,2,3]));


//тут нагуглив :(
