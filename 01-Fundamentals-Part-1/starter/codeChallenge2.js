

//data 1

let weightMark = 78
let heightMark = 1.69

let weightJohn = 92
let heightJohn = 1.95

let bmiJohn = (weightJohn/(heightJohn**2));
let bmiMark = (weightMark/(heightMark**2));


console.log(bmiMark, bmiJohn);


let markHigherBMI = bmiMark > bmiJohn
console.log(markHigherBMI)

if (markHigherBMI) {
	console.log(`Mark's BMI is Higher Than John's`)
} else {
	console.log(`John's BMI is Higher Than Mark's`)
}


/*
*/

//data 2

weightMark = 95
heightMark = 1.88

weightJohn = 85
heightJohn = 1.76

bmiJohn = (weightJohn/(heightJohn**2));
bmiMark = (weightMark/(heightMark**2));

console.log(bmiMark, bmiJohn);

markHigherBMI = bmiMark > bmiJohn
console.log(markHigherBMI)

if (markHigherBMI) {
	console.log(`Mark's BMI (${bmiMark}) is Higher Than John's (${bmiJohn})`)
} else {
	console.log(`John's BMI (${bmiJohn}) is Higher Than Mark's (${bmiMark})`)
}





