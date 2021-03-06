// recreate `cat` in JS

const fs = require('fs'); // fs is from the buil-in Node.JS standard library

// Synchronous: Wrongissimo -- not enough callbacks!
// const fileData = fs.readFileSync('simpsons.txt', 'utf-8');
// console.log(fileData);

// Asynchronous
// Many asynchronous Node.js functions implement the Error First Pattern
fs.readFile('simpsons.txt', 'utf-8', function (error, data) {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
});
