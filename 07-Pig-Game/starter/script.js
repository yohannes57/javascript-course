'use strict';

//score selecting elements
const player0E1 = document.querySelector(`.player--0`);
const player1E1 = document.querySelector(`.player--1`);
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0E1 = document.getElementById('current--0');
const current1E1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let scores, currentScore, activePlayer, playing;

//starting conditions
const gameInit = function () {
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 0;
	playing = true;
	score0El.textContent = 0;
	score1El.textContent = 0;
	current0E1.textContent = 0;
	current1E1.textContent = 0;

	diceEl.classList.add('hidden');
	player0E1.classList.remove('player--winner');
	player1E1.classList.remove('player--winner');
	player0E1.classList.add('player--active');
	player1E1.classList.remove('player--active');
};
gameInit();

//swich player function
const switchPlayer = function () {
	document.getElementById(`current--${activePlayer}`).textContent = 0;
	currentScore = 0;
	activePlayer = activePlayer == 0 ? 1 : 0;
	player0E1.classList.toggle('player--active');
	player1E1.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
	if (playing == true) {
		//generate random dice value
		const dice = Math.trunc(Math.random() * 6) + 1;
		// display the dice
		diceEl.classList.remove('hidden');
		diceEl.src = `dice-${dice}.png`;

		//check for rolled 1
		if (dice !== 1) {
			currentScore += dice;
			document.getElementById(
				`current--${activePlayer}`
			).textContent = currentScore;
			//current0E1.textContent = currentScore;
		} else {
			//switch to next player
			switchPlayer();
		}
	}
});

btnHold.addEventListener('click', function () {
	if (playing == true) {
		//1. add current score to active player score
		scores[activePlayer] += currentScore;
		document.getElementById(`score--${activePlayer}`).textContent =
			scores[activePlayer];

		//2. check if score is >= 100, if so finish game
		if (scores[activePlayer] >= 20) {
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.add('player--winner');
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.remove('player--active');
			playing = false;
			diceEl.classList.add('hidden');
		}

		//3. switch to player
		switchPlayer();
	}
});

btnNew.addEventListener('click', function () {
	gameInit();
});
