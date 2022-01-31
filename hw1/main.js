// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let on0 = 'hello';
let on1 = 'owu';
let on2 = 'com';
let on3 = 'ua';
let on4= 1;
let on5= 10;
let on6= -999;
let on7= 123;
let on8= 3.14;
let on9= 2.7;
let on10= 16;
let on11= true;
let on12= false;

console.log( on0, on1, on2, on3, on4, on5, on6, on7, on8, on9, on10, on11, on12 );
document.write(on0, on1, on2, on3, on4, on5, on6, on7, on8, on9, on10, on11, on12);
alert(on0, on1, on2, on3, on4, on5, on6, on7, on8, on9, on10, on11, on12);

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

on0 = 1;
on1 = 2;
on2 = 3;
on3 = 4;
on4 = 5;
on5 = 6;
on6 = 7;
on7 = 8;
on8 = 9;
on9 = 10;
on10 = 11;
on11 = 12;
on12 = 13;

console.log( on0, on1, on2, on3, on4, on5, on6, on7, on8, on9, on10, on11, on12 );
document.write(on0, on1, on2, on3, on4, on5, on6, on7, on8, on9, on10, on11, on12);
alert(on0, on1, on2, on3, on4, on5, on6, on7, on8, on9, on10, on11, on12);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = 'Misha';
let middleName = 'Mykhailovych';
let lastName = 'Astashkin';

let person = firstName + lastName + middleName;

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let name = prompt().toString()
let surname = prompt().toString()
let age = +prompt()

console.log(`congrats ${name} ${surname.toString()}, you are ${age} old`)


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a = 100; let b = '100'; let c = true;

console.log(typeof a );
console.log(typeof b );
console.log(typeof c );


// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!

5 > 6;
5 = 6;
5 < 6;
5 >= 6;
10 === 10;
10 == 10;
10 != 10;
10 !== 10;
10 === 10;
123 === '123';
123 == '123';
