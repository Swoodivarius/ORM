"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbGet = exports.dbPut = void 0;
const AppDataSource_1 = require("../db-config/AppDataSource");
const Person_1 = require("../entities/Person");
const dbPut = async (req, res) => {
    const repo = AppDataSource_1.appDataSource.getRepository(Person_1.Person);
    const p = {
        name: 'Roman',
        age: 24,
    };
    repo.save(p);
    res.send('success!');
};
exports.dbPut = dbPut;
const dbGet = async (req, res) => {
    const repo = AppDataSource_1.appDataSource.getRepository(Person_1.Person);
    const me = await repo.find({ where: { name: 'Roman' } });
    res.send(me);
};
exports.dbGet = dbGet;
//# sourceMappingURL=db.js.map