import Pet from 'models/Pet';
import PetDatabase from 'database/Pets';
import deleted from 'util/deleted';
import forbidden from 'util/forbidden';
import { HttpMessage, Response } from 'models';

// For giving more examples on abstraction
const modelName = 'pet';

const PetController = (app) => {
	app.get(`/${modelName}`, (req, res) => {
		return res.send(new Response(PetDatabase));
	});
	app.post(`/${modelName}`, (req, res) => {
		const { body } = req;

		if (!body.name || body.name.trim() === '')
			return res.send(new Response('Error! Pet name is missing.', 400));

		const newPet = new Pet(body.name);

		PetDatabase.push(newPet);

		return res.send(new Response(newPet));
	});
};

export default PetController;
