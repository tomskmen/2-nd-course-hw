let password = 'пароль'; // Задаем пароль

let userInput = prompt('Введите пароль'); // Запрашиваем ввод у пользователя

if (userInput === password) {
    alert('Пароль введен верно'); // Сообщение при верном вводе
} else {
    alert('Пароль введен неправильно'); // Сообщение при неверном вводе
}


let c = Number(prompt("Введите число:")); // Запрашиваем у пользователя число

if (c > 0 && c < 10) {
    console.log("Верно");
    alert("Верно"); // Выводим сообщение пользователю
} else {
    console.log("Неверно");
    alert("Неверно"); // Выводим сообщение пользователю
}

let d = Number(prompt("Введите первое число (d):")); // Запрос у пользователя
let e = Number(prompt("Введите второе число (e):"));

if (d > 100 || e > 100) {
    console.log("Верно");
    alert("Верно"); // Выводим сообщение пользователю
} else {
    console.log("Неверно");
    alert("Неверно"); // Выводим сообщение пользователю
}

let a = '2';
let b = '3';

// Преобразуем строки в числа перед сложением
alert(Number(a) + Number(b)); 


let monthNumber = Number(prompt("Введите номер месяца (от 1 до 12):")); // Запрашиваем ввод у пользователя

if (monthNumber < 1 || monthNumber > 12) {
    console.log("Неверно");
    alert("Неверно: в году только 12 месяцев!");
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log("Зима");
            alert("Зима");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Весна");
            alert("Весна");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Лето");
            alert("Лето");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Осень");
            alert("Осень");
            break;
    }
    console.log("Верно");
    alert("Верно");
}




