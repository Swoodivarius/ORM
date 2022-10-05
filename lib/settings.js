"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settings = void 0;
const Path = require("path");
exports.settings = {
    LOG_PATH: process.env.LOG_PATH || Path.resolve(__dirname, '../log'),
    PORT: process.env.PORT || 3000,
    PUBLIC_PATH: process.env.PUBLIC_PATH || Path.resolve(__dirname, '../public'),
};
//# sourceMappingURL=settings.js.map