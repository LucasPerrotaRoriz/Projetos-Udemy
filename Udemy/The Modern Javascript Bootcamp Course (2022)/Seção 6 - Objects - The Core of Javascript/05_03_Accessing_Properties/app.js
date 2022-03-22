const palette = {
	red    : '#eb4d4b',
	yellow : '#f9ca24',
	blue   : '#30336b'
};

//DOT NOTATION
palette.red; //'#eb4d4b'

//SQUARE BRACKET NOTATION
palette['yellow']; //'#f9ca24'

//With square brackets, we can also use dynamic key names:

let mysteryColor = 'blue';
palette[mysteryColor]; //'#30336b'

console.log(palette["bl"+"ue"]);

const numbers = {
	100: 'one hundred',
	16: 'sixteen'
};
console.log(numbers[100]);
