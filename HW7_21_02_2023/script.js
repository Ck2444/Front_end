//Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
// function getNumber(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }

//   console.log(getNumber(3, 5));

// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
// function printEven(a, b) {
//     let start;
//     let end;
//     if (a > b) {
//         start = a;
//         end = b;
//     } else {
//         start = b;
//         end = a;
//     }

//     for (let i = start; i >= end; i--) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }

// printEven(30, 42)

//Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
// function power(a, b) {
//     let result = a ** b
//     return result
// }
// console.log(power(3, 2))

//Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

// let result = 0

// function getNumber(number) {
//     for (let index = 0; index <= number; index++) {
//         result += index
//     }
// }
// getNumber(5)
// console.log(result)

//Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

function evenOdd(n, m) {
    let evenNum = 0;
    let oddNum = 0;

    for (let index = n; index <= m; index++) {
        if (index % 2 === 0) {
            evenNum += index
        } else {
            oddNum += index
        }
    }
    console.log(`Sum of even Numbers from ${n} to ${m} is ${evenNum}`)
    console.log(`Sum of odd Numbers from ${n} to ${m} is ${oddNum}`)
}
console.log(evenOdd(19, 100))