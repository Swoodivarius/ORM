"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDataSource = void 0;
const torm = require("typeorm");
exports.appDataSource = new torm.DataSource({
    type: 'postgres',
    host: '172.17.0.2',
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'user',
    synchronize: true,
    logging: true,
    entities: [__dirname + '/../**/entities/*.{js,ts}'],
});
exports.appDataSource.initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
})
    .catch((err) => {
    console.error('Error during Data Source initialization', err);
});
//# sourceMappingURL=AppDataSource.js.map