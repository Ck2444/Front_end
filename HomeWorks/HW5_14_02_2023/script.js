//Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа
let yourNumber = +prompt("Enter your number:");
let prozent = 10;
let result = yourNumber / 100 * prozent;
console.log(prozent + '% от ' + yourNumber + ' будет ' + result);


//Написать программу, которая получает два числа и выводит наименьшее
let number1 = +prompt('Enter first number:');
let number2 = +prompt('Enter second number:');

if (number1 > number2) {
    console.log('The first number is greater than the second');
} else if (number1 < number2) {
    console.log('The second number is greater than the first');
} else {
    console.log('The two numbers are equal');
}

//Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

let num = +prompt('Enter your number')
if (num > 100) {
    console.log('Your number is greater than 100');

} else if (num < 100) {
    console.log('Your number is less than 100');

} else {
    console.log('Your number is equal 100');
}

// Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, ’, если пользователь совершеннолетний, или ‘Hi, ’, если пользователь несовершеннолетний.
let name = prompt('What is your name?');
let age = +prompt('age?');

if (age > 18) {
    console.log('Hello!' + name)
} else if (age < 18) {
    console.log('Hi!' + name)
}

//Создайте массив из строк, чисел, NaN и объектов. Пример: ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN]
// Задача 1 Пройдитесь по массиву циклом for и выведите в консоли, чем является каждый элемент массива: строкой, числом или ни тем, ни другим (используя функции isNaN и typeof).

const arr = ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN];

for (let i = 0; i < arr.length; i++) {
    const type = typeof arr[i];
    if (type === 'number') {
        console.log(`Элемент с индексом ${i} является числом`);
    } else if (type === 'string') {
        console.log(`Элемент с индексом ${i} является строкой`);
    } else {
        console.log(`Элемент с индексом ${i} является ни тем, ни другим`);
    }
}


