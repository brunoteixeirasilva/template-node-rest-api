import * as functions from 'firebase-functions';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Router from './routes';

const app = express();
const main = express();

const corsOptions = {
	origin: true,
	'Access-Control-Allow-Credentials': true,
	'Access-Control-Allow-Origin': true,
	'Access-Control-Allow-Headers': true,
	'Access-Control-Expose-Headers': true
};

main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

export const webApi = functions.https.onRequest(main);

app.use(cors(corsOptions));

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
