"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applesGet = exports.appleGet = void 0;
const appleGet = (req, res) => {
    const id = 0;
    res.send({ id, message: 'apple' });
};
exports.appleGet = appleGet;
const applesGet = (req, res) => {
    res.send({ message: 'apples' });
};
exports.applesGet = applesGet;
//# sourceMappingURL=apples.js.map