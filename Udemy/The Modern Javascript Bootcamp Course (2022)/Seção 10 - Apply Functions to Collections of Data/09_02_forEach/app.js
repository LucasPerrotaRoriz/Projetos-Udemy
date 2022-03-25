const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (n) {
  console.log(n * n);
});

nums.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});

const numbers = [21, 22, 23, 24, 25, 26, 27];

numbers.forEach(function (num) {
  console.log(num * 2);
})

function printTriple(n) {
  console.log(n * 3);
}
numbers.forEach(printTriple);

numbers.forEach(function (num, idx) {
  console.log(idx, num);
})

const books = [{
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    ratings: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    ratings: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor towles'],
    rating: 4.36
  }
]

books.forEach(function (book) {
  console.log(book.title.toLocaleUpperCase());
})

for(let book of books) {
  console.log(book.title.toLocaleUpperCase());
}

for(let i = 0; i < books.length; i++) {
  console.log(books[i].title.toLocaleUpperCase());
}