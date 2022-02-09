// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою

// let ploshcha = (a,b) => a*b;
//
// console.log( ploshcha( 2, 5 ) );

// - створити функцію яка обчислює та повертає площу кола

// let circle = (r) => Math.PI * Math.pow(r, 2);
//
// console.log( circle(  10 ) );

// - створити функцію яка обчислює та повертає площу циліндру


// let cylinder = (r,h) => 2 * Math.PI * r * h;
//
// console.log( cylinder( 3, 5 ) );

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [1,3,4,5,6]
//
// let arrTaker = (array) => {
//     for (const arrayElement of array) {
//         console.log( arrayElement );
//     }
// }
// arrTaker(arr);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let pCreator = (text) => {
//     document.write(`<p>${text}</p>`)
// }
// pCreator('LOL')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let liCreator = (text) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
//
// liCreator('asfas')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let argLiCreator = (text, li_qnty) => {
//     document.write('<ul>');
//     for (let i = 0; i < li_qnty; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>');
// }
//
// argLiCreator('asdasf',5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arrNumStrBl = [1234, 'UA', true];
//
// let arrTaker = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<h1>${array[i]}</h1>`)
//     }
// }
// arrTaker(arrNumStrBl)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//

// let objArr = [{id:1, name: 'Igor', age: 21}, {id:2, name: 'Misha', age: 22}]
//
// let arrTkr = (array) => {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id} - ${arrayElement.name} - ${arrayElement.age}</div>`)
//     }
// }
// arrTkr(objArr);
