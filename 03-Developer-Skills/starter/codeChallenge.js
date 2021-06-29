///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1. Under the problems
// - how to show the forecasted highs each day
// - array transformed to string separated by ...
// - what is the x days?  answer: index + 1

// 2) Breaking up into sub-problems
// - transform array into string
// - add in variablet to a string literal... of transform element into string
//  - strings needs to contain day (index + 1)
// - add ... between elements // should we concat the string after each loop?

const t1 = [17, 21, 23]
const t2 = [12, 5, -5, 0, 4]

const printForecast = function (arr) {
	let fore = ''
	for (let i = 0; i < arr.length; i++) {
		fore = fore + ` ... ${arr[i]}ºC in ${i + 1} days`
	}
	return fore + ` ...`
}

console.log(printForecast(t1))
console.log(printForecast(t2))
