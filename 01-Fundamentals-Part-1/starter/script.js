let js = 'no';
// console.log(40 + 8 + 23 - 10);

/*
let country = "United States";
let state = "California";
let continent = "NAMER";
let population = 330;

console.log("I'm in " + state + ", " + country + " population " + population)


let javaScriptFun = true;

console.log(javaScriptFun);
console.log(typeof true);
console.log(typeof javaScriptFun);
console.log(typeof 23);
console.log(typeof 'zach');

javaScriptFun = 'Yes!';

console.log(typeof javaScriptFun);

let year;

console.log("variable is " + year)
console.log("variable is " + typeof year)

let ago = 30;
age = 31;

const birthyear = 1987;


var job = 'programmer';
job = 'teacher';

// never write variable like this, always declare b/c this will be created on global level
lastName = "Owens";
console.log(lastName);

let currentYear = 2021;

const ageZach = currentYear - 1987;
const ageSarah = currentYear - 1990;
console.log(currentYear, ageZach, ageSarah);

console.log(ageZach * 2, ageSarah / 10, 2 ** 3);


const firstName = "greatest";
const lastName = "ever";

console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 2; // x = x / 2 = 50
x ++; // x = x + 1
x --; // x = x - 1
console.log(x);



//comparison operator
console.log(ageZach > ageSarah);
console.log(ageSarah >= 18);

console.log(currentYear - 1990 > currentYear - 2020);

let i, j;
i = j = 25 - 10 - 5; // x = y = 10
console.log(i, j);

const avgAge = (ageZach + ageSarah) / 2
console.log(ageZach, ageSarah, avgAge)

const firstName = "zach";
const job = "student";
const birthYear = 1987;

const zach = "I'm " + firstName + " a " + job + " born in " + birthYear;
console.log(zach);

const zachNew = `I'm ${firstName}, a ${job} born in ${birthYear}`;
console.log(zachNew);

console.log(`just a reg string..`);
console.log(`string with\nmultiple \nlines`);


console.log(`string with 
multiple
lines`);


const age = 17;
const isOldEnough = age >= 18;

if(isOldEnough) {
	console.log(`yes.. age is ${age} 🎉`)
} else {
	console.log(`no.. age is ${age} 💀`)
}


const birthyear = 1990;
let century;
if (birthyear <= 2000) {
	century = "20th Century"
} else {
	century = "21st Century"
}
console.log(century)


// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 19);

console.log(Number('zach'));
console.log(typeof NaN);

console.log(String(23), 23);


// Type Coercion
console.log("I am " + 23 + " Years Old");
console.log("23" - "10" - 3); //converts number
console.log("23" + "10" + 3); // adds as a string
console.log("23" * 2); //converts number
console.log("23" / 2); //converts number

console.log("23" > "18"); //converts number


let n = "1" + 1; // 1+1 to show string 11
n = n - 1; //converts string 11 to number and minus 1
console.log(n);  //result 10


// 5 falsey values: 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean("zach"));
console.log(Boolean(NaN));


// section 2 class 21
let money = 0;

money += 1

if (money) {
	console.log("Don't Spend the Money");
} else {
	console.log("Get A Job");
}


let height = 1;
if (height) {
	console.log("height defined");
} else {
	console.log("height undefined");
}



// section 2 class 22

const age = '18';
if (age === 18)  console.log("yous an adult (strict equal)");
//strict equal is var types need to be same

if (age == 18)  console.log("yous an adult (loose equal)");
//loose equal is var type can be different but JS implicitly changes type


let favorite = Number(prompt("whats your favorite number"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
	console.log("23 a great number");
} else if (favorite === 7) {
	console.log("7 a cool cat")
} else {
	console.log("this failed")
}

if (favorite !== 23) {
	console.log(`why choose ${favorite} and not 23`)
}


//section 2: 24 course
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasGoodVision && hasDriversLicense);
console.log(hasGoodVision || hasDriversLicense);
console.log(!hasDriversLicense);

const shouldDrive = hasGoodVision && hasDriversLicense;

if (shouldDrive) {
	console.log("You are able to drive");
} else {
	console.log("you cannot drive");
}

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (shouldDrive && !isTired) {
	console.log("You are able to drive");
} else {
	console.log("you cannot drive");
}


//section 2 video 26
const day = 'Wednesday';

switch (day) {
	case 'Monday':
		console.log('Plan course structure on Monday');
		console.log('Go to Meeting about coding');
		break;
	case 'Tuesday':
		console.log('Prepare Theory');
		break;
	case 'Wednesday':
	case 'Thursday':
		console.log('Write code examples');
		break;
	case 'Friday':
		console.log('Record Videos');
		break;
	case 'Saturday':
	case 'Sunday':
		console.log('enjoy weekend :)');
		break;
	default:
		console.log('this is a default');


}


// section 2 video 28

const age = 24;
age >= 18 ? console.log('I like Wine 🍷') : console.log('I can only drink water :(');

// an operator is an expression

// this is more common for tertiary
const drink = age >= 18 ?  'Wine' : 'water';
console.log(drink);

// this is if/else statement (longer form for the above on line 265)
let drink2;
if (age >= 18) {
	drink2 = 'I like Wine 🍷 drink 2';
} else {
	drink2 = 'I can only drink water :( drink 2';
}

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'Water 💧'}`)

*/




