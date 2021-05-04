import {Request , Response} from 'express'; // le digo a express que quiero el tipo de dato Request y Response
import pool  from '../database'

class Persona_controller {

    constructor(){

    }

    public async index (req: Request , res: Response){ // el metodo es publico ya que es accedido desde la clase..
        // el req.body tiene los datos mandados por el cliente..
        try {
            
            await pool.query('SELECT * FROM persona', function(err, result) {
                if (err) throw err;
                res.json(result);
            });

        } catch (error) {
            
            console.error('Este es el error: ', error);
        }              
    }

    public createpersona (req: Request , res: Response){

        res.send('Datos de personas Post');

    }

}
const personaController = new Persona_controller;
export default personaController;