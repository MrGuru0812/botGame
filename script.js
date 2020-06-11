'use strict'

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function game() {
  let gameStart = confirm('Угадай число от 1 до 100');
  const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  console.log(randomNumber);
  
  if (!gameStart) {
    alert('Игра окончена');
    game();
  } else {
    function start() {
      //проверка на число
      
      const number = +prompt('Введите число');
      

      if (!isNumber(number)) {
        start();
      }

      if (number > randomNumber) {
        alert('Загаданное число меньше!');
        start();
      } else if (number < randomNumber) {
        alert('Загаданное число больше!');
        start();
      } else if (number === randomNumber) {
        alert('Красава, угадал!');
        game();
      }
    };
    start();
  }
}

game();






