// Task-1

function cub(number) {
    return number ** 3;
}

console.log(cub(2) + cub(3));

// Task-2

let num = prompt('Введите число');
function nds(num) {
    return num * 0.13;
}
function zarplata(num) {
    (Number(num)) ? console.log(`Размер з/п за вычетом налогов ${num - nds(num)}`) : console.log('Неверное значение');
}
zarplata(num);

// Task-3

let param1 = Number(prompt('Введите число'));
let param2 = Number(prompt('Введите число'));
let param3 = Number(prompt('Введите число'));

function mininum(a, b, c) {
    if(a < b && a < c) {
        console.log(`Минимальное число ${a}`);
    } else if (a < b && a > c) {
        console.log(`Минимальное число ${c}`);
    } else if (a > b && b > c) {
        console.log(`Минимальное число ${c}`);
    } else {
        console.log(`Минимальное число ${b}`);
    }
}

function maximum(a, b, c) {
    if(a > b && a > c) {
        console.log(`Максимальное число ${a}`);
    } else if (a < b && b > c) {
        console.log(`Максимальное число ${b}`);
    } else if (a > b && b > c) {
        console.log(`Максимальное число ${a}`);
    } else {
        console.log(`Максимальное число ${c}`);
    }
}

mininum(param1, param2, param3);
maximum(param1, param2, param3);

// Task-4

function summ(a,b) {
    return Number(a) + Number(b);
}
function difference(a,b) {
    return Number(a) - Number(b);
}
function multiplication(a,b) {
    return Number(a) * Number(b);
}
function dividing(a,b) {
    return (b !== 0) ? Number(a) / Number(b) : 'На ноль делить нельзя';
}
console.log(summ(param1, param2));
console.log(difference(param1, param2));
console.log(multiplication(param1, param2));
console.log(dividing(param1, param2));