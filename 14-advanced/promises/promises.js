// Promises are an evolution of callbacks.
// a way to handle or process data from an asynchronous process, whenever that process finishes

const fs = require('fs'); // filesystem: part of the standard library for Node.js

// recreate cat

// fs.readFile('flintstones.txt', 'utf-8', (err, content) => { // error first pattern
//   if (err) {
//     throw err;
//   }
//   console.log(content);
// });

// A Promise wrapper around the above fs.readFile

const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, content) => {
      if (err) {
        reject(err); // invoke all the .catch() methods
        return;
      }

      resolve(content); // invoke all the .then() methods
    })
  });
};

readFile('flintstones.txt').then((response) => {
  console.log(1);
  console.log(response);
  return response;
}).then((d) => {
  console.log(2);
  console.log(d.toUpperCase());
}).catch((err) => {
  console.log('ERROR');
  console.error(err);
});

const fileReaderPromise = readFile('flintstones.txt');

fileReaderPromise.then((c) => {
  console.log(c);
});

setTimeout(() => {
  fileReaderPromise.then((content) => {
    console.log('even though this was attached 7 seconds later');
    console.log(content);
  });
}, 7000);
