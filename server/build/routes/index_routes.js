"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // importar metodo que devuelve un objeto en el cual se agregaran las rutas..
const index_controller_1 = __importDefault(require("../controllers/index_controller"));
class Index_routes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', index_controller_1.default.index);
    }
}
const rutas = new Index_routes;
exports.default = rutas.router;
