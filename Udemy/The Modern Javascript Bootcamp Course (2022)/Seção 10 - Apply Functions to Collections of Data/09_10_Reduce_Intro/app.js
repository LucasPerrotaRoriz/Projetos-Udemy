const test = [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(test);

const nums = [3,4,5,6,7];
const product = nums.reduce((total, currentVal) => {
  return total * currentVal;
});
console.log(product);
