import Movie from 'models/Movie';

export default [
	new Movie(
		'Batman',
		`Batman is a cool guy, he hangs out with Ignacio. 
		They enjoy a good time together hunting down their enemies.`,
		5400000,
		new Date('12/10/1999')
	),
	new Movie(
		'Amelie Poulain',
		`Amelie is a girl from France/Paris with several 
		traumas she's faced throughout the life.`,
		5400000,
		new Date('10/05/2005')
	),
];
