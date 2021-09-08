// import * as functions from 'firebase-functions';
import express from 'express';
// TODO: remove dep import bodyParser from 'body-parser';
import cors from 'cors';
import Router from './routes';

const app = express();
const main = express();
const standardPort = 3010;

const corsOptions = {
	origin: true,
	'Access-Control-Allow-Credentials': true,
	'Access-Control-Allow-Origin': true,
	'Access-Control-Allow-Headers': true,
	'Access-Control-Expose-Headers': true,
};

main.use('/api/v1', app);
main.use(express.json());
main.use(express.urlencoded({ extended: false }));

// Removed Firebase module for now
// export const webApi = functions.https.onRequest(main);

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.options('/*', (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header(
		'Access-Control-Allow-Headers',
		'Content-Type, Authorization, Content-Length, X-Requested-With'
	);
	res.sendStatus(200);
});

Router(app);

app.listen(standardPort, 'localhost', () => {
	console.log(
		`Success! Application is up and running. Listening to http://localhost:${standardPort}`
	);
});

// // Uncomment the following for running with aliased/sub-url mode
// main.listen(standardPort, 'localhost', () => {
// 	console.log(
// 		`Success! Application is up and running. Listening to http://localhost:${standardPort}`
// 	);
// });
