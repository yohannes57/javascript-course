
let bill;
let tip;
let total;

bill = 275
let final = (bill >= 50 && bill <= 300) ? `The bill was ${bill}, the tip was ${(tip = .15) ? `${bill * tip}`: 'non'}, and the total was ${total=bill*(1+tip)}` : `The bill was ${bill}, the tip was ${(tip = .20) ? `${bill * tip}`: 'non'}, and the total was ${total=bill*(1+tip)}`;
console.log(final);

bill = 40
final = (bill >= 50 && bill <= 300) ? `The bill was ${bill}, the tip was ${(tip = .15) ? `${bill * tip}`: 'non'}, and the total was ${total=bill*(1+tip)}` : `The bill was ${bill}, the tip was ${(tip = .20) ? `${bill * tip}`: 'non'}, and the total was ${total=bill*(1+tip)}`;
console.log(final);

bill = 430
final = (bill >= 50 && bill <= 300) ? `The bill was ${bill}, the tip was ${(tip = .15) ? `${bill * tip}`: 'non'}, and the total was ${total=bill*(1+tip)}` : `The bill was ${bill}, the tip was ${(tip = .20) ? `${bill * tip}`: 'non'}, and the total was ${total=bill*(1+tip)}`;
console.log(final);