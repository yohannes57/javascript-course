'use strict'

/*
let hasDriverLic = false;
const passTest = true;

if (passTest) hasDriversLic = true;

if (hasDriverLic) console.log('I can drive')



//Function Declarations
function logger() {
	console.log('my name is zach');
}

// calling/invoking/running function
logger();
logger();

function fruitProcessor(apples, oranges) {
	console.log(apples, oranges);
	const juice = `Juice with ${apples} apples and ${oranges} orange.`;

	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//function declaration

function calcAge1(birthYear) {
	
	return 2021 - birthYear;
	
}

console.log(calcAge1(1990));
console.log(calcAge1(1987));
console.log(calcAge1(1975));

//function expression
const calcAge2 = function (birthYear) {
	return 2021 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2)


//arrow functions
const calcAge = birthYear => 2021 - birthYear;
let age = calcAge(1991);
console.log(age);

const yearsUntilRetire = (birthYear, firstName) => {
	const age = 2021 - birthYear;
	const retire = 65 - age;

	return `${firstName} retires in ${retire} years`;
}

console.log(yearsUntilRetire(1987, 'Zach'));
console.log(yearsUntilRetire(1975, 'Jonas'));


// functions called within functions
function cutPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {

	const applePieces = cutPieces(apples);
	const orangePieces = cutPieces(oranges);

	console.log(apples, oranges);
	const juice = `Juice with ${apples} apples w/ ${applePieces} pieces and ${oranges} oranges w/ ${orangePieces} pieces.`;

	return juice;
}

console.log(fruitProcessor(2, 3))



const calcAge = function(birthYear) {
	return 2021 - birthYear
}
const calcRetire = function(age) {
	return 65 - age
}

const yearsUntilRetire  = function(birthYear, firstName) {
	
	const age = calcAge(birthYear);
	const retire = calcRetire(age);

	if (retire > 0){
		console.log(`${firstName} retires in ${retire} years`);
		return retire;
	} else {
		console.log(`${firstName} has retired 🎉`);
		return -1;
	}
}

console.log(yearsUntilRetire(1987, 'Zach'));
console.log(yearsUntilRetire(1950, 'Brad'));




// Arrays Class section 39

let friends = ['Mike', 'Stephen', 'Peter'];
console.log(friends);

let years = new Array(1991, 1984, 1989, 2008, 2021);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Jay';
console.log(friends);

//Arrays are not primitive variables so they can be mutated

const zach = ['Zach', 'Owens', 2021 - 1987, 'LP', friends];
console.log(zach);
console.log(zach.length);

//function expression
const calcAge = function (birthYear) {
	return 2021 - birthYear;
}

//separae variables
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
console.log(age1, age2, age3);


//calc in arrays
const agesCalc = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];

console.log(agesCalc);


//Array Operators class 40

let friends = ['Mike', 'Stephen', 'Peter'];
console.log(friends);

//add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//remove elements
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Stephen'));
console.log(friends.indexOf('Bob')); // elementt not in array (returns -1)

console.log(friends.includes('Stephen')); // element returns true bc bob not in array
console.log(friends.includes('Bob')); // element returns false bc bob not in array

if (friends.includes('Peter')) {
	console.log('You have Peter as friends')
}



// JS Object or dictionaries
const zach = {
	firstName: 'Zach',
	lastName: 'Owens',
	age: 2021 - 1987,
	job: 'Leanplum',
	friends: ['Stephen', 'Klay', 'Draymond']
};

console.log(zach);
// dot notation
console.log(zach.lastName);
//bracket notation
console.log(zach[`lastName`]);

const name = 'Name';
//brackets notation important for below case
console.log(zach['first' + name]);
console.log(zach['last' + name]);

//dots notation is to be used b/c its easier
const interestedIn = prompt('What do you want to know about Me? Choose between First Name, Last Name, age, job or friends');

if (zach[interestedIn]){
	console.log(zach[interestedIn]);
	alert(`You have choosen ${interestedIn} which is ${zach[interestedIn]}`)
} else {
	console.log('Wrong Request');
	alert("Not available");
}

zach.location = "United States";
zach['twitter'] = 'zach';
console.log(zach);

//Challenge .. "Zach has 3 friends, and his best friend is called Stephen"

console.log(`${zach.firstName} has ${zach.friends.length} friends, and his best friend is called ${zach.friends[0]}`)


const currentYear = new Date().getFullYear()

const zach = {
	firstName: 'Zach',
	lastName: 'Owens',
	birthYear: 1987,
	job: 'Leanplum',
	friends: ['Stephen', 'Klay', 'Draymond'],
	hasDriversLicense: true,
	// calcAge: function(birthYear) {
	// 	return currentYear - birthYear
	// }
	// calcAge: function() {
	// 	return currentYear - this.birthYear;
	calcAge: function() {
		this.age = currentYear - this.birthYear
		return this.age;
	},
	getSummary: function() {
		return `${this.firstName} is a ${this.calcAge()} yr old ${this.job} and has ${this.hasDriversLicense ? 'a': 'no'} Drivers License`
		}
	};

console.log(zach);

//Challenge :  write a method called summary
// write "Zach is a 34 year old student, and he has a drivers license(or no drivers license)"
console.log(zach.getSummary());
zach.hasDriversLicense = false
console.log(zach.getSummary());



//For loops. Section 2 Video 46

// for loop keeps running count while condition is true

for(let rep = 1; rep <= 10; rep ++) {
	console.log(`Lifting weights, rep number ${rep}`)
}


const zach = ['Zach', 'Owens', 2021 - 1987, 'LP', ['steph', 'klay', 'draymond']]
const types = [];

// for (let i = 0; i < zach.length; i++) {
// 	console.log(zach[i]);

// 	//filling an array. reading one array to add to another array
// 	//types[i] = typeof zach[i];

// 	types.push(typeof zach[i]);
// }

console.log(types);



const birthYears = [1991, 2007, 1969, 2010];
const currentYear = new Date().getFullYear()
const ages = [];

for(let j = 0; j < birthYears.length; j++) {
	let calc = currentYear - birthYears[j];
	console.log(`Years calculation is ${calc}`);
	ages.push(calc);
}
console.log(ages);


// continue and break statements
// continue tells you to continue calculation; break will terminate calc

console.log('----ONLY STRINGS----')
for (let i = 0; i < zach.length; i++) {
	
	if (typeof zach[i] !== 'string') continue;

	console.log(zach[i], typeof zach[i]);

}

console.log('----BREAK WITH NUMBERS----')
for (let i = 0; i < zach.length; i++) {
	
	if (typeof zach[i] === 'number') break;

	console.log(zach[i], typeof zach[i]);

}



// section 2 video 48;  reverse looping over 

const zach = ['Zach', 'Owens', 2021 - 1987, 'LP', ['steph', 'klay', 'draymond']]

for (let i = zach.length-1; i >= 0; i--) {
	console.log(zach[i], i)
;}



// loop inside a loop

for (let exercise = 1; exercise < 4; exercise++) {

	console.log(`------starting exercise ${exercise}`);

	for(let rep = 1; rep < 6; rep ++) {
		console.log(`Excercise #${exercise}; Lifting weights rep #${rep}`)
	}
}
*/

// section 2 video 49;  the while loop

let rep = 1
while (rep < 11) {
	console.log(`While Loop, this is rep #${rep}`)
	rep++
}

let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice)

if (dice == 6) {
	console.log(`You rolled a ${dice} on the first try!`)
} else {
	lettimes = 0
	while (dice != 6) {
		console.log(`You rolled a ${dice}`)
		dice = Math.trunc(Math.random() * 6) + 1
		times++
		if (dice == 6) console.log(`You rolled a ${dice} on your ${times} turns!`)
	}
}
