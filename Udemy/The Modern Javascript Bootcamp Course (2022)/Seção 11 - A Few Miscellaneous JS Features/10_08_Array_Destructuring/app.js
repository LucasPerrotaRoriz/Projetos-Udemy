const raceResults = [
  'Eliud Kipchoge',
  'Feyisa Lelisa',
  'Galen Rupp',
  'Ghirmay Ghebreslassie',
  'Alphonce Simbu',
  'Jared Ward'
];

const [gold, silver, bronze] = raceResults;
console.log(gold);
console.log(silver);
console.log(bronze);
console.log('----------------------------------')
const [fastest, ...everyoneElse] = raceResults;
console.log(fastest);
console.log(everyoneElse);

const [first, , ,forth] = raceResults
console.log(first);
console.log(forth);