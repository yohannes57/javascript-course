'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights.split('+'));

const airCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, depart, arrival, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🛑' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${airCode(depart)} to ${airCode(arrival)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45);
  console.log(output);
}
/*
const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = 0,
    mainIndex = 0,
    address = 'TBD',
    time = 'Plz Order',
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },

  orderPasta(i1, i2, i3) {
    console.log(`This is your pasta order with ${i1}, ${i2}, ${i3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///WORKING WITH STRINGS: Fundamentals

////PART 3

console.log('a+very+nice+string'.split('+'));
const name = console.log('Zach Owens'.split(' '));
const [first, last] = 'Zach Owens'.split(' ');
console.log(first, last);

const newName = ['Mr', first, last.toUpperCase()].join(' ');
console.log(newName);

const capitalize = function (name) {
  const names = name.split(' ');
  const nameUpper = [];
  for (const n of names) {
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
};

capitalize('allessondra ann goble');
capitalize('zach owens');

//padding
const message = 'Go to Gate 50';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Zach'.padStart(25, '+').padEnd(35, '+'));

//real world example
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);

  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(12395837));
console.log(maskCreditCard(123958349381877));

// Repeat Method
const weatherMsg = 'Bad weather ... All Departures delayed...';
console.log(weatherMsg.repeat(5));

function planeQue(n) {
  const p = '✈️';
  console.log(`There are ${n} planes in Queue ${p.repeat(n)}`);
}

planeQue(3);
planeQue(6);

///PART 2

const airline = 'Southwest Airlines';
const plane = 'A320';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//example: fix capital in name
const passenger = 'zAcH';

const passengerLower = passenger.toLowerCase();
const passenterCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passenterCorrect);

//example: comparing emails
const email = `hello@zach.me`;
const loginEmail = ' Hello@zAch.me  \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email == normalizedEmail);

///replacing parts of string
const priceUS = `268.49$`;
const priceGB = priceUS.replace('$', '£').replace('.', ',');
console.log(priceGB);

let announcement = `All Passengers come to boarding door 23. Boarding door 23!`;
console.log(announcement.replace('door', 'gate')); // targets first occurences
console.log(announcement.replace(/door/g, 'gate')); // targets all/global occurences

// Boolean Methods on strings
const planeNew = `Airbus A320neo`;
console.log(plane.includes('A320'));
console.log(planeNew.includes('A320'));
console.log(planeNew.startsWith('Air'));

if (planeNew.startsWith('Airbus') && planeNew.endsWith('neo')) {
  console.log('part of new airbus family');
}

//practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife')) {
    console.log('You are not allowed on board, remove items');
  } else {
    console.log('welcome aboard');
  }

  console.log(baggage);
};

checkBaggage('I have laptop knife Food');
checkBaggage('Socks and cameRa');
checkBaggage('Got some snacks and a gun for protection');


//PART 1
const airline = 'Southwest Airlines';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(`B737`[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('S')); //gives first occurence
console.log(airline.lastIndexOf('s')); // gives last occurence of
console.log(airline.indexOf('Airlines'));

console.log(airline.slice(10));
console.log(airline.slice(10, 13));

//extract first word w/o knowing index, not hardcoding
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMidSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s == 'B' || s == 'E') console.log('You Got Middle Seat');
  else console.log('You got lucky');
};

checkMidSeat('11B');
checkMidSeat('23C');
checkMidSeat('3E');

//JS calls the below string function to convert to object since String is a primitive and we call a method on a string
console.log(new String('zach'));
console.log(typeof new String('zach'));

//All String methods return a primitive.   EX:
console.log(typeof new String('zach').slice(1));


const question = new Map([
  ['question', 'What is the best programming language'],
  [1, 'c'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again'],
]);
console.log(question);

//Converting an Object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get(question));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 3;
// const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') == answer));

//convert Map to an Array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);


/////////
//Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italian');
rest.set(1, 'Roma');
rest.set(2, 'Cinque Terre');
console.log(rest);
rest.set('categories', []);

rest
  .set('categories', ['antipasto', 'drinks'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

console.log(rest);

console.log(rest.get(true));
console.log(rest.get(1));
console.log(rest.get('categories'));

const time = 21;
console.log(rest.get(time > rest.get(open) && time < rest.get(closed)));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);

const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest);

console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);


/////////////
// SETs: collection of unique values; can't have duplicates

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto']);
console.log(ordersSet);

console.log(new Set('Zach'));
console.log(ordersSet.size);
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
console.log(ordersSet);
console.log(ordersSet.size);

ordersSet.delete('Pizza');
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//Example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnq = new Set(staff);
console.log(staffUnq);

console.log(new Set('zachowens').size);


/////
////looping objects: object keys, values, entries

//property NAMES (Keys)
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entries mehtod == names(keys) + values in an array
const entries = Object.entries(openingHours);
console.log(entries);

// [day, value]
for (const [day, { open, close }] of entries) {
  console.log(`On weekday ${day} we open at ${open}, and close at ${close}`);
}


/////
//// optional chaining

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

//WITH optional chaining
console.log(restaurant.openingHours.mon?.hours);
console.log(restaurant.openingHours?.mon?.hours);

//example
const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method doesnt exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method doesnt exist');

//Arrays -
const users = [{ name: 'Zach', email: 'zach@me.com' }];
console.log(users[0]?.name ?? 'User array empty');


/////
///enhanced object literals
// see above notes

////
////Looping arrays: the for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

//legacy example
console.log('---legacy');
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

//new more efficient method
console.log('---new efficient');
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}


// Nullish Coalescing operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or ''), works with knowledge values
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


console.log('----_OR Operator------');

console.log(32 || 'zach');
console.log('' || 'zach');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('----AND Operator------');
console.log(0 && 'zach');
console.log(32 && 'zach');

console.log('Hello' && 23 && null && 'zach'); // returns null b/c its a falsly value

//practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('sausage', 'tomato');


///calling a method with an object
restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole',
  mainIndex: 1,
  starterIndex: 1,
});

//The REST Pattern and Parameters
//1) de structing

//Spread, b/c on RIGHT side of =
const arr = [1, 2, ...[3, 4, 5]];
console.log(arr);

//REST, B/C LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let j = 0; j < numbers.length; j++) sum += numbers[j];
  console.log(sum);
  console.log(numbers);
};
add(2, 4);
add(5, 7, 2);
add(5, 7, 2, 6, 1, 9);

const x = [23, 7, 5];
add(...x);

restaurant.orderPizza('pepperoni', 'tomato', 'peppers', '4 cheese');

restaurant.orderPizza('mushrooms');


//////
// Spread operator

const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

//spread operator
const goodNewArray = [1, 2, ...arr];
console.log(goodNewArray);

console.log(...goodNewArray); //same as writing console.log(1,2,7,8,9)

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
//simliar to destructing.. takes elements out of array
//but doesn't create variables

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//spread operator works on all iterables
//iterables are like arrays, strings, maps, sets. NOT Objects

const str = 'zach';
const letters = [...str, '', 's'];
console.log(letters);

//real world example
const ingrediants = [
  prompt("Let's create pasta! Ingrediant 1"),
  prompt('Ingrediant 2'),
  prompt('Ingrediant 3'),
];
console.log(ingrediants);
restaurant.orderPasta(...ingrediants);

//objects
const newRestaurant = { ...restaurant, founder: 'Guiseppe', foundedYear: 2006 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante New';
console.log(restaurant.name);
console.log(restaurantCopy.name);

/////////
// Destructing Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//default values
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(name, openingHours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

/////////
// Destructing Arrays


const [a, b, c] = restaurant.categories;
console.log(a, b, c);

//skips an index in an array and assigns value to each var
const [e, , f, g] = restaurant.categories;
console.log(e, f, g);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse);

//deconstructing nested values
// const nestedArr = [2, 4, [5, 6]];
// const [h, , i, j] = nestedArr;
// console.log(h, i, j);

//below is a deconstruction of the deconstruction for nested array
const nestedArr = [2, 4, [5, 6]];
const [h, , [i, j]] = nestedArr;
console.log(h, i, j);

//default values (setting default values when values are not available)
const [k = 1, l = 1, m = 1] = [8, 7];
console.log(k, l, m);
*/
