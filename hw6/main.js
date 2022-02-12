// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world'.length;
// console.log( a );
//
// let b = 'lorem ipsum'.length;
// console.log( b );
//
// let c = 'javascript is cool'.length;
// console.log( c );

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world';
// console.log( a.toUpperCase() );
//
// let b = 'lorem ipsum';
// console.log( b.toUpperCase() );
//
// let c = 'javascript is cool'.toUpperCase()
// console.log( c );

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let a = 'HELLO WORLD'.toLowerCase();
// console.log( a );
//
// let b = 'LOREM IPSUM'.toLowerCase();
// console.log( b );
//
// let c = 'JAVASCRIPT IS COOL'.toLowerCase();
// console.log( c );

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
//
// console.log( str.trim() );

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// function stringToArray(str) {
// let arr = str.split(' ');
//     console.log( arr );
// }
// stringToArray('Каждый охотник желает знать');


//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// function delete_characters(str, length) {
//     let deleted = str.substring(0,length)
//     console.log( deleted );
// }
// delete_characters('Каждый охотник желает знать', 7);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// function insert_dash(str) {
//     let dashInsert = str.replaceAll(' ', '-').toUpperCase();
//     console.log( dashInsert );
// }
// insert_dash('HTML JavaScript PHP');

// - Напишіть функцію, яка приймає рядок як аргумент і
// перетворює регістр першого символу рядка з нижнього регістру у верхній.

// function firstIndexToUC(str) {
//     if (!str) return str;
//
//     return str[0].toUpperCase() + str.slice(1);
// }
// console.log( firstIndexToUC( 'okten' ) );


//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// function capitalize(str) {
//
//     return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
//
// }
// console.log (capitalize('okten web'));;
