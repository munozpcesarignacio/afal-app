"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // importar metodo que devuelve un objeto en el cual se agregaran las rutas..
const login_controller_1 = __importDefault(require("../controllers/login_controller"));
class Login_routes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', login_controller_1.default.index);
    }
}
const rutas_login = new Login_routes;
exports.default = rutas_login.router;
