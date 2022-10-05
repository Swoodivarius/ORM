"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRoutes = void 0;
const apples_1 = require("./apples");
const oranges_1 = require("./oranges");
const db_1 = require("./db");
const initRoutes = (app) => {
    app.get('/apple/:id', apples_1.appleGet);
    app.get('/apples', apples_1.applesGet);
    app.get('/oranges', oranges_1.orangesGet);
    app.get('/db/get', db_1.dbGet);
    app.get('/db/put', db_1.dbPut);
};
exports.initRoutes = initRoutes;
//# sourceMappingURL=index.js.map