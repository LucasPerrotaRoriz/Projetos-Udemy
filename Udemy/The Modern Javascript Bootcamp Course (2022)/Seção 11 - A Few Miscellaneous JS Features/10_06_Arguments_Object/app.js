function sumAll() {
  let total = 0;
  for(let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sumAll(8,4,3,2));
console.log(sumAll(2,3));

function sum() {
  const argsArr = [...arguments]
  return argsArr.reduce((total, currVal) => {
    return total + currVal;
  })
}

function fullName(first, last) {
  console.log(arguments);
  console.log(first);
  console.log(last);
}

console.log(fullName('tom', 'jones', 'III', 'order of the phoenix'));

