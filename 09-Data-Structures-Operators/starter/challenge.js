///Code Challenge #4
/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.


Test data (pasted to textarea, including spaces):
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs): 
underscoreCase ✅
firstName ✅
someVariable ✅
calculateAge ✅
delayedDeparture ✅


Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data! GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
	const text = document.querySelector('textarea').value;
	const arr = text.split('\n');
	console.log(arr);

	for (const [i, row] of arr.entries()) {
		const [first, second] = row.toLowerCase().trim().split('_');

		const output = `${first}${second.replace(
			second[0],
			second[0].toUpperCase()
		)}`;

		console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
	}
});

/*

document.querySelector('button').addEventListener('click', function () {
	const text = document.querySelector('textarea').value;
	const arr = text.split('\n');
	console.log(arr);

	for (let i = 0; i < 5; i++) {
		const check = '✅';
		const str = `${changeCamelCase(arr[i])
			.trimStart(' ')
			.padEnd(20)}${check.repeat(i + 1)}`;
		console.log(str);
	}
});

const changeCamelCase = function (name) {

	const lowerName = name.toLowerCase().split('_');

	const secondName = lowerName[1].replace(
		lowerName[1][0],
		lowerName[1][0].toUpperCase()
	);

	return lowerName[0] + secondName;
};


//Code Challenge #3

Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create anarray 'events' of the differentgameeventsthathappened(no duplicates)
2. Afterthegamehasfinished,iswasfoundthattheyellowcardfromminute64 was unfair. So remove this event from the game events log.
3. Computeandlogthefollowingstringtotheconsole:"Aneventhappened,on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loopover'gameEvents'andlogeachelementtotheconsole,marking whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽   GOAL

const gameEvents = new Map([
	[17, '⚽ GOAL'],
	[36, '🔁 Substitution'],
	[47, '⚽ GOAL'],
	[61, '🔁 Substitution'],
	[64, '🔶 Yellow card'],
	[69, '🔴 Red card'],
	[70, '🔁 Substitution'],
	[72, '🔁 Substitution'],
	[76, '⚽ GOAL'],
	[80, '⚽ GOAL'],
	[92, '🔶 Yellow card'],
]);

console.log(gameEvents);

//1. Unique Events in Array
const uniqueEvents = [...new Set(gameEvents.values())];
console.log(uniqueEvents);

// 2. Remove the yellow from the 64th minute of the map
gameEvents.delete(64);
console.log(gameEvents);

// 3. Log the following to console "An event happened, on average, every 9 minutes"
const time = [...gameEvents.keys()].pop();
console.log(
	`An event happened, on average, every ${time / gameEvents.size} minutes`
);

//4. loop over gameEvents and log each element marking whether first half v second half
for (const [min, event] of gameEvents) {
	const half = min <= 45 ? `[First Half]` : `[Second Half]`;
	console.log(`${half} ${min}: ${event}`);
}



We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.

Your tasks:

1. Createoneplayerarrayforeachteam(variables'players1'and 'players2')
2. Thefirstplayerinanyplayerarrayisthegoalkeeperandtheothersarefield players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Createanarray'allPlayers'containingallplayersofbothteams(22 players)
4. Duringthegame,BayernMunich(team1)used3substituteplayers.Socreatea new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Basedonthegame.oddsobject,createonevariableforeachodd(called 'team1', 'draw' and 'team2')
6. Writeafunction('printGoals')thatreceivesanarbitrarynumberofplayer names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. Theteamwiththeloweroddismorelikelytowin.Printtotheconsolewhich team is more likely to win, without using an if/else statement or the ternary operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
		[
			'Neuer',
			'Pavard',
			'Martinez',
			'Alaba',
			'Davies',
			'Kimmich',
			'Goretzka',
			'Coman',
			'Muller',
			'Gnarby',
			'Lewandowski',
		],
		[
			'Burki',
			'Schulz',
			'Hummels',
			'Akanji',
			'Hakimi',
			'Weigl',
			'Witsel',
			'Hazard',
			'Brandt',
			'Sancho',
			'Gotze',
		],
	],
	score: '4:0',
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
	date: 'Nov 9th, 2037',
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};


//// CHALLENGE #2

//1.
for (const [i, n] of game.scored.entries()) console.log(`Goal ${i}: ${n}`);

//2.
const calcAvgOdds = function (n) {
	let avg = 0;
	let odds = Object.values(n);
	console.log(odds);
	for (const odd of odds) avg += odd;
	avg /= odds.length;
	console.log(avg);
};
calcAvgOdds(game.odds);

//3.

for (const [team, odds] of Object.entries(game.odds)) {
	const teamName = team === 'x' ? 'draw' : `victory ${game[team]}`;
	console.log(`Odd of ${teamName}: ${odds}`);
}

//4.

//5.




////// CHALLENGE #1
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5.
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6.

const printGoals = function (...players) {
	console.log(`There where ${players.length} goals scored`);
	console.log(players, players.length);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7.
team1 > team2 && console.log(`${game.team2} is likely to win`);
team1 < team2 && console.log(`${game.team1} is likely to win`);
*/
