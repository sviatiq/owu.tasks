// - створити функцію яка виводить масив
function showArray(arr) {
    console.log(arr);
}

// - створити функцію, яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
function fillArray(arr) {
    for (let i = 0; i < 10; i++) {
        arr.push(Math.random());
    }

    showArray(arr);
}

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
function showMinNum(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        console.log(num1);
    } else if (num2 < num1 && num2 < num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
function showMaxNum(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
function showMaxMinNum(...args) {
    let min = args[0];
    let max = min;

    for (const number of args) {
        if (number < min) {
            min = number;
        }

        if (number > max) {
            max = number;
        }
    }
    return min;
    console.log(max);

}

// - створити функцію яка повертає найбільше число з масиву
function maxNumFromArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[0]) {
            array[0] = array[i];
        }
    }
    console.log(array[0]);
}

// - створити функцію яка повертає найменьше число з масиву
function minNumFromArray(array) {
    const min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[0]) {
            array[0] = array[i];
        }
    }
    console.log(array[0]);
}

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function itemsSum(array) {
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
        temp += array[i];

    }
    console.log(temp);
}

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function avg(array) {
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
        temp += array[i];
    }
    temp = temp / (array.length);
    console.log(temp);
}

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
function showObjectNum(array) {
    let num = 0;
    for (let i = 1; i <= array.length; i++) {
        num = i;
    }
    console.log(num);
}

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
function arrayNum(array) {
    let num = 0;
    for (const item of array) {
        for (const field in item) {
            num++;
        }
    }
    console.log(num);
}

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
function sameIndexSum(arr1, arr2) {
    let new_arr = [];
    for (const item1 in arr1) {
        for (const item2 in arr2) {
            if (item1 === item2) {
                new_arr.push(arr1[item1] + arr2[item2]);
            }
        }
    }
    console.log(new_arr);
}

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
function replaceI(array, num) {
    let temp;
    for (let i = 0; i < array.length; i++) {
        if (i === num) {
            temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
    }
    console.log(array);
}

//Создание массивов
const array = [1, 2, 3, 4, 5, 6];
const arr = [10, 2, 13, 14, 5, 26];
const empty_arr = [];
let obj_array = [{name: 'Sviat', age: 21, hello: 2}, {name: 'Julia'}, {id: 123}];
const changebleArray = [1, 2, 3, 4];
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 4, 5];
//Вызов функций
// showArray(array);
// fillArray(empty_arr);
// showMinNum(7, 3, 5);
// avg(array);
// showMaxNum(4, 31, 5);
// console.log(showMaxMinNum(1,4,2,5,12,62,74,3));
// showObjectNum(obj_array);
// arrayNum(array);
// maxNumFromArray(arr);
// minNumFromArray(arr);
// itemsSum(array);
// sameIndexSum(arr1, arr2);
// replaceI(changebleArray, 2);

// - *** Створити функцію, яка буде переносити елементи з значенням 0 у кінець масиву.
// Зберігаючи при цьому порядок ненульових значень.
// Довжина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

function replaceZeros(array) {
    let zeros = [];
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            zeros.push(0);
        }else{
            newArray.push(array[i]);
        }
    }
    console.log(newArray.concat(zeros));
}
let arrayA = [1,0,6,0,3];
let arrayB = [0,1,2,3,4];
let arrayC = [0,0,1,0];
//replaceZeros(arrayA);
//replaceZeros(arrayB);
//replaceZeros(arrayC);

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
function addTextToBlock() {
    const div = document.createElement('div');

    div.innerText = 'Hello owu';

    document.body.appendChild(div);
}
// addTextToBlock();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function addTextToBlock(element, text) {
    const div = document.createElement(element);

    div.innerText = text;

    document.body.appendChild(div);
}
// addTextToBlock('div', 'Hello, World!');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елементу в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в одному блоці
const cars = [
    { name: 'Ferrari', age: 19, other: 'blabla' },
    { name: 'Bentli', age: 24, other: 'someValue' },
    { name: 'Audi', age: 21, other: 'joyjoyjoy' },
    { name: 'BMW', age: 92, other: 'lolololo' },
    { name: 'Folkswagen', age: 1, other: 'ananas' },
    { name: 'Mercedes', age: 8, other: 'ogogogo' },
    { name: 'Nissan', age: 28, other: 'hahaha' },
    { name: 'Opel', age: 53, other: 'ktokto' },
    { name: 'Lamborgini', age: 9, other: 'lalala' },
    { name: 'Mustang', age: 12, other: 'dadada' },
];

function buildStructure(array, id) {
    let elementId = document.getElementById(id);

    for (const arrayElement of array) {
        let div = document.createElement('div');
        div.innerText = `${arrayElement.name} ${arrayElement.age} ${arrayElement.other}`;
        elementId.appendChild(div);
    }
}
//buildStructure(cars, 'books');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
function buildStructure(array, id) {
    let elementId = document.getElementById(id);

    for (const arrayElement of array) {
        let name = document.createElement('div');
        let age = document.createElement('p');
        let other = document.createElement('span');
        name.innerText = `${arrayElement.name} `;
        age.innerText = `${arrayElement.age}`;
        other.innerText =`${arrayElement.other}`;

        elementId.appendChild(name);
        elementId.appendChild(age);
        elementId.appendChild(other);
    }
}
// buildStructure(cars, 'books');


// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {
    id: 2,
    name: 'petya',
    age: 30,
    status: true
}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {
    user_id: 1,
    country: 'Ukraine',
    city: 'Ternopil'
}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

function mergeArrays(array1, array2) {
    for (const key1 of array1) {
        for (const key2 of array2) {
            if (key1.id === key2.user_id) {
                key1.address = key2;
            }
        }
    }
    return array1;
}
// console.log(mergeArrays(usersWithId, citiesWithId));

// ***- беремо завдання з правилами з уроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
let rules = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				},

			];

function createStructure(rules) {
    const wrap = document.createElement('div');
    wrap.id = 'wrap';
    for (let i = 0; i < rules.length; i++) {
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');

        div.className = `rules rule${i + 1}`;
        h2.innerText = rules[i].title;
        p.innerText = rules[i].body;

        div.appendChild(h2);
        div.appendChild(p);
        wrap.appendChild(div);

    }
    document.body.appendChild(wrap);
}
// createStructure(rules);


