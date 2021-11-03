const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
];

const words = [
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
];

// Sort the ` people ` by 'uid'
const peopleByUID = _(people).sortBy('uid');
console.table(peopleByUID);

// Group the random words by the lower case version of their first letter
let allWords = [];

// Splits each mutli-word string into separate words
const splitString = function (string) {
  return string.split(/[! -]/);
};
// Adds a single word to the array unless it is empty
const pushWordToAllWords = function (word) {
  word && allWords.push(word);
};
// Gathers all individual words in `words`
_(words).map(function (string) {
  _(splitString(string)).each(pushWordToAllWords);
});
// Groups each word by its initial letter, regardless of case
const wordsByInitial = _(allWords).groupBy(function (word) {
  return word[0].toLowerCase();
});

console.table(wordsByInitial);

// Check to see if all the words have more than 3 characters
const wordIsLongerThan3Chars = function (word) {
  return word.length > 3;
};
const allWordsLongerThan3Chars = function (array) {
  return _(array).every(wordIsLongerThan3Chars);
};
console.log('words', allWordsLongerThan3Chars(words));
console.log('allWords', allWordsLongerThan3Chars(allWords));

// Check if some words are over twenty characters long
const wordIsLongerThan20Chars = function (word) {
  return word.length > 20;
};
const someWordsLongerThan20Chars = function (array) {
  return _(array).some(wordIsLongerThan20Chars);
};
console.log('words', someWordsLongerThan20Chars(words));
console.log('allWords', someWordsLongerThan20Chars(allWords));

// Get an array of all of the uids in ` people `
const uids = _(people).pluck('uid');
console.log(uids);

// Find the person with the highest uid
const highestUID = _(people).max(function (person) {
  return person.uid;
});
console.log('highest uid', highestUID);

// Return an object that says how many even numbers and how many odd numbers there are in ` numbers `
const countEvensAndOdds = _(numbers).countBy(function (n) {
  return n & 1 ? 'even' : 'odd';
})
console.log(countEvensAndOdds);

// Get three random numbers out of ` numbers `
const randomNumbers = _(numbers).sample(3);
console.log('random numbers:', randomNumbers);
