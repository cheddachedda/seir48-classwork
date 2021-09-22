// # Exercises: if/else statements

// ## What number's bigger?
//
// Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// - Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

const greaterNum = function(a, b) {
  const max = Math.max(a, b);
  return max;
}

const testGreaterNum = function(iterations) {
  let i = 0;
  while (i < iterations) {
    let a = Math.round(Math.random() * 1000);
    let b = Math.round(Math.random() * 1000);
    console.log(`The greater number of ${a} and ${b} is ${greaterNum(a, b)}.`);
    i++;
  }
}

testGreaterNum(5);

// ## The World Translator
//
// Write a function named helloWorld that:
// - takes 1 argument, a language code (e.g. "es", "de", "en")
// - returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// - Call that function for each of the supported languages and log the result to make sure it works.

const greetings = {
  de: "Hallo, welt",
  en: "Hello, world",
  es: "Hola, mundo",
  fr: "Bonjour, le monde",
  it: "Ciao, mondo",
  ja: "Kon'nichiwa, sekai",
  pt: "Olá, mundo",
  ru: "Privet, mir",
  vi: "Chào, thế giới",
  zh: "Nǐ hǎo, shìjiè",
};

const helloWorld = function(lang) {
  return greetings[lang];
}

const testHelloWorld = function() {
  for (let language in greetings) {
    console.log(language, helloWorld(language));
  }
}

testHelloWorld();

// ## The Grade Assigner
//
// Write a function named assignGrade that:
// - takes 1 argument, a number score.
// - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that function for a few different scores and log the result to make sure it works.

const gradeAssigner = function(score) {
  if (score >= 90) return 'A';
  else if (score >= 80) return 'B';
  else if (score >= 70) return 'C';
  else if (score >= 60) return 'D';
  else return 'F';
}

const testGradeAssigner = function(iterations) {
  let i = 0;
  while (i < iterations) {
    let score = Math.round(Math.random() * 65) + 35;
    console.log(score, gradeAssigner(score));
    i++;
  }
}

testGradeAssigner(5);

// ## The Pluralizer
//
// Write a function named pluralize that:
// - takes 2 arguments, a noun and a number.
// - returns the number and pluralized form, like "5 cats" or "1 dog".
// - Call that function for a few different scores and log the result to make sure it works.
// - Bonus: Make it handle a few collective nouns like "sheep" and "geese".

const pluralise = function(noun, number) {
  const uniqueCases = ["sheep", "geese"];
  if (number === 1 && uniqueCases.includes(noun)) {
    return `${number} ${noun}`;
  } else {
    return `${number} ${noun}s`;
  }
}

const testPluralise = function(nouns) {
  for (let noun of nouns) {
    let number = Math.floor(Math.random() * 4);
    console.log(pluralise(noun, number));
  }
}

testPluralise(["cat", "dog", "tortoise", "sheep", "geese"]);
