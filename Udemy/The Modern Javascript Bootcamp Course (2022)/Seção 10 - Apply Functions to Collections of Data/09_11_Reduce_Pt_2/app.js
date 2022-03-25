let grades = [89, 96, 58, 77, 62, 93, 81, 99, 73];

const topScore = grades.reduce((max, currVal) => {
  if(currVal > max) return currVal;
  return max;
})
console.log(topScore);

const topScore2 = grades.reduce((max, currVal) => (
  Math.max(max, currVal)
))
console.log(topScore2);

const topScore3 = grades.reduce((max, currVal) => (
  Math.min(max, currVal)
))
console.log(topScore3);

const test = [4, 5, 6, 7, 8].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(test);

const test2 = [4, 5, 6, 7, 8].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100);
console.log(test2);

const sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
  return sum + currVal;
}, 1000)
console.log(sum);