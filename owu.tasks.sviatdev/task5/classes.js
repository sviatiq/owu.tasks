// // -  Створити функцію конструктор для об'єкту який описує теги
// // Властивості
// //  -назва тегу, опис його дій, масив з атрибутами (2-3 атрибути максимум)
// //  Кожен атрибут описати як окремий який буде містити
// //  -назву атрибуту, опис дії атрибуту
// // інформацію брати з htmlbook.ru
// //  Таким чином описати теги
// //  a, div, h1, span, input, form, option, select
//
// function Tag(tagName, description, arr) {
//     this.tagName = tagName;
//     this.description = description;
//     this.arr = arr;
// }
//
// // -  Створити класс  для об'єкту який описує теги
// // Властивості
// //  -назва тегу, опис його дій, масив з атрибутами (2-3 атрибути максимум)
// //  Кожен атрибут описати як окремий який буде містити
// //  -назву атрибуту, опис дії атрибуту
// // інформацію брати з htmlbook.ru
// //  Таким чином описати теги
// //  a, div, h1, span, input, form, option, select
//
// class Tag {
//     constructor(tagName, desc, arr) {
//         this.tagName = tagName;
//         this.desc = desc;
//         this.arr = arr;
//     }
// }
//
// const attr_a = [
//     {name: 'accesskey', desc: 'Активация ссылки с помощью комбинации клавиш.'},
//     {name: 'href', desc: 'Задает адрес документа, на который следует перейти.'}
// ];
// const attr_div = [
//     {name: 'align', desc: 'Задает выравнивание содержимого тега <div>.'},
//     {name: 'title', desc: 'Добавляет всплывающую подсказку к содержимому.'}
// ];
// const attr_h1 = [
//     {name: 'align', desc: 'Определяет выравнивание заголовка.'},
// ];
// const attr_span = [
//     {name: 'accesskey', desc: 'Активация ссылки с помощью комбинации клавиш.'},
//     {name: 'class', desc: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}
// ];
// const attr_input = [
//     {name: 'alt', desc: 'Альтернативный текст.'},
//     {name: 'autocomplete', desc: 'Включает или отключает автозаполнение.'}
// ];
// const attr_form = [
//     {name: 'enctype', desc: 'Способ кодирования данных формы'},
//     {name: 'method', desc: 'Метод протокола HTTP'}
// ];
// const attr_option = [
//     {name: 'disabled', desc: 'Заблокировать для доступа элемент списка'},
//     {name: 'label', desc: 'Указание метки пункта списка'}
// ];
// const attr_select = [
//     {name: 'accesskey', desc: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//     {name: 'required', desc: 'Список обязателен для выбора перед отправкой формы.'}
// ];
//
//
// const a = new Tag('<a>', 'Предназначен для создания ссылок', attr_a);
// const div = new Tag('<div>', 'Блочный элемент, предназначен для выделения фрагмента документа с целью изменения вида содержимого', attr_div);
// const h1 = new Tag('<h1>', 'Представляет собой наиболее важный заголовок первого уровня', attr_h1);
// const span = new Tag('<span>', 'Блочный элемент', attr_span);
// const input = new Tag('<input>', 'Позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем', attr_input);
// const form = new Tag('<form>', 'Устанавливает форму на веб-странице', attr_form);
// const option = new Tag('<option>', 'Определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', attr_option);
// const select = new Tag('<select>', 'Позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором', attr_select);
//
// console.log(a);
// console.log(div);
// console.log(h1);
// console.log(span);
// console.log(input);
// console.log(form);
// console.log(option);
// console.log(select);
//
// // - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// const car = {
//     model: 'Audi',
//     manufacturer: 'Audi Motors',
//     year: 2019,
//     maxSpeed: 280,
//     engine: 16,
//     drive: function () {
//         console.log(`Едем со скоростью ${car.maxSpeed}`);
//     },
//     info: function () {
//         console.log(car);
//     },
//     increaseSpeed: function (newSpeed) {
//         car.maxSpeed += newSpeed;
//     },
//     changeYear: function (newValue) {
//         car.year = newValue;
//     },
//     addDriver: function (driver) {
//         car.driver = driver;
//     }
// };
//
// car.drive();
// car.info();
// car.increaseSpeed(20);
// console.log(car.maxSpeed);
// car.changeYear(2018);
// console.log(car.year);
// car.addDriver('Sviat');
// console.log(car.driver);
// car.info();
//
// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// function Car(model, manufacturer, year, maxSpeed, engine) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = function () { console.log(`Едем со скоростью ${this.maxSpeed}`); }
//     this.info = function () { console.log(this); }
//     this.increaseSpeed = function(newSpeed){ this.maxSpeed +=newSpeed; }
//     this.changeYear = function(newValue){ this.year = newValue; }
//     this.addDriver = function(...driver){ this.driver = driver; }
// }
//
// const car = new Car('Audi', 'Audi Motors', 2019, 280, 16);
//  car.drive();
//  car.info();
//  car.increaseSpeed(20);
//  console.log(car.maxSpeed);
//  car.changeYear(2018);
//  console.log(car.year);
//  car.addDriver('Sviat', 'Julia');
//  console.log(car.driver);
//  car.info();
//
// // - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// class Car{
//     constructor(model, manufacturer, year, maxSpeed, engine){
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//
//     drive(){
//         console.log(`Едем со скоростью ${this.maxSpeed}`);
//     }
//
//     info(){
//         console.log(this);
//     }
//
//     increaseSpeed(newSpeed){
//         this.maxSpeed +=newSpeed;
//     }
//
//     changeYear(newValue){
//         this.year = newValue;
//     }
//
//     addDriver(...driver){
//         this.driver = driver;
//     }
// }
// const myCar = new Car('Audi', 'Audi Motors', 2011, 250, 12);
//
// myCar.drive();
// myCar.info();
// myCar.increaseSpeed(20);
// console.log(myCar.maxSpeed);
// myCar.changeYear(2018);
// console.log(myCar.year);
// myCar.addDriver('Sviat');
// console.log(myCar.driver);
// myCar.info();


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderella1 = new Cinderella('Maria', 19, 38);
const cinderella2 = new Cinderella('Julia', 20, 37);
const cinderella3 = new Cinderella('Natalia', 23, 36);
const cinderella4 = new Cinderella('Olya', 17, 39);
const cinderella5 = new Cinderella('Vika', 25, 38);
const cinderella6 = new Cinderella('Kristina', 20, 40);
const cinderella7 = new Cinderella('Katya', 18, 36);
const cinderella8 = new Cinderella('Nastya', 22, 41);
const cinderella9 = new Cinderella('Anya', 24, 39);
const cinderella10 = new Cinderella('Alina', 20, 38);


class Prince {
    constructor(name, age, slipperSize) {
        this.name = name;
        this.age = age;
        this.slipperSize = slipperSize;
    }
    findSlipper(cinderellas) {
        for (const size of cinderellas) {
            if(size.footSize === this.slipperSize){
                console.log(`${size.name}, with foot size ${size.footSize} must be with prince ${this.name}`);
            }
        }
    }

}

const cinderellas = [
    cinderella1, cinderella2, cinderella3, cinderella4, cinderella5,
    cinderella6, cinderella7, cinderella8, cinderella9, cinderella10
];
const prince = new Prince('Sviat', 21, 37);
prince.findSlipper(cinderellas);


// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// function Prince(name, age, slipperSize) {
//     this.name = name;
//     this.age = age;
//     this.slipperSize = slipperSize;
//     this.findCinderella = function (cinderellas) {
//         for (const size of cinderellas) {
//             if (size.footSize === this.slipperSize) {
//                 console.log(`${size.name}, with foot size ${size.footSize} must be with prince ${this.name}`);
//             }
//         }
//     }
// }
// const prince_S = new Prince('Sviat', 21, 37);
// prince_S.findCinderella(cinderellas);

