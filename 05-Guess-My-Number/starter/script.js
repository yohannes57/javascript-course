'use strict';

/*

// SECTION: Understanding DOM 

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMsg = function (message) {
	document.querySelector('.message').textContent = message;
};

const resetGame = function () {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	score = 20;
	displayMsg('Start guessing...');
	document.querySelector('.guess').value = '';
	document.querySelector('.number').textContent = '?';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
	const guess = document.querySelector('.guess').value;
	console.log(guess);

	// when player doesn't not input number
	if (!guess) {
		displayMsg('😰 Guess a Number!');

		//Player guesses correct
	} else if (guess == secretNumber) {
		displayMsg('🎉 Correct Number!');
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';

		if (score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}
	} else if (guess != secretNumber) {
		if (score > 1) {
			displayMsg(
				guess > secretNumber ? '📈 Guess Is Too High' : '📉 Guess Is Too Low'
			);
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.score').textContent = 0;
			displayMsg('💀 Try Again');
		}
	}
});

/*
		//Player guesses too high
	} else if (guess > secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = '📈 Guess Is Too High';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.score').textContent = 0;
			document.querySelector('.message').textContent = '💀 Try Again';
		}

		//Player guesses too low
	} else if (guess < secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = '📉 Guess Is Too Low';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.score').textContent = 0;
			document.querySelector('.message').textContent = '💀 Try Again';
		}
	}*/

document.querySelector('.again').addEventListener('click', function () {
	resetGame();
});
