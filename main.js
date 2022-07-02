var numberRandom = parseInt(Math.random() * 100);
var numberPerson = prompt('Введите число от 1 до 100');
while (numberPerson !== numberRandom) {
    if (numberPerson === null) {
        alert('Спасибо за игру!');
        break;
    } else if (numberPerson > numberRandom) {
        numberPerson = prompt('Меньше!');
    } else if (numberPerson < numberRandom) {
        numberPerson = prompt('Больше!');
    } else if (numberPerson == '' || numberPerson == undefined) {
        numberPerson = prompt ('Вы ввели не число! Введите число от 1 до 100')
    } else {
        alert('Правильно!');
        break;
    }
}
alert("Правильный ответ: " + numberRandom);
