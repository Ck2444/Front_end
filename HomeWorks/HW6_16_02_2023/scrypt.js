//Напишите цикл for, который выводит консоль каждое второе число от 0 до 10

for (let index = 0; index <= 10; index += 2) {
    console.log(index)
}

// Напишите цикл for, который выводит в консоль  все числа от 55 до 20

for (let index = 50; index >= 20; index--) {
    console.log(index)
}

//Дан массив numbers. Вывести в консоль все числа из массива

const numbers = [3, 5, 11, 2, 8, 1, 6];
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index])
}

//Сформировать новый массив numberssquared и передать в него все элементы из массива numbers, возведенные в квадрат
const numbers = [3, 5, 11, 2, 8, 1, 6];
const numbers_squared = []
numbers_squared.push(numbers[0] ** 2, numbers[1] ** 2, numbers[2] ** 2, numbers[3] ** 2, numbers[4] ** 2, numbers[5] ** 2, numbers[6] ** 2)
console.log(numbers_squared)

//Создать переменную lastelem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)
const lastelem = numbers_squared[numbers_squared.length - 1];
console.log(lastelem)


// Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is  . He is  years old’

const user = {
    firstname: 'Ivan',
    lastname: 'Ivanov',
    age: 20,
    salary: 500
}
console.log(`User's name is ${user.firstname} ${user.lastname}. He is ${user.age} years old`)
