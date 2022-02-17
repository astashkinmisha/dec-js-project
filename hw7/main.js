// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// class User {
//     id;
//     name;
//     surname;
//     email;
//     phone;
//
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }


// створити пустий масив, наповнити його 10 об'єктами new User(....)

// let emptyArr = [];
//
// for (let i = 10; i >= 1; i--) {
//     emptyArr.push(new User(`${i}`, `name: ${i}+name`, `${i}+surname`, `${i}+email`, `${i}+tel`))
// }
//
// console.log( emptyArr );

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filteredValue = emptyArr.filter(user => user.id %2 === 0);
// console.log( filteredValue );


//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log( emptyArr.sort( (a, b) => a.id - b.id ) );

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

//
// let person = new Client(1, 'name', 'surname', 'email@email.com', '+38076432141', ['phone', 'laptop', 'headset'])
// console.log( person );

// створити пустий масив, наповнити його 10 об'єктами Client

// let emptyArr2  = [];
//
// for (let i = 10; i >= 1; i--) {
//  emptyArr2.push( new Client(
//         `${i}`,
//         `name${i}`,
//         `surname${i}`,
//         `email${i}`,
//         `tel${i}`,
//         `order ${i}`
//     ) );
// }
// console.log(emptyArr2)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// console.log( emptyArr2.sort( (a, b) => a.order.length - b.order.length ) );
