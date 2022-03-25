const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t) {
  return t.toLocaleUpperCase();
});
console.log(texts);
console.log(caps);

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'rsvp', 'diy'];

const doubles = numbers.map(function (num) {
  return num * 2;
});
console.log(doubles);

const numDetails = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0
  }
});
console.log(numDetails);

const abbrevs = words.map(function (word) {
  return word.toLocaleUpperCase().split('').join('.');
});
console.log(abbrevs);

const books = [
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
]

const titles = books.map(function(b) {
  return b.title;
});

console.log(titles);