/*

//Code challenge 1

const scoreAvg = (s1, s2, s3) => (s1 + s2 + s3)/3;

function checkWinner(dolphin, koala) {

	if (dolphin >= koala * 2) {
		console.log(`Dolphins win over Koalas (${dolphin},${koala})`);
	} else if (koala >= dolphin * 2) {
		console.log(`Koalas win over Dolphins (${koala},${dolphin})`);
	} else {
		console.log('No winner')
	}
}

//test 1
let dscore1 = 44;
let dscore2 = 23;
let dscore3 = 71;

let kscore1 = 65;
let kscore2 = 54;
let kscore3 = 49;

let dolphinAvg = scoreAvg(dscore1, dscore2, dscore3);
let koalaAvg = scoreAvg(kscore1, kscore2, kscore3);

console.log(dolphinAvg, koalaAvg);


checkWinner(dolphinAvg, koalaAvg);


//test 2
dscore1 = 85;
dscore2 = 54;
dscore3 = 41;

kscore1 = 23;
kscore2 = 34;
kscore3 = 27;

dolphinAvg = scoreAvg(dscore1, dscore2, dscore3);
koalaAvg = scoreAvg(kscore1, kscore2, kscore3);
checkWinner(dolphinAvg, koalaAvg);


//Code challenge 2

let bill;
let tip;
let total;

bill = 400
const calcTip = function(bill) {
	return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
}

const addTip = function(bill, tip){
	return bill + tip
};

console.log(`Test function returns ${calcTip(bill)}`);


let bills = [125, 555, 44];
let tips = [];
let totals = [];

tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

totals = [addTip(bills[0], tips[0]), addTip(bills[1], tips[1]), addTip(bills[2], tips[2])];

console.log(bills, tips, totals);




//Challenge 3

const person1 = {
	firstName: "Mark",
	lastName: "Miller",
	nameFull: function () {
		this.fullName = `${this.firstName} ${this.lastName}`
		return this.fullName;
	},
	mass: 78,
	height: 1.69,
	calcBMI: function() {
		this.BMI = this.mass / (this.height**2)
		return this.BMI
	}
};

const person2 = {
	firstName: "John",
	lastName: "Smith",
	nameFull: function () {
		this.fullName = `${this.firstName} ${this.lastName}`
		return this.fullName;
	},
	mass: 92,
	height: 1.95,
	calcBMI: function() {
		this.BMI = this.mass / (this.height**2)
		return this.BMI
	}
};

console.log(person1.calcBMI(), person2.calcBMI());
console.log(person1.nameFull(), person2.nameFull());

if (person1.calcBMI() > person2.calcBMI()) {
	console.log(`${person1.nameFull()}'s BMI (${person1.calcBMI()}) is higher than ${person2.nameFull()}'s BMI (${person2.calcBMI()})`)
} else if (person2.calcBMI() > person1.calcBMI()) {
	console.log(`${person2.nameFull()}'s BMI (${person2.calcBMI()}) is higher than ${person1.nameFull()}'s BMI (${person1.calcBMI()})`)
} else {
	console.log(`${person1.nameFull()}'s and ${person2.nameFull()}'s BMI are the same`)
}

*/


//CODE CHALLENGE #4
/*
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉 

Bonus:
4. Bonus:Writeafunction'calcAverage'whichtakesanarraycalled'arr'as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK 😀
*/

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function(bill) {
	return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
}
const addTip = function(bill, tip){
	return bill + tip
};

for (let i = 0; i < bills.length; i++) {

	console.log(calcTip(bills[i]));
	tips.push(calcTip(bills[i]));
	totals.push(addTip(bills[i], tips[i]));

}

console.log(bills, tips, totals)

const calcAverage = function(arr) {
	let sum = 0;
	for (let j = 0; j < arr.length; j++){
		sum += arr[j];
	}
	const avg = sum / arr.length
	return avg
}

console.log(`Your average bill total is ${calcAverage(totals)}`);
console.log(`Your average bill tip total is ${calcAverage(tips)}`);


