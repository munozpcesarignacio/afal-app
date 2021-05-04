import { Router } from 'express' // importar metodo que devuelve un objeto en el cual se agregaran las rutas..
import loginController from '../controllers/login_controller';

class Login_routes {

    router : Router = Router();
    constructor(){
        this.config();
    }

    config(): void{

        this.router.post('/', loginController.index);        
    }

}

const rutas_login = new Login_routes;
export default rutas_login.router;
