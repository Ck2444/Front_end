// 1 Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

const newDiv = document.querySelector(".main")

for (let i = 100; i >= 50; i -= 10) {
    const p = document.createElement('p');
    p.innerText = i
    newDiv.append(p)
}

//2 Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом stringscontainer. Строки взять произвольные.

const fruits = ['apple', 'banana', 'orange', 'kiwi', 'pineapple'];
const div = document.querySelector(".stringscontainer")

for (let index = 0; index < fruits.length; index++) {
    const p = document.createElement("p")
    p.innerText = fruits[index]
    div.append(p)
}

//3 Написать цикл, который проходится по массиву с объектами - у объектов свойства firstname, lastname и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом userscontainer.


const arrWithObjects = [
    {
        first_name: "Amelia",
        last_name: "Miller",
        age: 30
    },

    {
        first_name: "Steve",
        last_name: "Anderson",
        age: 19
    },

    {
        firs_tname: "Emily",
        last_name: "Johnson",
        age: 16
    },

    {
        first_name: "Andrew",
        last_name: "Davis",
        age: 48
    }
];
const div = document.querySelector(".userscontainer")
for (let i = 0; i < arrWithObjects.length; i++) {
    const user = arrWithObjects[i];
    if (user.age >= 18) {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");

        const name = document.createElement("p");
        name.innerText = `Firs tname: ${arrWithObjects[i].first_name};`;
        userCard.append(name);

        const surname = document.createElement("p");
        surname.innerText = `Last name: ${arrWithObjects[i].last_name};`;
        userCard.append(surname);

        const age = document.createElement("p");
        age.innerText = `Age: ${arrWithObjects[i].age};`;
        userCard.append(age);

        div.appendChild(userCard);

    }

}
