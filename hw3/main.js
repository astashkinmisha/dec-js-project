// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arrNum = [1,3,5,6,7];
// let arrStr = ['asd','qwe','zxc','qwerty','sadas'];
// let arrStrNumBool = [1,'qwerty', true,'2',2];
//
// console.log( arrNum, arrStr, arrStrNumBool );
//

//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//

// let emptyArr = [];
//
// emptyArr[0] = '1';
// emptyArr[1] = '2';
// emptyArr[2] = '3';
//
// console.log( emptyArr );

//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Текст</div>`)
//
// }

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Текст ${i}</div>`)
//
// }

// let i = 0;
//
// while (i < 20){
//     document.write(`<h1>Text</h1>`)
//     i++
// }

// let i = 0;
//
// while (i < 20){
//     document.write(`<h1>${i} Text</h1>`)
//     i++
// }

//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//

// let arr = [11,22,3,1,24,67,20,10,22,5];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log( arr[i] );
//
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//

// let arrStr = ['1','2','3','4','5','6','7','8','9','10'];
//
// for (const string of arrStr) {
//     console.log( string );
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let mixed = ['1234',1234,true,'null', 'name', 2344, false, 'sure', 'game'];
//
// for (const mix of mixed) {
//     console.log( mix );
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = ['1234',1234,true,'null', 'name', 2344, false, 'sure', 'game'];

// for (const arrBoolElement of arrBool) {
//     if(typeof arrBoolElement === 'boolean' ){
//         console.log( arrBoolElement );
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// for (const arrNumbElement of arr) {
//
//     if(typeof arrNumbElement === "number"){
//         console.log( arrNumbElement );
//     }
//
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// for (const arrElementStr of arr) {
//     if(typeof arrElementStr === "string" ){
//         console.log( arrElementStr );
//     }
//
// }

//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr[0] = '21asd';
// arr[1] = 'asdasf';
// arr[2] = '12312';
// arr[3] = 'fsdfds';
// arr[4] = 'fsdf';
// arr[5] = 'asd';
// arr[6] = 'qwe';
// arr[7] = 'qwer';
// arr[8] = 'qwert';
// arr[9] = 'qwerty';
//
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log( arrElement );
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log([i])
// document.write([i])
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log([i])
//     document.write([i])
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(i);
//
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//
//     if(!(i % 2)) {
//         console.log( i );
//     }
//
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//
//     if(i % 2) {
//         console.log( i );
//     }
//
// }
