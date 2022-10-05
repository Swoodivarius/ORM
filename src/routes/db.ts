import { appDataSource } from 'db-config/AppDataSource';
import { Person } from 'entities/Person';
import * as Express from 'express';

export const dbPut = async (req: Express.Request, res: Express.Response) => {
	const repo = appDataSource.getRepository(Person);
	const p = {
		name: 'Roman',
		age: 24,
	};
	repo.save(p);
	res.send('success!');
};

export const dbGet = async (req: Express.Request, res: Express.Response) => {
	const repo = appDataSource.getRepository(Person);
	const me = await repo.find({ where: { name: 'Roman' } });
	res.send(me);
};
