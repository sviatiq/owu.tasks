//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// const button = document.getElementById('btn');
// const text = document.getElementById('text');
// text.style.backgroundColor = 'red';
// button.onclick = () => {
//     text.style.display = 'none';
// };

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// const button = document.getElementById('btn');
// button.onclick = () => {
//     button.style.display = 'none';
// };

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
//
// const input = document.getElementById('inp');
// const button = document.getElementById('button');
//
// button.onclick = () => {
//     if(input.value < 18){
//         alert('Your age is less than 18');
//     }else{
//         alert('Welcome');
//     }
// };

//- Создайте меню, которое раскрывается/сворачивается при клике
// const menu = document.getElementById('menu');
// const menuItems = document.getElementById('menuItems');
// let isOpen = false;
// menu.onclick = () => {
//     if (isOpen) {
//         menuItems.style.display = 'block';
//         isOpen = false;
//     } else {
//         menuItems.style.display = 'none';
//         isOpen = true;
//     }
// };

//- Создать список комментариев , пример объекта коментария -
//{title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// const commentList = [
//     {title: 'Кенши', desc: 'Кенши обладает очень развитыми чувствами слуха и осязания, поэтому он может сражаться на равных с другими воинами. Меч его предков, населённый их душами, также помогает Кенши в сражениях. Кенши может чувствовать присутствие оппонента благодаря излучаемой от него энергии, а так же читать его мысли (впрочем, это правило распространяется только на землян), что позволяет ему заставать неприятеля врасплох. Кенши также полностью неуязвим для атак, нацеленных на глаза. Помимо этого, он умеет мгновенно переноситься с места на место, используя лишь усилия воли и мысли. Кенши умеет создавать мысленные копии себя и транслировать удары мечом силой мысли на расстоянии. Всё это делает его крайне опасным и непредсказуемым оппонентом.'},
//     {title: 'Кунг Лао', desc: 'основным оружием Кунг Лао является его широкополая шляпа с острыми, как лезвия бритвы, краями. Кунг Лао мастерски владеет этим необычным оружием — он может кидать её под любым углом и в любом направлении и даже использовать её как необычный бумеранг или запускать её по земле. В бою шляпу можно использовать не только для того, чтобы наносить увечья противникам, но и чтобы отрубать врагам конечности и даже разрубать их надвое. Также эта шляпа обладает магическими свойствами, поскольку, где бы она ни оказалась после броска, через несколько секунд она всегда возвращается своему владельцу на голову. Сам Кунг Лао также обладает некоторыми сверхспособностями — он умеет мгновенно перемещаться с одного места на другое, а также может раскручиваться на месте с огромной скоростью и создавать вокруг себя защитную ауру.'},
//     {title: 'Ермак', desc: 'Ермак — воин, созданный из многих душ, которые осознают себя как единая личность. Помимо отличного знания восточных единоборств, он владеет очень сильными способностями к телекинезу и может с его помощью манипулировать существами и предметами. Кроме того, Ермак умеет левитировать, выпускать из рук энергетические шары и телепортироваться.'}];
//
// commentList.forEach(user => {
//     const mainDiv = document.createElement('div');
//     const divTitle = document.createElement('div');
//     const divBody = document.createElement('div');
//     divTitle.innerText = `Title: ${user.title}`;
//     divBody.innerText = `Description: ${user.desc}`;
//     divTitle.style.backgroundColor = 'green';
//     divBody.style.backgroundColor = 'red';
//
//
//     let btn = document.createElement('button');
//     btn.innerText = 'OK';
//
//     let isOpen;
//     btn.onclick = () => {
//         if (isOpen) {
//             divBody.style.display = 'block';
//             isOpen = false;
//         } else {
//             divBody.style.display = 'none';
//             isOpen = true;
//         }
//     };
//
//     mainDiv.appendChild(divTitle);
//     mainDiv.appendChild(divBody);
//     mainDiv.appendChild(btn);
//     document.body.appendChild(mainDiv);
// });

//- Створити 2 форми по 2 інпути в кожній.
// Створити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');
// const form1 = document.forms.form1;
// const form2 = document.forms.form2;
//
// btn1.onclick = () => {
//     console.log(`${form1.t1.value}  ${form1.txt.value}`);
// };
//
// btn2.onclick = () => {
//     console.log(`${form2.t3.value}  ${form2.t4.value}`);
// };

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// function generateTable(rowsNum, columnNum, elInTable) {
//
//     const table = document.createElement('table');
//     let tr;
//     let td;
//
//     for (let i = 0; i < rowsNum; i++) {
//         tr = document.createElement('tr');
//
//
//         for (let i = 0; i < columnNum; i++) {
//             td = document.createElement('td');
//             td.innerText = elInTable;
//             tr.appendChild(td);
//
//         }
//         table.appendChild(tr);
//     }
//
//
//     table.appendChild(tr);
//     document.body.appendChild(table);
// }
//
// generateTable(7, 5, 7);

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
// const row = document.getElementById('row');
// const column = document.getElementById('column');
// const inner = document.getElementById('inner');
// const btn = document.getElementById('btn');
// let tr;
// let td;
//
// btn.onclick = () => {
//     const table = document.createElement('table');
//
//      for (let i = 0; i < row.value; i++) {
//          tr = document.createElement('tr');
//          for (let i = 0; i < column.value; i++) {
//              td = document.createElement('td');
//              td.innerText = inner.value;
//              tr.appendChild(td);
//          }
//          table.appendChild(tr);
//      }
//      table.appendChild(tr);
//      document.body.appendChild(table);
// };

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// - Створити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//     кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let badWords = ['lol', 'kek', 'cheburek', 'pizza', 'ggbb'];
//
// const elById = document.getElementById('text');
// const btnById = document.getElementById('btn2');
// btnById.onclick = () => {
//     let temp;
//     for (let i = 0; i < badWords.length; i++) {
//         if (elById.value.toLowerCase() === badWords[i] || elById.value.toLowerCase() !== badWords[i]) {
//             temp = elById.value.toLowerCase();
//         }
//     }
//     console.log(temp);
//
//
// };

// - Створити масив нецензурних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// btnById.onclick = () => {
//     for(let i = 0; i<badWords.length; i++){
//          elById.value.toLowerCase().includes(badWords[i])
//              ?
//              alert('You type in bad words!')
//              :
//              alert(elById.value);
//
//     }
// };

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//    При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

//-- взять массив пользователей
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// const itemById1 = document.getElementById('cbox1');
// const itemById2 = document.getElementById('cbox2');
// const itemById3 = document.getElementById('cbox3');
//
// itemById1.onclick = () => {
//     if (itemById1.checked) {
//         for (const item of usersWithAddress) {
//             if (item.status === false) {
//                 document.write(JSON.stringify(item));
//             }
//         }
//     }
// };
// itemById2.onclick = () => {
//     if (itemById2.checked) {
//         for (const item of usersWithAddress) {
//             if (item.age >= 29) {
//                 document.write(JSON.stringify(item));
//             }
//         }
//     }
// };
// itemById3.onclick = () => {
//     if (itemById3.checked) {
//         for (const item of usersWithAddress) {
//             if (item.address.city === 'Kyiv') {
//                 document.write(JSON.stringify(item));
//             }
//         }
//     }
// };

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
