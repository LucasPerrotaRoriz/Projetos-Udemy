const isEven = function (num) { // regular function expression
  return num % 2 === 0;
}

const isEven2 = (num) =>  { // arrow function with paren around param
  return num % 2 === 0;
}

const isEven3 = num => { // no parens around param
  return num % 2 === 0;
}

const isEven4 = num => ( // implicit return
    num % 2 === 0
);

const isEven5 = num => num % 2 === 0; // one-liner implicit return

const square = n => (
  n * n
);

const square2 = n => n * n;

const nums = [1, 2, 3, 4, 5, 6, 7, 8,];

const doubles1 = nums.map(function (n) {
  return n * 2;
})
console.log(doubles1);

const doubles2 = nums.map(n => {
  return n * 2;
})
console.log(doubles2);

const doubles3 = nums.map(n => n * 2);
console.log(doubles3);

const parityList = nums.map(function(n) {
  if(n % 2 === 0) return 'even';
  return 'odd';
})
console.log(parityList);

const parityList2 = nums.map((n) => {
  if(n % 2 === 0) return 'even';
  return 'odd'
})
console.log(parityList2);

const parityList3 = nums.map(n => (n % 2 === 0 ? 'even' : 'odd'));
console.log(parityList3);