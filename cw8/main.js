// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

// a) додає клас з назвою групи, елементу з ід main_header
//
// let addClass = document.getElementById('main_header');
// addClass.setAttribute('class', 'dec_2021');
// console.log( addClass );

// b) робить шириниу елементу ul 400px
//
// let changeWidth = document.getElementsByTagName('ul');
//
// for (const changeWidthElement of changeWidth) {
//     changeWidthElement.style.width = '400px'
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%
//
// let changeWidth = document.getElementsByClassName('linkList');
// for (const changeWidthElement of changeWidth) {
//     changeWidthElement.style.width = '50%'
// }

// d) отримує текст який зберігається в елементі з класом listElement2
//
// let textFromEl = document.getElementsByClassName('listElement2');
// console.log( textFromEl[0].children[0].innerText );

// e) отримує всі елементи li та змінює ім колір фону на сірий
//
// let getAllLi = document.getElementsByTagName('li');
//
// for (const allLiElement of getAllLi) {
//     allLiElement.style.backgroundColor = 'grey';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
//
// let getAllAEls = document.getElementsByTagName('a');
// for (let allAEl of getAllAEls) {
//     allAEl.setAttribute('class', 'anchor')
// }
// console.log( getAllAEls );

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
//
// let getAllAels = document.getElementsByTagName('a');
// console.log( getAllAels );
// for (let allAel of getAllAels) {
//     if(allAel.innerHTML === 'link3'){
//         allAel.style.fontSize = '40px'
//     }
// }


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
// let getAllAEls = document.getElementsByTagName('a');
//
// for (const allAEl of getAllAEls) {
//     // console.log( allAEl.innerHTML );
//     let XXX = allAEl.innerHTML
//     allAEl.setAttribute('class', `element_${XXX}`)
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// let allSubHeaderEls = document.getElementsByClassName('sub-header');
//
// for (let allSubHeaderEl of allSubHeaderEls) {
//     let color = prompt();
//     allSubHeaderEl.style.color = `${color}`;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()
//
// let getSubHeaderEls = document.getElementsByClassName('sub-header');
//
// for (let subHeaderEl of getSubHeaderEls) {
//     if(subHeaderEl.innerText === 'content 2 segment'){
//         let color = prompt();
//         subHeaderEl.style.color = `${color}`;
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//
// let getElwithClass = document.getElementsByClassName('content_1');
// let text = prompt();
// getElwithClass[0].innerText = `${text}`

// l) отримати елементи p та змінити їм padding на 20px
//
// let getPEls = document.getElementsByTagName('p');
// for (let pEl of getPEls) {
//     pEl.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
//
// let getELsWithClass = document.getElementsByClassName('text2');
// getELsWithClass[0].innerText = 'dec-2021';
