import { Router } from 'express' // importar metodo que devuelve un objeto en el cual se agregaran las rutas..
import indexController from '../controllers/index_controller';

class Index_routes {

    router : Router = Router();
    constructor(){
        this.config();
    }

    config(): void{
    
        this.router.get('/', indexController.index);
    }
}

const rutas = new Index_routes;
export default rutas.router;
