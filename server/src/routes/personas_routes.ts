import { Router } from 'express' // importar metodo que devuelve un objeto en el cual se agregaran las rutas..
import personaController from '../controllers/persona_controller';

class Personas_routes {

    router : Router = Router();
    constructor(){
        this.config();
    }

    config(): void{

        this.router.get('/', personaController.index);
        this.router.post('/',personaController.createpersona);
    }

}

const rutas_persona = new Personas_routes;
export default rutas_persona.router;
