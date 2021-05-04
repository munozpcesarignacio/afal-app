"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // importar metodo que devuelve un objeto en el cual se agregaran las rutas..
const persona_controller_1 = __importDefault(require("../controllers/persona_controller"));
class Personas_routes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', persona_controller_1.default.index);
        this.router.post('/', persona_controller_1.default.createpersona);
    }
}
const rutas_persona = new Personas_routes;
exports.default = rutas_persona.router;
