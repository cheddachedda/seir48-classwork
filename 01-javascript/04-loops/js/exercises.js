// # Exercises: for loops

// ## The even/odd reporter
//
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(i, "even");
  } else {
    console.log(i, "odd");
  }
}

// ## Multiplication Tables
//
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (let x = 1; x <= 10; x++) {
  for (let y = 1; y <= 10; y++) {
    console.log(`${x} * ${y} = ${x * y}`);
  }
}

// ## The Grade Assigner
//
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

const gradeAssigner = function(score) {
  if (score >= 90) return 'A';
  else if (score >= 80) return 'B';
  else if (score >= 70) return 'C';
  else if (score >= 60) return 'D';
  else return 'F';
}

for (let i = 60; i <= 100; i++) {
  console.log(i, gradeAssigner(i));
}
