import User from 'models/User';

export default [
	new User(1, 'Test Authentication', 'mail@sample.com', 'abc123'),
	new User(2, 'Test Authentication 2', 'mail2@sample.com', '123abc'),
	new User(3, 'Random User', 'random@mail.com', '1a2b3c'),
];
