//Librerias
import express, {Application} from 'express'; 
import morgan from 'morgan';
import cors from 'cors';

//Routes
import Index_routes  from './routes/index_routes';
import Personas_routes from './routes/personas_routes';
import Login_routes from './routes/login_routes'

class server { //Define clase para inciar el servidor

    public app: Application; // express es del tipo aplicacion

    constructor(){ // se inicia apenas se inicializa la clase

        this.app = express();
        this.config();
        this.routes();
    }
    // http
    // https = tratar de agregar seguridad ssl....
    // oauth2 seguridad por token.. generar un servicio que genere un token.. 
    //si no tiene estas dos cosas se considera sin seguridad

    config(): void{ //este metodo no devuelve nada

        this.app.set('port', process.env.PORT || 3000) // Si existe un puerto definido tomalo caso contrario utiliza el puerto 3000
        this.app.use(morgan('dev')); // sirve para ver las peticiones http
        this.app.use(cors()); // angular prodra perdir los datos a el servidor
        this.app.use(express.json()); // acepta formatos json del cliente.. (Entiende que es un formato json)
        this.app.use(express.urlencoded({extended: false})); // es en caso de que queramos enviar desde un formulario html
    }

    routes(): void{//este metodo no devuelve nada

        this.app.use(Index_routes); // le dijo a express que usare las rutas que se encuentran en Index_routes
        this.app.use('/personas', Personas_routes); // le dijo a express que usare las rutas que se encuentran en games_routes
        this.app.use('/login',Login_routes);
    }

    start(): void{

        this.app.listen(this.app.get('port'), () =>{ // le dijo que el servidor de express estara escuchado en el port configurado con anterioridad
            console.log('Server on port' , this.app.get('port'));  
        });
    }

}
const servidor = new server(); //guardo el objeto en una constante 
servidor.start(); //ejecuto el metodo start..