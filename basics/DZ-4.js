// Task-1
// for (let i = 0; i <= 11; i++) {
//     if(i === 0) {
//         console.log(`${i} - это ноль`);
//     } else if (i % 2 !== 0) {
//         console.log(`${i} - это нечетное число`);
//     } else {
//         console.log(`${i} - это четное число`);
//     }
// }

//Task-2

// const arr =[1,2,3,4,5,6,7];
// arr.splice(3,2);
// console.log(arr);

//Task-3
const arr1 = [];
// Формирование массива из 5 случайных цифр от 0 до 9
for (let i = 0; i < 5; i++) {
    arr1.push(Math.floor(Math.random() * 10));
}
console.log(arr1);
// сумма элементов массива
let summ = 0;
for (let i = 0; i < arr1.length; i++) {
    summ += arr1[i];
}
console.log(summ);
// минимальное число в массиве
let min = arr1[0];
for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] < min) {
        min = arr1[i];
    }
}
console.log(min);
// Нахождение в массиве числа 3
let num_3 = false;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === 3) {
        num_3 = true;
        break;
    }
}
console.log(num_3);

// Task-4

for (let i = 1; i <= 5; i++) {
    console.log('x'.repeat(i));
}