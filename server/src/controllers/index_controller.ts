import {Request , Response} from 'express'; // le digo a express que quiero el tipo de dato Request y Response

class Index_controller {

    constructor(){

    }

    public index (req: Request , res: Response){ // el metodo es publico ya que es accedido desde la clase..

        res.send('hello word');

    }

}
const indexController = new Index_controller;
export default indexController;