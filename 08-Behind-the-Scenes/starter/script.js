'use strict';

/*
function calcAge(birthyear) {
	const age = 2021 - birthyear;

	function printAge() {
		let output = `${firstName} you are ${age}, born in ${birthyear}`;
		console.log(output);

		if (birthyear >= 1981 && birthyear <= 1996) {
			// const firstName = 'Stephen';  Scope will always look for the first available value in scope chain, they are defined in different scope
			var millenial = true;
			const millStr = `You are a millenial, ${firstName}`;
			console.log(millStr);

			function add(a, b) {
				return a + b;
			}

			output = 'NEW OUTPUT';
		}
		console.log(millenial); //var is scoped more broadly
		//console.log(add(2,3));  Will receive error b/c it is block scoped to if statement above
		console.log(output);
	}

	printAge();
	return age;
}

const firstName = 'Zach';
calcAge(1987);


console.log(me); // will return a 'undefined'
// console.log(job);  cannot be accessed before init
// console.log(year); cannot be accessed before init

var me = 'zach';
let job = 'coder';
const year = 1987;

// functions
addDecl(2, 3);
addExp(2, 3);
addArrow(2, 3);

function addDecl(a, b) {
	return a + b;
} //undefined if called before init

const addExp = function (a, b) {
	return a + b;
}; // not allowed

var addArrow = (a, b) => a + b; //returns undefined


// Example
// takeaway, do not use var.. always declare variables at the top of scope

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
	console.log('all products deleted');
}

var x = 1;
let y = 2;
const z = 3;

//test
//var creates a variable on the global window object which can
// have great unintended effects
console.log(x == window.x);


console.log(this);

const calcAge = function (birthyear) {
	console.log(2021 - birthyear);
	console.log(this);
};

calcAge(1987);

//arrow function
const calcAgeArrow = birthyear => {
	console.log(2021 - birthyear);
	console.log(this); //in arrow function this points to lexical scope
};
calcAgeArrow(1987);

const zach = {
	year: 1987,
	calcAge: function () {
		console.log(this);
		console.log(2021 - this.year);
	},
};

zach.calcAge();

const allee = {
	year: 1992,
};

//this keyword will always point to the object that calls the method;
//so below it points to allee instead of zach
allee.calcAge = zach.calcAge;
allee.calcAge();

const f = zach.calcAge;


var firstName = 'allee';

const zach = {
	firstName: 'zach',
	year: 1987,
	calcAge: function () {
		console.log(this);
		console.log(2021 - this.year);

		// //Solution 1
		// const self = this
		// const isMillenial = function () {
		// 	console.log(self.year >= 1981 && self.year <= 1996);
		// };
		// isMillenial();

		// Solution 2 - arrow functions inherit from parent this
		const isMillenial = () => {
			console.log(this.year >= 1981 && this.year <= 1996);
		};
		isMillenial();
	},

	greet: () => {
		console.log(this);
		console.log(`hey from ${this.firstName}`);
	},
};

zach.greet();
console.log(this.firstName);
zach.calcAge();

const addExp = function (a, b) {
	console.log(arguments);
	return a + b;
};
addExp(2, 3);

var addArrow = (a, b) => {
	console.log(arguments);
	return a + b;
}; //arguments doesnt work w/ arrow functions
addArrow(2, 5);
addArrow(2, 5, 7);

// primitive v reference values
let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const zach = {
	firstName: 'zach',
	age: 34,
};
const friend = zach;
friend.age = 30;

console.log(friend);
console.log(zach);
*/

//primitive types
let lastName = 'owens';
let oldLastName = lastName;
lastName = 'Goble';
console.log(lastName, oldLastName);

//reference types
const allee = {
	firstName: 'allee',
	lastName: 'Goble',
	age: 28,
};
const marriedAllee = allee;
marriedAllee.lastName = 'Owens';
console.log('before marriage', allee);
console.log('after marriage', marriedAllee);

//copy objrct
const allee2 = {
	firstName: 'allee',
	lastName: 'Goble',
	age: 28,
	family: ['blake', 'clayton'],
};

const alleeCopy = Object.assign({}, allee2);
alleeCopy.lastName = 'owens';
console.log('before marriage', allee2);
console.log('after marriage', alleeCopy);

alleeCopy.family.push('jessica');
alleeCopy.family.push('amanda');
console.log('after marriage', alleeCopy);
