let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

//splice(startIdx, deleteCount, itemsToInsert);

// =====================
// INSERTING w/ SPLICE
// =====================
// 'at index 1, delete 0 items and insert "octopus"'
animals.splice(1, 0, 'octopus');
//console.log(animals);
//["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

// =====================
// DELETING w/ SPLICE
// =====================
//'at index 5, delete 2 items'
animals.splice(5, 2);
//console.log(animals);
//["shark", "octopus", "salmon", "whale", "bear"]

// 2
/* animals.slice(3, 2);
   console.log(animals); */

// =====================
// REPLACING w/ SPLICE
// =====================
//'at index 3, delete 2 items and replace them with "orca" and "grizzly"'
animals.splice(3, 2, 'orca', 'grizzly');
// ["shark", "octopus", "salmon", "orca", "grizzly"]

// 3
/*
animals.splice(3, 0, 'snake', 'frog');
console.log(animals);
animals.splice(0, 2, 'SHARK!', 'OCTOPUS!');
console.log(animals); */

