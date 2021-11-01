// Callbacks Review

// A callback function is a function typically PASSED TO another function.
// The callback function GETS CALLED FOR YOU, later, at some point in time.

// Javascript is asynchronous.

// Timers: A C ... B
console.log('A');
setTimeout(function () {
  console.log('B: Time has passed');
}, 4000)
console.log('C');

// jQuery's document ready: I III ... II
console.log('I');
$(document).ready(function () {
  console.log('II: the document is ready');
});
console.log('III');

// Event handlers: Groucho Chico AND MAYBE LATER Harpo (and maybe repeatedly!)
console.log('Groucho');
$(document).on('click', function () {
  console.log('Harpo: click');
})
console.log('Chico');

// .forEach loops
const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// ES5
// for (let i = 0; i < colours.length; i++) {
//   console.log( colours[i] );
// }

// ES6
// colours.forEach(function (colour) {
//   console.log(colour);
// });

// You are not expected to understand this (yet)
const each = function (array, callbackFunction) {
  for (let i = 0; i < array.length; i++) {
    callbackFunction( array[i] );
  }
};

each(colours, function (colour) {
  console.log(colour);
})

each(['Groucho', 'Harpo', 'Chico'], function (brother) {
  console.log(`${ brother } Marx`);
})

each('ajax', function (char) {
  console.log(char.toUpperCase());
})
