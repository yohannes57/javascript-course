// Remember, we're gonna use strict mode in all scripts now!
'use strict'

/*
const x = 23
console.log(x)

let n = `this is working ${x}`

console.log(n)


// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// 1) Understanding the problem
// - what is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - Whats a sensor error?  What to do about it?

// 2) Breaking up into sub-problems
// How to ignore errors?
// find max and min values in array
// subtract min from max (amplitude) and return it

let max = temperatures[0]
for (let i = 1; i < temperatures.length; i++) {
	if (temperatures[i] > max) {
		max = temperatures[i]
	}
}

const calcTempAmplitude = function (t1, t2) {
	let max = temps[0]
	let min = temps[0]
	for (let i = 1; i < temps.length; i++) {
		let curTemp = temps[i]
		if (curTemp > max) {
			max = curTemp
		}
		if (curTemp < min) {
			min = curTemp
		}
	}

	console.log(max, min)
	let amplitude = max - min
	return amplitude
}

console.log(calcTempAmplitude(temperatures))


// PROBLEM 2:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
// Should we implement duplicate functionality?  Not at all

// 2) Breaking up into sub-problems
// the answer is to merge 2 arrays

const calcTempAmplitude = function (t1, t2) {
	let temps = t1.concat(t2)
	console.log(temps)

	let max = temps[0]
	let min = temps[0]
	for (let i = 1; i < temps.length; i++) {
		let curTemp = temps[i]
		if (curTemp > max) {
			max = curTemp
		}
		if (curTemp < min) {
			min = curTemp
		}
	}

	console.log(max, min)
	let amplitude = max - min
	return amplitude
}

console.log(calcTempAmplitude([4, 5, 6], [-1, 10, 3, 9]))

*/

const measureKelvin = function () {
	const measurement = {
		type: 'temp',
		unit: 'celsius',
		//prompt always returns string
		//fix bug
		//value: prompt('degree celsius:'),
		value: Number(prompt('degree celsius:')),
	}

	//debugger command is debugger

	// find bug
	console.log(measurement)
	console.table(measurement)
	const kelvin = measurement.value + 273
	return kelvin
}

//Identify Bug
console.log(`The Kelvin temp measure is ${measureKelvin()}`)
