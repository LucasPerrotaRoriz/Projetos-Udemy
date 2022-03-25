const nums = [9, 3, 2, 8];
Math.max(nums);
const max = Math.max(...nums);
// Same as calling Math.max(9,3,2,8)

console.log(max);

// In object literals
// Copies properties from one object into another object literal.
const feline = {legs: 4, family: 'Felidae'};
const canine = {family: 'Caninae', furry: true};

const dog = {... canine, isPet: true};
// {family: 'Caninae', furry: true, isPet: true}

const lion = {...feline, genus: 'Panthera'};
// {legs: 4, family: 'Felidae', genus: 'Panthera'}

const catDog = {...feline, ...canine};
// {legs: 4, family: 'Caninae', furry: true};

console.log(feline, canine);
console.log(dog);
console.log(lion);
console.log(catDog);

function giveMeFour(a,b,c,d) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
  console.log('d', d);
}
const colors = ['red', 'orange', 'yellow', 'green'];
giveMeFour(...colors);

const str = 'GOAT';
giveMeFour(...str);


