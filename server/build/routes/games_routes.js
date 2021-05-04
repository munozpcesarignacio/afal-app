"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // importar metodo que devuelve un objeto en el cual se agregaran las rutas..
class Games_routes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('new games'));
    }
}
const rutasgames = new Games_routes;
exports.default = rutasgames.router;
