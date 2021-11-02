console.log( _.VERSION );

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// .each() /////////////////////////////////////////////////////////////////////
_(nums).each(function (n, index, entireArray) {
  console.log( `n: ${n}, index: ${index}, entireArray: ${ entireArray }` );
});

// .each() with an object //////////////////////////////////////////////////////
const sales = {
  January: 15,
  February: 11,
  March: 3
};

_(sales).each(function (amount, month) {
  console.log(month, amount);
})
