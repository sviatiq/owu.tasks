// Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
// Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
// Зробити таких функцій в районі 10 штук.
// Функція має приймати параметр, який буде відповідати за успішне чи не успішне виконання.
// Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
// Як приклад:
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави - Працюєте - Поїхали до дому - Повчились - Лягли спати.
//
// Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант, що при виконанні функції доїхати на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви забули гаманець і лишились голодні.

const alarm = 7;

function wakeUp(alarm) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (5 + Math.random() * 10 > alarm) {
                console.log('Проснулся!');
                resolve(alarm);
            } else {
                console.log('Проспал!!!');
                reject('Все плохо!');
            }
        }, 1000);
    })
}
function breakfast(isIngredientsExist) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isIngredientsExist) {
                console.log('Сажусь кушац овсяночку с омлетом!');
                resolve(isIngredientsExist);
            } else {
                console.log('Овсяночка закончилась!');
                reject('Нет ингредиентов!');
            }
        }, 1000);
    })
}
function goToJob(traffic) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (traffic) {
                console.log('Еду на Бентли на работу!');
                resolve(traffic);
            } else {
                console.log('Пробки...');
                reject('Дорога забита');
            }
        }, 1000);
    })
}
function goHome(traffic) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (traffic) {
                console.log('Еду домой на Бентли, наслаждаясь вечерним городом!');
                resolve(alarm);
            } else {
                console.log('Пробки, что за день?');
                reject('Все плохо! Стою в пробке');
            }
        }, 1000);
    })
}
function work(workNum) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (workNum) {
                console.log('Работы много, интересно, успею пообедать?');
                reject('Завалили работой! РАБотаю!');
            } else {
                console.log('Сегодня работы мало! Можно пообедать');
                resolve(workNum);
            }
        }, 2000)
    })
}
function dinner(workNum) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!workNum) {
                console.log('Такой вкусный обед! Сейчас бы чашечку кофе...');
                resolve(workNum);
            } else {
                reject('Не успел покушать!');
            }
        }, 2000);
    })
}
function drinkCoffee(workNum) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!workNum) {
                console.log('Пью вкуснейший капуч!');
                resolve(workNum);
            } else {
                console.log('Никакого кофе, дедлайны горят!');
                reject(`Не попил кофе!`);
            }
        }, 500);
    })
}
function learnProgramming(language) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (language.toLowerCase() === 'java' || language.toLowerCase() === 'js') {
                console.log('Учу программирование!');
                resolve(language);
            } else {
                console.log('Сегодня покодить не выйдет!');
                reject('Никакого кодинга:(');
            }
        }, 1000);
    })
}
function chillWithGirlfriend(games) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (games.toLowerCase() === 'mortal kombat' || games.toLowerCase() === 'ufc') {
                console.log('Провожу время с девушкой!');
                resolve(games);
            } else {
                console.log('Никакого чилла:(');
                reject('Консоль не работает!');
            }
        }, 1000);
    })
}
function readBooks(book) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (book.toLowerCase() === 'так говорил заратустра') {
                console.log('Читаю профессиональную литературу!');

                resolve(book);
            } else {
                console.log('Я не люблю такие книги читать');
                reject('Надо поменять жанр!');
            }
        }, 3000);
    })
}
function sleep(temperature) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (temperature < 15) {
                console.log('Сптлю...')
                resolve(temperature);
            } else {
                console.log('Опять не высыпаюсь. Так жарко!!!')
                reject('ШО? НУ ШО?')
            }
        }, 2000);
    })
}

async function main(){
    await wakeUp(alarm);
    await breakfast(true);
    await goToJob(true);
    await work(false);
    await dinner(false);
    await drinkCoffee(false);
    await goHome(true);
    await  learnProgramming('java');
    await chillWithGirlfriend('Mortal Kombat');
    await readBooks('так говорил заратустра');
    await sleep(12);
};


main();


