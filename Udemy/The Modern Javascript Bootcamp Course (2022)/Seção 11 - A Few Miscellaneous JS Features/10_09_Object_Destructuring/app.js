const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya"
}

const {first, last, country} = runner;
console.log(first);
console.log(last);
console.log(country);

const {country: nation, title: honorific} = runner;
console.log(nation);
console.log(honorific);

/*
const {first, last, ...other} = runner
console.log(first);
console.log(last);
console.log(other); */