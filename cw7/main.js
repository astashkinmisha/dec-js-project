// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

function car(model, producer, year, maxSpeed, volume ) {
   this.model = model;
   this.producer = producer;
   this.year = year;
   this.maxSpeed = maxSpeed;
   this.volume = volume;

}
//
let car1 = new car ('x','tesla',2017, 250, 0);
car1.drive = function (){
   console.log('їдемо зі швидкістю' ,'', + this.maxSpeed, 'на годину');
}
   car1.info = function (){
       console.log(this.model, this.producer, this.year, this.maxSpeed, this.volume);
   }
         car1.increaseMaxSpeed = function (newSpeed){
             this.maxSpeed += newSpeed;
             console.log(this.maxSpeed);
         }
             car1.changeYear = function (newValue) {
                 this.year = newValue;
                 console.log(this.year);
             }
car1.addDriver = function (driver) {
   this.driver = driver;
   console.log(this.driver);
}
car1.drive();
car1.info();
car1.increaseMaxSpeed(15);
car1.changeYear(2019);
car1.addDriver({name: 'Troll', age: 17});

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

class Car {
    constructor(model, producer, prodYear, maxSpeed, vol) {
        this.model = model;
        this.producer = producer;
        this.prodYear = prodYear;
        this.maxSpeed = maxSpeed;
        this.vol = vol;
    }



    drive() {
        console.log( `Їдемо зі швидкістю ${this.maxSpeed} на годину` );
    };
        info() {
        console.log( this.model, this.vol, this.maxSpeed, this.producer, this.prodYear );
    };
            increaseMaxSpeed (newSpeed) {
                this.maxSpeed += newSpeed
                    console.log( this.maxSpeed );
    };
                        changeYear (newValue) {
                            this.prodYear = newValue
                                console.log( this.prodYear );
    };
                                    addDriver (id, name, age) {
                                        this.id = id;
                                        this.name = name;
                                        this.age = age;
                                        console.log( `age ${this.age}, name: ${this.name}, id: ${this.id} `);
                                    }
}
let car = new Car ('X', 'Tesla', 2020, 200, 0);
car.drive();
car.info();
car.increaseMaxSpeed(220);
car.changeYear(2022);
car.addDriver(1,'Vasya', 32);

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Popelyshka {
    constructor(name, age, legSize) {
        this.name = name;
        this.age = age;
        this.legSize = legSize;
    }
}
let arrOfPop = [
    new Popelyshka('Ira', 15,36),
    new Popelyshka('Dasha', 16, 37),
    new Popelyshka('Natalya', 18, 39),
    new Popelyshka('Masha', 19, 40),
    new Popelyshka('Katya', 22, 35),
    new Popelyshka('Lilya', 20, 37),
    new Popelyshka('Sasha', 33, 38),
    new Popelyshka('Pepi',23, 41),
    new Popelyshka('Kika',41, 34),
    new Popelyshka('Lilu',11, 39),
];

let prince = {
    name: 'Prince',
    age: 33,
    fondedShoe: 35
}

for (let popel of  arrOfPop) {
    if(popel.legSize === prince.fondedShoe){
        console.log(popel)
    }
}
