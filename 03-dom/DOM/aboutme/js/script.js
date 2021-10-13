// # Exercises: More DOM Manipulation

// ## About Me

// - Create a new Javascript file and link to it with a script tag at the bottom.

// - (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// document.body.style.fontFamily = "Arial, sans-serif";
$('body').css('font-family', 'Arial, sans-serif');


// - (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// document.getElementById('nickname').innerText = 'Cheddy';
// document.getElementById('favorites').innerText = 'Yorgos Lanthimos, Bong Joon-ho, Michael Moore';
// document.getElementById('hometown').innerText = 'Melbourne';
$('#nickname').text('Cheddy');
$('#favorites').text('Yorgos Lanthimos, Bong Joon-ho, Michael Moore');
$('#hometown').text('Melbourne');

// - Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// const listItems = document.getElementsByTagName('li');
// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].className = 'listitem';
//   listItems[i].style.color = 'red';
// }
$('li').addClass('listitem').css('color', 'red');

// - Create a new img element and set its src attribute to a picture of you. Append that element to the page.
// const image =  document.createElement('img');
// image.src = 'https://www.fillmurray.com/200/300';
$('body').append($('<img src="https://www.fillmurray.com/200/300">'));
