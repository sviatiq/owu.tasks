// - создать массив с 20 числами.
let array = [2, 5, 7, 6, 4, 1, 8, 9, 10, 26, 73, 51, 62, 90, 0, 3, 11, 23, 21, 20];

// -- при помощи метода sort отсортировать массив.
// console.log(array.sort(function (item1, item2) {
// //     if (item1 < item2) {
// //         return true;
// //     } else {
// //         return false;
// //     }
// // }));

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
//TODO
// function customSort(array, callback) {
//    console.log(callback(array));
// }
// //
// customSort(array, function(array) {
//    array.reverse();
// });

// -- при помощи filter получить числа кратные 3
// console.log(array.filter(function (num) {
//     if (num % 3 === 0) {
//         return num;
//     }
// }));

// -- при помощи filter получить числа кратные 10
// console.log(array.filter(function (num) {
//     if (num % 10 === 0) {
//         return num;
//     }
// }));

// -- перебрать (проитерировать) массив при помощи foreach()
// array.forEach(item => console.log(item));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let mapResult = array.map(function (num) {
//     return num * 3;
// });
// console.log(mapResult);

// - создать массив со словами на 15-20 элементов.
// let wordArray = ['Sociable', 'Apple', 'Dad', 'Melon', 'Pizza', 'Knife', 'Opera', 'Juice', 'Lemon!', 'Neon', 'Window', 'Queen',
//     'Image', 'High', 'Fee', 'Grey', 'Bob', 'Candy!', 'Elephant', 'Restaurant', 'Toilet', 'unique', 'Valet', 'X-ray', 'yellow', 'zoom'];

// -- отсортировать его по алфавиту в восходящем порядке.
// let wordABC = wordArray.sort();
// console.log(wordABC);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// let wordCBA = wordArray.sort((a, b) => { return (a < b)});
// console.log(wordCBA);

// -- отфильтровать слова длиной менее 4х символов
// wordArray.map((word) => {
//     if (word.length < 4) {
//         console.log(word);
//     }
// });

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// wordArray.map(function (item) {
//     if (item.endsWith('!')) {
//         console.log(item);
//     }
// });

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [{name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}];
// console.log(users);
//- відсортувати його за  віком (зростання , а потім окремо спадання)
// const ageSort1 = users.sort((age1, age2) => age1.age > age2.age);
// console.log(ageSort1);
// const ageSort2 = users.sort((age1, age2) => age1.age < age2.age);
// console.log(ageSort2);

// // - відсортувати його за кількістю знаків в імені (зростання , а потім окремо спадання)
// const nameLengthSort = users.sort((word1, word2) => {
//     if (word1.name.length > word2.name.length) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(nameLengthSort);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let idMap = users.map((value, index) => {
//     value.id = index;
//     return value;
// });
// console.log(idMap);

// - відсортувати його за індентифікатором
// idMap.sort(function (value) {
//     if (value.id > value.id) {
//         return true;
//     } else {
//         return false;
//     }
// });

// //-- написать функцию калькулятора с 2мя числами и колбеком
// function calculatorWith2Nums(num1, num2, callback) {
//     console.log(callback(num1, num2));
// };
// calculatorWith2Nums(7, 3, function (num1, num2) {
//     return num1 + num2;
// });
// calculatorWith2Nums(7, 3, function (num1, num2) {
//     return num1 - num2;
// });
// calculatorWith2Nums(7, 3, function (num1, num2) {
//     return num1 / num2;
// });
// calculatorWith2Nums(7, 3, function (num1, num2) {
//     return num1 * num2;
// });
// calculatorWith2Nums(7, 3, function (num1, num2) {
//     return num1 ** num2;
// });

// //-- написать функцию калькулятора с 3мя числами и колбеком
// function calculatorWith3Nums(num1, num2, num3, callback) {
//     console.log(callback(num1, num2, num3));
// };
// calculatorWith3Nums(7, 3, 5, function (num1, num2, num3) {
//     return num1 + num2 + num3;
// });
// calculatorWith3Nums(7, 3, 5, function (num1, num2, num3) {
//     return num1 - num2 - num3;
// });
// calculatorWith3Nums(7, 3, 5, function (num1, num2, num3) {
//     return num1 * num2 * num3;
// });
// calculatorWith3Nums(7, 3, 5, function (num1, num2, num3) {
//     return num1 / num2 / num3;
// });
// calculatorWith3Nums(7, 3, 5, function (num1, num2, num3) {
//     return num1 ** num2 ** num3;
// });
// calculatorWith3Nums(7, 3, 5, function (num1, num2, num3) {
//     return num1 + num2 - num3;
// });
//
// let cars = [
//     {
//         producer: "subaru",
//         model: "wrx",
//         year: 2010,
//         color: "blue",
//         type: "sedan",
//         engine: "ej204x",
//         volume: 2,
//         power: 400
//     },
//     {
//         producer: "subaru",
//         model: "legacy",
//         year: 2007,
//         color: "silver",
//         type: "sedan",
//         engine: "ez30",
//         volume: 3,
//         power: 250
//     },
//     {
//         producer: "subaru",
//         model: "tribeca",
//         year: 2011,
//         color: "white",
//         type: "jeep",
//         engine: "ej20",
//         volume: 2,
//         power: 300
//     },
//     {
//         producer: "subaru",
//         model: "leone",
//         year: 1998,
//         color: "yellow",
//         type: "sedan",
//         engine: "ez20x",
//         volume: 2,
//         power: 140
//     },
//     {
//         producer: "subaru",
//         model: "impreza",
//         year: 2014,
//         color: "red",
//         type: "sedan",
//         engine: "ej204x",
//         volume: 2,
//         power: 200
//     },
//     {
//         producer: "subaru",
//         model: "outback",
//         year: 2014,
//         color: "red",
//         type: "hachback",
//         engine: "ej204",
//         volume: 2,
//         power: 165
//     },
//     {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
//     {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
//     {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
//     {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
//     {
//         producer: "mercedes",
//         model: "e200",
//         year: 1990,
//         color: "silver",
//         type: "sedan",
//         engine: "eng200",
//         volume: 2,
//         power: 180
//     },
//     {
//         producer: "mercedes",
//         model: "e63",
//         year: 2017,
//         color: "yellow",
//         type: "sedan",
//         engine: "amg63",
//         volume: 3,
//         power: 400
//     },
//     {
//         producer: "mercedes",
//         model: "c250",
//         year: 2017,
//         color: "red",
//         type: "sedan",
//         engine: "eng25",
//         volume: 2.5,
//         power: 230
//     }
// ];
//
// // Відфільтрувати масив за наступними критеріями :
//
// // - двигун більше 3х літрів
// let findCarsByVolume3 = cars.filter(item => item.volume > 3);
// console.log(findCarsByVolume3);
//
// // - двигун = 2л
// let findCarsByVolume2 = cars.filter(value => value.volume === 2);
// console.log(findCarsByVolume2);
//
// // - виробник мерс
// let findCarsByProducerMercedes = cars.filter(value => value.producer === 'mercedes');
// console.log(findCarsByProducerMercedes);
//
// // - двигун більше 3х літрів + виробник мерседес
// let findCarsByVolume3ProducerMercedes = cars.filter(value => value.volume > 3 && value.producer === 'mercedes');
// console.log(findCarsByVolume3ProducerMercedes);
//
// // - двигун більше 3х літрів + виробник субару
// let findCarsByVolume3ProducerSubaru = cars.filter(value => value.volume > 3 && value.producer === 'subaru');
// console.log(findCarsByVolume3ProducerSubaru);
//
// // - сили більше ніж 300
// let findCarsByPower300 = cars.filter(value => value.power > 300);
// console.log(findCarsByPower300);
//
// // // - сили більше ніж 300 + виробник субару
// let findCarsByPower300ProducerSubaru = cars.filter(value => value.power > 300 && value.producer === 'subaru');
// console.log(findCarsByPower300ProducerSubaru);
//
// // // - мотор серіі ej
// let findCarsByEngine = cars.filter(value => value.engine.startsWith('ej'));
// console.log(findCarsByEngine);
//
// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// let findCarsByPower300ProducerSubaruEngine = cars.filter(value => value.power > 300 && value.producer === 'subaru' && value.engine.startsWith('ej'));
// console.log(findCarsByPower300ProducerSubaruEngine);
//
// // // - двигун меньше 3х літрів + виробник мерседес
// let findCarsByVolumeLess3ProducerMercedes = cars.filter(value => value.volume < 3 && value.producer === 'mercedes');
// console.log(findCarsByVolumeLess3ProducerMercedes);
//
// // - двигун більше 2л + сили більше 250
// let findCarsByVolume2Power250 = cars.filter(value => value.volume > 2 && value.power > 250);
// console.log(findCarsByVolume2Power250);
//
// // - сили більше 250  + виробник бмв
// let findCarsByPower250ProducerBmw = cars.filter(value => value.power < 150 && value.producer === 'bmw');
// console.log(findCarsByPower250ProducerBmw);

//- взять следующий массив
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Ananas', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Lenina', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Viacheslava', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Lalala', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Gorkogo', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Kapusta', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Buterbroda', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'InnerJoinStreet', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Calcium', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Udemy', number: 121}}];

// -- отсортировать его по id пользователей в обратном опрядке
// usersWithAddress.sort(function (a, b) { return a > b;});

// -- отсортировать его по возрасту пользователей
// console.log(usersWithAddress.sort(function (user1, user2) {
//     if (user1.age > user2.age) {
//         return true;
//     } else {
//         return false;
//     }
// }));
//
// // -- отсортировать его по возрасту пользователей в обратном порядке
// console.log(usersWithAddress.sort(function (user1, user2) {
//     if (user1.age > user2.age) {
//         return false;
//     } else {
//         return true;
//     }
// }));
//
// // -- отсортировать его по имени пользователей
// let sortNames = usersWithAddress.sort((a, b) => { return (a.name > b.name) ;});
// console.log(sortNames);
//
// // -- отсортировать его по имени пользователей в обратном порядке
// let sortNames = usersWithAddress.sort((a, b) => { return ( a.name<b.name ) ;});
// console.log(sortNames);

// -- отсортировать его по названию улицы в алфавитном порядке
// console.log(usersWithAddress.sort((a,b) => { return (a.address.street > b.address.street);}));

// -- отсортировать его по номеру дома по возрастанию
// let homeNumSort = usersWithAddress.sort((a, b) => {
//     return a.address.number - b.address.number;
// });
// console.log(homeNumSort);
//
// // -- отфильтровать (оставить) тех кто младше 30
// let ageFilter = usersWithAddress.filter(value => value.age < 30);
// console.log(ageFilter);
//
// // -- отфильтровать (оставить) тех у кого отрицательный статус
// let statusFilter = usersWithAddress.filter(value => value.status === false);
// console.log(statusFilter);
//
// // -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let statusAndAgeFilter = usersWithAddress.filter(value => value.status === false && value.age < 30);
// console.log(statusAndAgeFilter);
//
// // -- отфильтровать (оставить) тех у кого номер дома четный
// usersWithAddress.filter(value => {
//     if (value.address.number % 2 === 0) {
//         console.log(value);
//     }
// });



