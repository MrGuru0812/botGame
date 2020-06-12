'use strict'

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function game() {
  let gameStart = confirm('Угадай число от 1 до 100');
  const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  let count = 10,
  answer,
  endOfAttempts;
  
  if (!gameStart) {
    alert('Игра окончена');
    game();
  } else {
    function start() {

      const number = +prompt('Введите число');
      console.log(number);
        if(number === 0){

          alert('Спасибо за игру!');
          game();
        }
        
        if (!isNumber(number)) {
        alert('Введи число!')
        start();
      } 
      count--;
        if (count <= 0 ) {

        endOfAttempts= confirm('Попытки закончились, хотите сыграть еще?');

      if(endOfAttempts) {
        game();
      } else {
        alert('Спасибо за игру!')
      }

      } else if (number > randomNumber) {
        alert('Загаданное число меньше, осталось повторить: ' + count + ' попыток');
        start();
      } else if (number < randomNumber) {
        alert('Загаданное число больше, осталось повторить: ' + count + ' попыток');
        start();
      } else if (number === randomNumber) {
        answer = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть ещё?');
        if(answer){

          game;
        } else {

          alert('Спасибо за игру!');
        }
      }
    };
    start();
  }
}

game();






