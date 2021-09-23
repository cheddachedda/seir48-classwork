// # Exercises: Objects
//
// ## The Recipe Card
//
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

const recipe = {
  title: 'Bánh Mì Thịt',
  servings: 2,
  ingredients: [
    'bread',
    'crispy pork',
    'pâté',
    'mayo',
    'butter',
    'pickled carrot',
    'cucumber',
    'coriander',
    'spring onion',
    'chilli',
    'soy sauce',
  ]
};

// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// - Mole
// - Serves: 2
// - Ingredients:
// - cinnamon
// - cumin
// - cocoa

console.log(recipe.title);
console.log(`Serves: ${recipe.servings}`);
console.log("Ingredients:");
for (let i = 0; i < recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
}

// ## The Reading List
//
// Keep track of which books you read and which books you want to read!
//
// - Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// - Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// - Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

const books = [
  { title: 'Sapiens', author: 'Yuval Noah Harari', alreadyRead: true },
  { title: 'Outliers', author: 'Malcolm Gladwell', alreadyRead: true },
  { title: 'Dare To Lead', author: 'Brené Brown', alreadyRead: false },
  { title: 'Pedagogy of the Oppressed', author: 'Paulo Freire', alreadyRead: false },
];

for (let i = 0; i < books.length; i++) {
  if (books[i].alreadyRead) {
    console.log(`You already read ${books[i].title} by ${books[i].author}`);
  } else {
    console.log(`You still need to read ${books[i].title} by ${books[i].author}`);
  }
}


// ## The Movie Database
//
// It's like IMDB, but much much smaller!
//
// - Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// - Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

const faveMovie = {
  title: 'Parasite',
  duration: '2h 12m',
  stars: [
    'Song Kang-ho',
    'Choi Woo-shik',
    'Lee Sun-kyun',
    'Cho Yeo-jeong',
    'Park So-dam',
  ],
};

const logMovie = function(movie) {
  let output = `${movie.title} lasts for ${movie.duration}. Stars: `
  for (let i = 0; i < movie.stars.length; i++) {
    output += movie.stars[i]
    if (i !== movie.stars.length - 1) {
      output += ', ';
    } else {
      output += '.'
    }
  }
  console.log(output);
}

logMovie(faveMovie);
