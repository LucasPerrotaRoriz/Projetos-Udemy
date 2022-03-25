const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums.filter(n => { 
  return n % 2 == 1; // our callback return true or false
  // if it returns true, n is added to the filtered array
})
console.log(odds);

const smallNums = nums.filter(n => n < 5);
console.log(smallNums);

const nums2 = [34, 35, 67, 54, 109, 102, 32, 9];

const odds2 = nums2.filter(n => n % 2 === 1)
console.log(odds2);
const evens = nums2.filter(n => n % 2 === 0)
console.log(evens);
const bigNums = nums2.filter(n => n > 50);
console.log(bigNums);

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

const goodBooks = books.filter(b => b.rating > 4.3);
console.log(goodBooks);

const fantasyBooks = books.filter(book => (
  book.genres.includes('fantasy')
))
console.log(fantasyBooks);

const shortForm = books.filter(book => (
  book.genres.includes('short stories') || 
  book.genres.includes('essays')
))
console.log(shortForm);

const query = 'The';
const results = books.filter(book => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase());
})
console.log(results);