# template-firebase-nodejs-rest-api

Origin for standardised for sample of structured REST API.

> There is a Firebase module to be coupled within this system for handling functions and react to updates on collections.

> This API makes use of BasicService library, which is designed to be a firebase firestore handler that solves several firebase query limitations.

> Generate a private key json file and place it at the root folder. After this, reference it at src/index.js

# Local Start-up

Simply start by **yarn install**.

After the modules are installed, run with **yarn start**.

# Module Routers

## How to

-   Create a Route at **routes/** following the example at the end of this document
-   Import it on **routes/index.js** and create an instance inside of the **Router** function passing **app** as parameter

## Example

### Module Router

```js
import { BasicService } from 'firebase-basic-service';
import { User } from 'your-models-repository';

let BaseModel = new User();
let Service = BasicService(BaseModel.getModelName(), {});

const Route = (app) => {
	app.get('/user', (req, res) => {
		Service.list().then((r) => {
			res.send(r);
		});
	});
	app.get('/user/:id', (req, res) => {
		Service.get(req.params.id).then((r) => {
			res.send(r);
		});
	});
	app.post('/user', (req, res) => {
		Service.save(req.body).then((r) => {
			res.send(r);
		});
	});
	app.post('/user/:id', (req, res) => {
		Service.save(req.body).then((r) => {
			res.send(r);
		});
	});
	app.put('/user/:id', (req, res) => {
		Service.patch(req.params.id, {
			...req.body
		}).then((r) => {
			res.send(r);
		});
	});
	app.delete('/user', (req, res) => {
		Service.patch(req.params.id, {
			deleted: true
		});
	});
};

export default Route;
```

### Module Router export

```js
import YourModuleRouter from './YourModuleRouter';

const Router = (app) => {
	YourModuleRouter(app);
};

export default Router;
```
