const student = {
	firstName: 'David',
	lastName: 'Jones',
	strengths: ['Music', 'Arts'], 
	exams: {
		midterm: 92,
		final: 88
	}
}
console.log(student);

const avg = (student.exams.midterm + student.exams.final) / 2;
console.log(avg);
const  s = student.strengths[1];
console.log(s);

const shoppingCart = [
	{
		product: 'Jenga Classic',
		price: 6.88,
		quantity: 1,
	},
	{
		product: 'Echo Dot',
		price: 29.99,
		quantity: 3,
	},
	{
		product: 'Fire Stick',
		price: 39.99,
		quantity: 2
	}
]
console.log(shoppingCart);

const game = {
	player1: {
		username: 'Blue',
		playingAs: 'X'
	},
	player2: {
		username: 'Muffins',
		playingAs: 'O'
	},
	board: [['O', null, 'X'],
			['X', 'O', 'X'],
			[null, 'O', 'X']]
};
console.log(game);
