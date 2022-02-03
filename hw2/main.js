// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = 31;
//
// if (time <= 15){
//     console.log('1 part')
// } else if (time <= 30) {
//     console.log ('2 part')
// } else if (time <= 45) {
//     console.log('3 part')
// }else if (time <= 59) {
//     console.log('4 part')
// }



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).

// let day = 25;
//
// if (day <= 10) {
//     console.log( '1 decade' );
// } else if (day <= 20) {
//     console.log( '2 decade' );
// } else if (day <= 31) {
//     console.log( '3 decade' );
// }



// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта -
//     з коротким записом(тернаркою)

// #1
// let test = prompt('?');
//
// if (test === true) {
//     console.log( 'virno' );
// }
//     console.log( 'nepravilno' );
// #2
//
// let test = confirm('true or false') ? 'virno' : 'nepravilno'
// console.log( test );

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = 1;
//
// if (a !== 0) {
//     console.log( 'virno' );
// } else {
// console.log( 'nevirno' );
// }
// let a = 0;
//
// if (a !== 0) {
//     console.log( 'virno' );
// } else {
//     console.log( 'nevirno' );
// }
// let a = -3;
//
// if (a !== 0) {
//     console.log( 'virno' );
// } else {
//     console.log( 'nevirno' );
// }

//
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let day = prompt('day num');
//
// switch (day) {
//     case 'day1': {
//         console.log( 'groceries' );
//         break;
//     }
//     case 'day2': {
//         console.log( 'dayoff' );
//         break;
//     }
//     case 'day3': {
//         console.log( 'working' );
//         break;
//     }
//     case 'day4': {
//         console.log( 'visiting doctor' );
//         break;
//     }
//     case 'day5': {
//         console.log( 'sport' );
//         break;
//     }
//     case 'day6': {
//         console.log( 'relax' );
//         break;
//     }
//     case 'day7': {
//         console.log( 'working' );
//         break;
//     }
//     default : {
//         console.log( 'default' );
//     }
//
// }



// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = prompt('visokosniy');
//
// if (year % 4 == 0) {
//     console.log( 'true' );
// } else {
//     console.log( 'false' );
// }

//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!


// let data = prompt('Яка «офіційна» назва JavaScript?');
//
// if (data === 'ECMAScript') {
//     console.log( 'well done' );
// } else {
//     console.log( 'Не знаєте? ECMAScript!' );
// }




