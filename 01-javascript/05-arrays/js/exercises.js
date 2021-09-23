// ## Exercises: Arrays
//
// # Your top choices
//
// - Create an array to hold your top choices (colors, presidents, whatever).
// - For each choice, log to the screen a string like: "My #1 choice is blue."
// - Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

const myFavouriteUmpires = [
  "Brett Rosebury",
  "Ray Chamberlain",
  "Matt Stevic",
  "Jacob Mollison",
  "Nathan Williamson"
];

for (let i = 0; i < myFavouriteUmpires.length; i++) {
  console.log(`My #${i+1} choice is ${myFavouriteUmpires[i]}.`);
}

// BONUS

const toOrdinal = function(number) {
  const finalDigit = number % 10;

  const isEleventh = (number - 11) % 100 === 0;   // number ends in 11
  const isTwelth = (number - 12) % 100 === 0;     // number ends in 12
  const isThirteenth = (number - 13) % 100 === 0; // number ends in 13

  if (finalDigit === 1 && !isEleventh ) {
    return `${number}st`;
  } else if (finalDigit === 2 && !isTwelth) {
    return `${number}nd`;
  } else if (finalDigit === 3 && !isThirteenth) {
    return `${number}nd`;
  } else {
    return `${number}th`;
  }
}

for (let i = 100; i < 120; i++) {
  let nth = toOrdinal(i+1);
  console.log(`My ${nth} choice is ${myFavouriteUmpires[i]}.`);
}
