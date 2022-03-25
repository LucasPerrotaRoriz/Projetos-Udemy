let ingredients = [
	'water',
	'corn starch',
	'flour',
	'cheese',
	'brown sugar',
	'shrimp',
	'eel',
	'butter'
];

console.log(ingredients.includes('fish'));
console.log(ingredients.includes('shrimp'));
console.log(ingredients.includes('corn'));
console.log(ingredients.includes('water', 3));

if(ingredients.includes('flour')) {
	console.log('I AM GLUTEN, I CANNOT EAT THAT!');
}

console.log(ingredients.indexOf('eel'));
console.log(ingredients.indexOf('maple syrup'));
console.log(ingredients.indexOf('cheese', 5));

if(ingredients.indexOf('flour') !== -1) {
	console.log('I AM GLUTEN, I CANNOT EAT THAT!');
}
