'use strict'


let isNumber = function(n) {

    return !isNaN(parseFloat(n)) && isFinite(n);

};

function game() {
    let gameStart = confirm('Угадай число от 1 до 100'),
        number,
        randomNumber;

if(!gameStart) {
    alert('Игра окончена')
    
    game();

} else {

    function createRandomNumber(min, max) { // делаю загадываемое число

        
        return function () {

        return Math.floor(Math.random() * (max - min)) + min;

        };
    };
        randomNumber = createRandomNumber(1, 100);

    console.log(randomNumber());
        

    let start = function() { //проверка на число

        number = prompt('Введите число');

        if(!isNumber(number)) {

            start();

        } 
        
        if( number > randomNumber ) {
        
                alert('Загаданное число меньше!');

                start();
        
            } else if ( number < randomNumber ) {
        
                alert('Загаданное число больше!');

                start;
        
            } else if (number === randomNumber) {
        
                alert('Красава, угадал!')

                game();
        
            }
        
    };

    start();

    

}

};

game();