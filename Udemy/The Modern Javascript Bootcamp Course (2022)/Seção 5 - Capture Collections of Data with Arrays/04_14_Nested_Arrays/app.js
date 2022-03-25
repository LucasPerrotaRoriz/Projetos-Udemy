const animalPairs = [
	[ 'doe', [ 'buck', 'stag' ] ],
	[ 'ewe', 'ram' ],
	[ 'peahen', 'peacock' ]
];

//To access 'ewe'
console.log(animalPairs[1][0]);

//To access 'buck'
console.log(animalPairs[0][1][0]);

//Updating a sub-array:
animalPairs[0][1].push('hart');
//apparently some people call male deer 'harts'.  idk.
console.log(animalPairs);
console.log(animalPairs[0][1]);




