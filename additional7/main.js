// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//

// class Address {
//     constructor(street, suite, zipcode, geo, lat, lan) {
//         this.street = street;
//         this.suite = suite;
//         this.zipcode = zipcode;
//         this.geo = geo;
//         this.lat = lat;
//         this.lan = lan;
//     }
// }
//
// class User {
//     constructor(id, username, email, street, suite, zipcode, geo, lat, lan, phone, website , name, catchPhrase, bs) {
//         this.id = id;
//         this.username = username;
//         this.email = email;
//         this.address = new Address(street, suite, zipcode, geo, lat, lan);
//         this.work = new Work(phone, website);
//         this.company= new Company(name, catchPhrase, bs);
//
//     }
// }
//
// class  Work {
//     constructor(phone, website) {
//         this.phone = phone;
//         this.website = website;
//     }
// }
//
// class Company {
//      constructor(name, catchPhrase, bs) {
//         this.name = name;
//         this.catchPhrase = catchPhrase;
//         this.bs = bs;
//     }
// }
//
// let user =
//     new User(1,
//         'mishaastashkin',
//         'mishaastashkin@email.com',
//         'Dovzhenka',
//         7,
//         79070,
//         41241234,
//         14214124,
//         124124,
//         '+380977312412',
//         'website.com',
//         'WebCompany',
//         'fasdfasfas',
//         'fasfasfas' );
//
// console.log( user );

//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class Attrs {
    constructor([{titleOfAttr, actionOfAttr}, {someProp}]) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
        this.someProp = someProp;
    }
}

class TitleOfTag {
    constructor(titleOfTag, action, titleOfAttr, actionOfAttr, someProp) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = new Attrs([{titleOfAttr,actionOfAttr}, {someProp}])

    }
}
let a = new TitleOfTag( 'A',
    'makes hypertext', 'title', 'action', 'someprops')
console.log( a );

let div = new TitleOfTag('div',
    'makes div', 'some attr', 'make something', 'some prop');
console.log( div );

let h1 = new TitleOfTag('h1',
    'makes h1',
    'title of H1', 'actiion of h1', 'someprop' )
console.log( h1 );


let span = new TitleOfTag('span',
    'makes span', 'title', 'action', 'some prop')
console.log( span );


let input = new TitleOfTag('input',
    'makes input', 'title', 'action', 'some prop')
console.log( input );

let form = new TitleOfTag('from',
    'makes form', 'title', 'action', 'some prop')
console.log( form );

let option =  new TitleOfTag('option', 'makes option',
    'title', 'action', 'some props')
console.log( option );

let select = new TitleOfTag('select',
    'makes select', ' title', 'actiom', 'some props')
console.log( select );
