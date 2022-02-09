// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//

// function ploshcha(a,b) {
//     let c = a * b;
//     return c;
// }
//
// console.log( ploshcha( 10, 20 ) );

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function checkRadius (r){
//     return Math.PI * Math.pow(r, 2);
// }
//
// console.log( checkRadius( 5 ) );

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//

// function s_cylinder(h, r) {
//     return 2 * Math.PI * r * h;
// }
//
// console.log(s_cylinder(2,4));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [1,2,3,4,5,6,7];
//

// function arrTaker (array) {
//     for (const arrayElement of array) {
//         console.log( arrayElement );
//     }
// }
// arrTaker(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function pCreator (text) {
//     document.write(`<p>${text}</p>`)
// }
//
// pCreator('asfasg')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function liCreator (text) {
//     document.write(`<ul>
// <li>
// ${text}
// </li>
//
// <li>
// ${text}
// </li>
//
// <li>
// ${text}
// </li>
//
// </ul>`)
//
// }
//
// liCreator('q231');

// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function listCreator(text, li_qnty) {
//     document.write('<ul>');
//     for (let i = 0; i < li_qnty; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>');
// }
//
// listCreator('asfsa', 2)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//

// let arr = [1,2,4, 'as', true];
//
// function  listCreator(array) {
// document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
// listCreator(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.


// let objArr = [{id:1, name: 'Igor', age: 21}, {id:2, name: 'Misha', age: 22}]
//
// function obj(array) {
//
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id} - ${arrayElement.name} - ${arrayElement.age}</div>`)
//     }
// }
// obj(objArr)

//
