function sayHi() {
  console.log("HI")
  console.log(this);
  // this refers to the window (global
  // scope object in the browser)
}

const greet = function () {
  console.log(this);
}