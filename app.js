'use strick';

// botton CHECK  

let secretNumber = Math.trunc(Math.random()* 20) + 1;
let score = 20;
let hightscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
};

document.querySelector('.check').addEventListener('click' , function() {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        displayMessage('🚫 No Number');

        // When you win 
    }else if (guess === secretNumber){
        document.querySelector('.message').textContent = '🏆Correct Number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#32CD32';
        document.querySelector('.number').style.width = '25rem' ;
        
        if (score > hightscore) {
            hightscore = score ;
            document.querySelector('.highscore').textContent = hightscore;
        }
    }else if (guess > secretNumber) {
        if(score > 0) {
            // document.querySelector('.message').textContent = '📈Too Hight';
            displayMessage('📈Too Hight')
            // score = score - 1;
            score--;
            document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#DC143C';
        } else {
            document.querySelector('.message').textContent = '💣You Lose The Game';
        }
    }else if(guess < secretNumber) {
        document.querySelector('.message').textContent = '📉Too Low';
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#DC143C';
    }
    
});

// botton: AGAIN

document.querySelector('.again') .addEventListener('click' , function() {
    score = 20 ;
    secretNumber = Math.trunc(Math.random()* 20) + 1;

    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';

    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('.number').style.width = '15rem';
})




