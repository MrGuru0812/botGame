'use strict'

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function game() {
  let gameStart = confirm('Угадай число от 1 до 100');
  const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  let  count = 10,
  answer,
  endOfAttempts;

  if (!gameStart) {
    alert('Игра окончена');

  } else {
    function start() {
      const number = +prompt('Введите число');
      count--;
        if(number === 0){

          alert('Спасибо за игру!');
          
        } 
        
        if (!isNumber(number)) {
        alert('Введи число!')
        start();
      
      } else if (number === 0) {

        alert ('Спасибо за игру!');

      } else if (count <= 0 ) {
        
        endOfAttempts= confirm('Попытки закончились, хотите сыграть еще?');
                if(endOfAttempts === true) {
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
      
        if(answer === true){
          game();
        } else {
          alert('Спасибо за игру!');
        }
      }
    };
    start();
  }
}
game();






