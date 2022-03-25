const results = [{
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
  },
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States'
  }
]

/*const [, {country}] = results;
console.log(country); */

/*
const [{first: goldWinner},{country}] = results;
console.log(goldWinner);
console.log(country); */

const [, silverMedal] = results;
const {country} = silverMedal;
console.log(country);

