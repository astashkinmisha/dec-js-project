// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
// Скласти результат цих чисел в змінній result.

let arr = [1,1,1,1,1,1,1,1,1,1]

const result = (arr) => arr.reduce((acc, num) => acc + num, 0);

console.log( result( arr ) );


// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
//
let book = {
    name: 'Harry Potter',
    pageCount: 321,
    genre: 'Fantastic'
}

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book = {
    name: 'Harry Potter',
    pageCount: 321,
    genre: 'Fantastic',
    authors: 'Joanne Rowling'
}

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
// Вивести кожну книгу як окремий об'єкт

let books = [
    book1={
    name: 'name1',
        pageCount: 'pageCount1',
        genre: 'genre1',
        authors: 'authors1'
    },
    book2={
        name: 'name2',
        pageCount: 'pageCount2',
        genre: 'genre2',
        authors: 'authors2'
    },book3={
        name: 'name3',
        pageCount: 'pageCount3',
        genre: 'genre3',
        authors: 'authors3'
    }

]

console.log( books[0] );
console.log( books[1] );
console.log( books[2] );

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let width = 10;


let s = height*width

console.log( s );

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 10;
let dC = 4;

let v = Math.PI * dC * heightC;

console.log( v );
