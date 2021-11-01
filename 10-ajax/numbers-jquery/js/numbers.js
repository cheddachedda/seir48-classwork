const fetchFact = function () {
  $.ajax('http://numbersapi.com/random/trivia?json').done(function (result) {
    $('#fetch').after(
      $(`<p>${ result.text }</p>`)
    );
  });
}

$('#fetch').on('click', fetchFact);
fetchFact(); // First fact is free
