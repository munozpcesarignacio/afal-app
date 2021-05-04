"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Librerias
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//Routes
const index_routes_1 = __importDefault(require("./routes/index_routes"));
const personas_routes_1 = __importDefault(require("./routes/personas_routes"));
const login_routes_1 = __importDefault(require("./routes/login_routes"));
class server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    // http
    // https = tratar de agregar seguridad ssl....
    // oauth2 seguridad por token.. generar un servicio que genere un token.. 
    //si no tiene estas dos cosas se considera sin seguridad
    config() {
        this.app.set('port', process.env.PORT || 3000); // Si existe un puerto definido tomalo caso contrario utiliza el puerto 3000
        this.app.use(morgan_1.default('dev')); // sirve para ver las peticiones http
        this.app.use(cors_1.default()); // angular prodra perdir los datos a el servidor
        this.app.use(express_1.default.json()); // acepta formatos json del cliente.. (Entiende que es un formato json)
        this.app.use(express_1.default.urlencoded({ extended: false })); // es en caso de que queramos enviar desde un formulario html
    }
    routes() {
        this.app.use(index_routes_1.default); // le dijo a express que usare las rutas que se encuentran en Index_routes
        this.app.use('/personas', personas_routes_1.default); // le dijo a express que usare las rutas que se encuentran en games_routes
        this.app.use('/login', login_routes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const servidor = new server(); //guardo el objeto en una constante 
servidor.start(); //ejecuto el metodo start..
