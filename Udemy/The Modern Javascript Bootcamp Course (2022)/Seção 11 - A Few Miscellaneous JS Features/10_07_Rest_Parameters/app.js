function sumAll(...nums) {
  let total = 0;
  for(let n of nums) total += n;
  return total;
}

function sum(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal;
  })
}

function fullName(first, last, ...titles) {
  console.log('fist', first);
  console.log('last', last);
  console.log('titles', titles);
}

console.log(sumAll(1,2));
console.log(sumAll(1,2,3,4,5));

console.log(sum(1,2));
console.log(sum(1,2,3,4,5));

console.log(fullName('tim', 'jones', 'III', 'order of the phoenix'));

const multiply = (...nums) => (
  nums.reduce((total, currVal) => total * currVal)
)

console.log(multiply(4,5,6,7));
console.log(multiply(2,3,4));
