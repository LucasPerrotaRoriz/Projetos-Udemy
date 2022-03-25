const math = {
  numbers: [1,2,3,4,5],
  add: function(x, y) {
    return x + y
  },
  multiply: function(x, y) {
    return x * y;
  },
  divide: function(x, y) {
    return x / y;
  },
  square: function(x) {
    return x * x;
  },
};

const add = function(x, y) {
  return x + y;
}

const multiply = function(x, y) {
  return x * y;
}

const divide = function(x, y) {
  return x / y;
}

const square = function(x) {
  return x * x;
}

// Usando shorthand
const math2 = {
  add,
  multiply,
  divide,
  square
}



