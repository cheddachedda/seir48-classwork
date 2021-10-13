

// Factory (unofficial standard)

const catFactory = function (n, a, f) {
  return {
    name: n,
    age: a,
    furColor: f,
    species: 'feline',
    carnivore: true,
    meow: function() {
      console.log('Meoww, my name is ' + this.name); // 'this' refers to the current object
    }
  };
}

const cuteCats = [
  catFactory('Angel', 18, 'grey'),
  catFactory('Evil', 14, 'red'),
  catFactory('Meh', 12, 'white'),
];

console.table( cuteCats );

const angel = cuteCats[0];

angel.meow();


// Prototypes (official but most people hate it)
// Historically interesting, but not essential
// Especially now we have classes.

// Constructor (similar to a factory but with more magic)
const Cat = function (n, a, f) {
  // No need to create an object: an object is already there for you and it's called 'this'
  this.name = n;
  this.age = a;
  this.furColor = f;
  // No need to return anything, 'this' gets returned automagically.
}

const cooper = new Cat('Cooper', 5, 'striped');
const audrey = new Cat('Audrey', 5, 'striped');

// The main "advantage"
// You can extend the prototype AFTER you create your instances.

Cat.prototype.species = 'feline';
