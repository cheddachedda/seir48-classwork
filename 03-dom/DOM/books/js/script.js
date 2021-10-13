// ## The Book List
//
// Keep track of which books you read and which books you want to read!
//
// - Create a webpage with an h1 of "My Book List".
// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Copy this array of books:
const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: true
  },
  {
    title: 'Understanding Media',
    author: 'Marshall McLuhan',
    alreadyRead: false
  }
];

// document.body.style.fontFamily = 'sans-serif';
$('body').css('font-family', 'sans-serif');

// - Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// for (let i = 0; i < books.length; i++) {
//   const p = document.createElement('p');
//   p.innerText = `"${books[i].title}" by ${books[i].author}`
//   document.body.appendChild(p);
// }
for (let i = 0; i < books.length; i++) {
  $('<p>').text(`"${books[i].title}" by ${books[i].author}`).appendTo($('body'));
}


// - Bonus: Use a ul and li to display the books.
// document.body.appendChild( document.createElement('ul') );
//
// for (let i = 0; i < books.length; i++) {
//   const ul = document.getElementsByTagName('ul')[0];
//   const li = document.createElement('li');
//   li.innerText = `"${books[i].title}" by ${books[i].author}`
//   ul.appendChild(li);
// }

// - Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// - Bonus: Change the style of the book depending on whether you have read it or not.

$('body').append($('<ul>'));
for (let i = 0; i < books.length; i++) {
  const book = books[i];
  const $li = $(`<li>`).text(`"${book.title}" by ${book.author}`);
  book.alreadyRead && $li.addClass('read');
  $li.attr('url', book.url).appendTo($('ul'));
}
