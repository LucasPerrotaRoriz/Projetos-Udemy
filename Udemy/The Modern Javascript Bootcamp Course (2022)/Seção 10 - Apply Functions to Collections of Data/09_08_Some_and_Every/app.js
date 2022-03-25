const words = ["dog", "dig", "log", "bag", "wag"];

const all3Lets = words.every(word => {
  return word.length === 3;
}) // true

const  test2 = words.every(word => word[0] === 'd'); // false

const allEndInG = words.every(w => {
  let last_letter = w[w.length - 1];
  return last_letter === 'g'
}) // true

// console.log(all3Lets, test2, allEndInG);

const words2 = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

// Are there any words longer than 4 characters
const all4Lets = words.some(word => {
  return words2.length > 4;
}) // true

// Do any words start with 'Z'?
const someStartWIthZ = words2.some(word => word[0] === 'Z'); // false

// Do any words start contain 'cake'?
const containCake = words2.some(w => w.includes('cake')) // true

const someStartWithD = words2.some(word => word[0] === 'd'); // true

console.log(all4Lets, someStartWIthZ, containCake, someStartWithD);

const books = [
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

const allGoodBooks = books.every(book => book.rating > 3.5);

const any2Authors = books.some(book => book.authors.length === 2);

console.log(allGoodBooks, any2Authors);

