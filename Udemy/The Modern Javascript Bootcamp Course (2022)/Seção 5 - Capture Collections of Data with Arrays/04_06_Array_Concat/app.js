let fruits = [ 'apple', 'banana' ];
let veggies = [ 'asparagus', 'brussel sprouts' ];
let meats = [ 'steak', 'chicken breast' ];

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));
console.log(fruits);
console.log(veggies);

let allFoods = fruits.concat(veggies, meats);
console.log(allFoods);