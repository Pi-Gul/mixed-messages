const prefaceArr = [
'In the year 2020',
'In the not too distant future',
'A hundred years from now'
];
const subjArr = [
'humans',
'giraffes',
'elephants',
'hamsters',
'cephalopods'
];
const verbArr = [
'build',
'destroy',
'discover',
'invent',
'rebuild',
'forget'
];
const objArr = [
'a base',
'a research station',
'a train station',
'a sky-scraper',
'a circus',
'a cell-phone factory',
'an ice-cream stand'
];
const placeArr = [
'on Earth',
'on the Moon',
'on Mars',
'in the Trappist system',
'in another galaxy'
];

function assembleSentence() {
	let message = '';
	let index = Math.floor(Math.random() * prefaceArr.length);
	message += ' '+prefaceArr[index];
	index = Math.floor(Math.random() * subjArr.length);
	message += ' '+subjArr[index];
	index = Math.floor(Math.random() * verbArr.length);
	message += ' will '+verbArr[index];
	index = Math.floor(Math.random() * objArr.length);
	message += ' '+objArr[index];
	index = Math.floor(Math.random() * placeArr.length);
	message += ' '+placeArr[index];	
	return message;
};

console.log(assembleSentence());