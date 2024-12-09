// console.log() is used to display output in console tab.
console.log('I am coming from index.js')
console.log('Hello Friends');
console.log(2+2);
console.log('Good Morning,' + ' Naman Talwar');
console.clear();



// console.warn() is used to show warning with output.
console.warn('This is a warning');
console.clear();



// console.error() is used to show error with output.
console.error('Stop this, This is an error');
console.clear();



// console.clear() is used to clear the console tab.
console.clear();



// Variables.
// Declaration of variable.
let welcomeMessage = 'Hello Friends';
console.log('hello friends');
console.log(welcomeMessage);
console.clear();

let bagPrice = (15599 - (10/100 * 15599)) - 272;
let jeansPrice = (2499 - (41/100 * 2499)) - 29;
let bagValue = Math.round((bagPrice + jeansPrice + 25 + 20) *118/100);
let bagSummary = `Your final Myntra bag amount is ₹${bagValue}`;
console.log(bagSummary);
console.clear();


// Updating the value of variable.
let a = 5;
let b = 6;
let c = a + 4;
console.log(c);
c = b + 2;
console.log(c);
console.clear();


// Shorthand operator for updaing the value of variable.
let money = 1;
console.log(money);
money += 5;
console.log(money);
money -= 2;
console.log(money);
money *= 3;
console.log(money);
money /= 2;
console.log(money);
money %= 5;
console.log(money);
console.clear();


// Iteration shorthand operator for loops.
let d = 5;
d++;
console.log(d);
d--;
console.log(d);
++d;
console.log(d);
--d;
console.log(d);
console.clear();


// Const variable declaration.
const pi = 3.14159265359;
let radius = 4;
console.log(pi * radius * radius);
console.clear();



// Boolean data type.
// Relational operator.
console.log(5 < 8);
console.log(2 > 4);
console.log(5 <= 5);
console.log(2 >= 2);
console.log(typeof (3 < 3));
console.log(typeof true);
console.clear();


// Equality operator.
console.log(5 == 5);
console.log(5 == '5');
console.log(7 === 7);
console.log(7 === '7');
console.clear();


// Inequality operator.
console.log(6 != 6);
console.log(5 != '5');
console.log(9 !== 9);
console.log(1 !== '1');
console.clear();


// Comparison operators is less than arithmetic operator.
console.log(5 + 5 === 4 + 6);
console.clear();



// If-Else condition.
// Simple if-else.
let age = 21;
console.log("Checking if you can drive");
if (age >= 18) {
  console.log("You can drive");
} else {
  console.log("Use a Bicycle");
}

if (age >= 18) console.log("You can drive");
else console.log("Use a Bicycle");
console.clear();


// If-Else ladder.
let marks = 82;
console.log("Checking for the grades according to marks");
if (marks >= 90) {
  console.log(marks + " marks are equal to A grade");
} else if (marks >= 80) {
  console.log(marks + " marks are equal to B grade");
} else if (marks >= 70) {
  console.log(marks + " marks are equal to C grade");
} else if (marks >= 60) {
  console.log(marks + " marks are equal to D grade");
} else if (marks >= 50) {
  console.log(marks + " marks are equal to E grade");
} else {
  console.log(marks + " marks are equal to F grade");
}
console.clear();



// Logical operator.
// Logical &&[AND].
let percentage = 90;
console.log(percentage >= 80);
console.log(percentage < 100);
if (percentage >= 80 && percentage < 100) {
  console.log("You will get an iPhone");
} else if (percentage >= 60 && percentage < 80) {
  console.log("You will get an Android phone");
} else {
  console.log("Your packet money will be cancelled");
}
console.clear();


// Logical ||[OR].
let win = true;
let score = 500;
console.log(win > false);
console.log(score > 1000);
if (win > false || score > 1000) {
  console.log("I will continue playing the game");
} else {
  console.log("I will shutdown the computer ");
}
console.clear();


// Logical ![NOT].
let cricketPlayers = 11;
console.log(!cricketPlayers);
console.clear();



// Scope of variable.
let Age = 12;
let userMessage;
if (Age > 18) {
  userMessage = 'You can drive';
} else {
  userMessage = 'Use a Bicycle';
}
console.log(userMessage);
console.clear();



// Truthy and Falsy.
// Falsy values.
let humanAge;
console.log(humanAge);
if (humanAge)  console.log('You have a valid age');
else console.log('Aap avtaar hain');

humanAge = null;
console.log(humanAge);
if (humanAge)  console.log('You have a valid age');
else console.log('Aap avtaar hain');

humanAge = 0;
console.log(humanAge);
if (humanAge)  console.log('You have a valid age');
else console.log('Aap avtaar hain');

humanAge = false;
console.log(humanAge);
if (humanAge)  console.log('You have a valid age');
else console.log('Aap avtaar hain');

humanAge = 5/'ice-cream';
console.log(humanAge);
if (humanAge)  console.log('You have a valid age');
else console.log('Aap avtaar hain');

humanAge = "";
console.log(humanAge);
if (humanAge)  console.log('You have a valid age');
else console.log('Aap avtaar hain');
console.clear();


// Truthy values.
humanAge = 12;
console.log(humanAge);
if (humanAge)  console.log('You have a valid age');
else console.log('Aap avtaar hain');

humanAge = "Naman";
console.log(humanAge);
if (humanAge)  console.log('You have a valid age');
else console.log('Aap avtaar hain');

humanAge = 15 + "Talwar";
console.log(humanAge);
if (humanAge)  console.log('You have a valid age');
else console.log('Aap avtaar hain');
console.clear();



// If alternatives.
// Ternary operator.
let aGe = 21;
let result = aGe > 18 ? 'Adult' : 'Kid';
console.log(result);
console.clear();


// Guard operator.
let salary = 0;
let finalSalary = salary || 18;
console.log(salary);
console.log(finalSalary);
console.clear();


// Default operator.
let team = 0;
let finalTeam = team ?? 11;
console.log(team);
console.log(finalTeam);
console.clear();



// Functions.
// Function declaration.
let agE = 21;
function printAge() {
  console.log(`Your age is ${agE}`);
}
printAge();
agE = 76;
printAge();
agE = 1;
printAge();
console.clear();


// Return statement.
function generateRandomMove() {
  let random = Math.random();
  let randomMove = random * 3;
  return randomMove;
}
console.log(generateRandomMove());
console.log(generateRandomMove());
console.log(generateRandomMove());
console.log(generateRandomMove());
console.log(generateRandomMove());

function determineDriveStatus() {
  let age = 20;
  if (age === undefined) {
    return 'Aap avtaar hain';
  }
  console.log('Checking drive status');

  if (age > 18) {
    return 'You can Drive';
  } else {
    return 'Use a Bicycle';
  }
}
console.log(determineDriveStatus());
console.clear();


// Parameterized function.
function sum(a, b) {
  let sum = a + b;
  return sum;
}
console.log(sum(4, 5));
console.log(sum(41, 55));
console.log(sum(0, 0));
console.log(sum(1, 2));
console.log(sum(6, 9.8));

function greeting(name = 'Bunty') {
  console.log(`'Namaste' ${name} uncle`);
}
greeting();
console.clear();



// Objects.
// Object declaration.
let product = {
  company: 'Mango',
  item_name: 'T-Shirt',
  price: 861,
  'size-of-product': 'XL',
};


// Object calling through dot[.] for variable.
console.log(product);
console.log(product.company);
console.log(product.item_name);
console.log(product.price);
product.company = 'Banana';
console.log(product);


// Object calling through brackets[[]] for string property.
console.log(product['size-of-product']);

let propertyName = 'size-of-product';
console.log(product[propertyName]);
console.clear();


// Deletion of product from object.
console.log(product);
delete product.company;
console.log(product);
console.clear();


// Inside object.
let accessories = {
  item_name: 'Smartwatch',
  company: 'Samsung',
  price: 12000,
  rating: {
    stars: 4.5,
    no_of_reviews: 12677,
  },
  displayPrice: function() {
    console.log(`Price of the product is ₹${this.price}`);
  },
};
accessories.displayPrice();
console.clear();


// Autoboxing.
console.log('I am Naman Talwar'.length);
console.log('I am Naman Talwar'.toUpperCase());
console.log('I am Naman Talwar'.replace('I am', 'Myself'));
console.clear();


// Object references.
let i = 5;
let j = i;
console.log(`i = ${i}, j = ${j}`);
i = 8;
console.log(`i = ${i}, j = ${j}`);

let x = { num: 5 };
let y = x;
console.log(`x = ${x.num}, y = ${y.num}`);
x.num = 8;
console.log(`x = ${x.num}, y = ${y.num}`);

let p = { pop: 'cracker' };
let q = { pop: 'cracker' };
console.log(p == q);
console.clear();


// Object shortcuts.
// Destructuring of object.
let item = {
  product_name: 'perfume',
  company: 'denver',
  price: 220,
};
let { company, price } = item;
console.log(company);
console.log(price);
console.clear()


// Property shorthand.
let amount = 550;
let gadget = {
  item_name: 'fitness-band',
  company: 'MI',
  amount,
}
console.log(gadget.amount);
console.clear();


// Method shorthand.
accessories = {
  item_name: 'Smartwatch',
  company: 'Samsung',
  price: 12000,
  rating: {
    stars: 4.5,
    no_of_reviews: 12677,
  },
  displayPrice() {
    console.log(`Price of the product is ₹${this.price}`);
  },
};
accessories.displayPrice();
console.clear();



// JSON.
let clothes = {
  name: 'Jacket',
  price: '1599',
  rating: {
    stars: 4.8,
    noOfReviews: 453,
  },
};
// Object conversion.
console.log(typeof clothes);
console.log(clothes);

let str = JSON.stringify(clothes);
console.log(typeof str);
console.log(str);

let newClothes = JSON.parse(str);
console.log(typeof newClothes);
console.log(newClothes);
console.clear();


// Local storage.
localStorage.setItem('clothes', JSON.stringify(clothes));
console.log(localStorage.getItem('clothes'));
let clothes2 = JSON.parse(localStorage.getItem('clothes'));
console.log(clothes2);

localStorage.clear();
console.clear();


// Date.
let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getMilliseconds());
console.clear();


// DOM.
// DOM properties.
console.log(document.location);

console.log(document.title);

console.log(document.href);

console.log(document.domain);

document.querySelector('div').classList.add('your-box');
document.querySelector('div').classList.remove('your-box');


// DOM methods.
let button = document.createElement('Button');
button.innerText = 'Click';

document.querySelector('.my-box').appendChild(button);

document.querySelector('.my-box').removeChild(button);
console.clear();



// Arrays.
// Array declaration and accessing values.
let numbers = [1, 4, 3, 7, 5, 6, 7, 2];
console.log(numbers);
console.log(numbers[5]);

let array = [1, true, null, 'naman'];
console.log(array);
console.log(array[3]);
console.log(typeof array);
console.clear();


// Array properties & methods.
// Properties.
// Cheeck array[Array.isArray()].
console.log(Array.isArray(array));
console.log(Array.isArray(product));

// Length.
console.log(numbers.length);
console.clear();

// Arrays are also reference to the value.
let arr4 = [1, 3, 5, 7];
console.log(arr4);
let arr5 = arr4;
arr5[1] = 99;
console.log(arr4);

// Array destructuring.
let [l, m, n, o] = arr4;
console.log(l + ' ' + m + ' ' + n + ' ' + o);
console.clear();


// Methods.
// Add or remove to end[push/pop].
let arr = [1, 2, 3];
console.log(arr);
arr.push(6);
console.log(arr);
console.log('popped ' + arr.pop());
console.log(arr);
console.log('popped ' + arr.pop());
console.log(arr);
console.clear();

// Add or remove from front[shift/unshift].
console.log(arr);
arr.unshift(4);
console.log(arr);
arr.shift();
console.log(arr);
arr.shift();
console.log(arr);
console.clear();

// Add or remove elements[splice].
let arr2 = [3, 5, 7, 6];
console.log(arr2);
arr2.splice(1, 2);
console.log(arr2);
console.clear();

// Convert to string[toString].
let arr3 = [9, 8, 7, 6];
console.log(arr3.toString());
console.clear();

// Sort elements[sort].
console.log(arr3);
arr3.sort();
console.log(arr3);
console.clear();

// Get array itself[valueOf].
console.log(arr3);
console.log(arr3.valueOf());
console.clear();



// Loops.
// While loop[Standard condition].
let number = 1;
while (number <= 10) {
  console.log(number);
  number++;
}
console.log(`Final value of number is ${number}`);
console.clear();

// Non-standard condition.
let r = 0;
while(r < 1) {
  console.log(r);
  r = Math.random() * 2;
}
console.log(`Final value of r is ${r}`);
console.clear();


// Do-While loopp[Guaranteed one iteration].
do {
  console.log(number);
  number++;
}
while (false);
console.clear();


// For loop.
for (let digit = 1; digit <= 10; digit++) {
  console.log(digit);
}
console.clear();

let arr6 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
for (let i = 0; i < arr6.length; i++) {
  console.log(arr6[i]);
}
console.clear();


// Accumulator pattern.
// Sum all the numbers in an array.
let array2 = [1, 3, 6, 7, 9, 4];
let sum2 = 0;
for (let i = 0; i < array2.length; i++) {
  sum2 += array2[i];
}
console.log(`Sum of the array is ${sum2}`);

// Create a modified copy of an array.
let squares = [];
for (let i = 0; i < array2.length; i++) {
  squares.push(array2[i] * array2[i]);
}
console.log(array2);
console.log(squares);
console.clear();


// Break.
let array3 = [1, 3, 5, 6, 7, 8, 3, 4];
for (let i = 0; i < array3.length; i++) {
  if (array3[i] === 8) {
    console.log(`8 found at index ${i}`);
    break;
  }
  console.log('Still looking');
}
console.clear();


// Continue.
for (let i = 1; i <= 25; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
console.clear();



// Advanced functions.
// Anonymous functions as values.
let addition = function(num1, num2) {
  return num1 + num2;
}
let newAddition = addition;
console.log(addition(4, 5));
console.log(newAddition(4, 5));

// ((4 + 5) + 6)
let sumThreeNumbers = function(num1, num2, num3, sumTwoNumbers) {
  let sum1 = sumTwoNumbers(num1, num2);
  return sumTwoNumbers(sum1, num3);
}
console.log(sumThreeNumbers(4, 5, 6, addition));

console.log(sumThreeNumbers);
console.log(typeof sumThreeNumbers);
console.clear();


// Arrow functions.
let Sum = (num1, num2) => num1 + num2; 
console.log(Sum(6, 8));

let square = num => num * num;
console.log(square(5));
console.clear();


// setTimeout & setInternal.
let alarm = () => console.log('Subha ho gyi, uth jaao.');
let timerId = setTimeout(alarm, 1000);
console.log(`Alarm set with timerId: ${timerId}`);
clearTimeout(timerId);

let alarm2 = () => console.log(`Breakfast kar lo time ho gya ${new Date()}`);
// let internalId = setInterval(alarm2, 1000);
// setTimeout(() => clearInterval(internalId), 2000);
console.clear();


// Event listener.
let = buttonElement = document.querySelector('.push');

let behaviour = event => console.log('I am clicked');
buttonElement.addEventListener('click', behaviour);
let printDate = event => console.log(new Date());
buttonElement.addEventListener('click', printDate);

buttonElement.removeEventListener('click', behaviour);


// For Each loop.
let foods = ['bread', 'rice', 'meat', 'pizza'];
foods.forEach(function(food) {
  console.log(food);
});
console.clear();

let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Arr.forEach(num => {
  if (num === 5) {
    return;
  }
  console.log(`Visited: ${num}`);
});
console.clear();


// Array methods.
// Filter method.
Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let odds = Arr.filter((num, index) => {
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
});
console.log(odds);

let newOdds = Arr.filter((num, index) => num % 2 === 1);
console.log(newOdds);
console.clear();


// Map method.
Arr = [1, 2, 3, 4, 5];
let Squares = Arr.map(num => num * num);
console.log(Squares);
console.clear();