console.log( _.VERSION );

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// Iterate through ` numbers ` and log each number to the console
_(numbers).each(function (n) {
  console.log(n);
});

// Iterate through ` numbers ` and multiply each one of them by 5
_(numbers).each(function (n) {
  console.log(n * 5);
});

// Iterate through ` numbers ` and reduce it by adding them together
const add = function (a, b) {
  return a + b;
}
const total = _(numbers).reduce(add);
console.log(total);

// Get an array of all of the people in ` people ` that have the username "E"
const hasUsernameE = _(people).filter(function (person) {
  return person.username === 'E';
});
console.table(hasUsernameE);

// Find the first object in ` people ` that has the id of 3
const firstIDis3 = _(people).find(function (person) {
  return person.id === 3;
})
console.log(firstIDis3);

// Find the first person who has an age of less than 50
const firstAgeLessThan50 = _(people).find(function (person) {
  return person.age < 50;
})
console.log(firstAgeLessThan50);

// Get an array of all of the people with an age of over 60
const isSenior = function (person) {
  return person.age > 60;
}
const seniors = _(people).filter(isSenior);
console.table(seniors);

// Remove all of the people with an age less than 40
const isInexperienced = function (person) {
  return person.age < 40;
}
const experienced = _(people).reject(isInexperienced);
console.table(experienced);
