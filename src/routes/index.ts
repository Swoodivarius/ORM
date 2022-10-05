import * as Express from 'express';

import { appleGet, applesGet } from 'routes/apples';
import { orangesGet } from 'routes/oranges';
import { dbGet, dbPut } from 'routes/db';

export const initRoutes = (app: Express.Application) => {
	app.get('/apple/:id', appleGet);
	app.get('/apples', applesGet);
	app.get('/oranges', orangesGet);
	app.get('/db/get', dbGet);
	app.get('/db/put', dbPut);
};
