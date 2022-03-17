let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

let swimmers = animals.slice(0, 3);
console.log(swimmers);

let mammals = animals.slice(2, 4);
console.log(mammals);

// let reptiles = animals.slice(4, 6); or
let reptiles = animals.slice(4);
console.log(reptiles);

let quadruped = animals.slice(-3);
console.log(quadruped);

console.log(animals.slice(-3, -1));
console.log(animals.slice());










