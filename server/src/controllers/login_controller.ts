import {Request , Response} from 'express'; // le digo a express que quiero el tipo de dato Request y Response
import pool  from '../database'
import moment from 'moment';

class Login_controller {

    constructor(){

    }
    
    //crear Promesa...
    public index (req: Request , res: Response){ // el metodo es publico ya que es accedido desde la clase..
        const { user , pass } = req.body;
        const query = 'Select * from usuarios where NOMBRE_USUARIO = "'+user+'" and CLAVE_USUARIO = '+ pass;    

        const userStatus = () => new Promise<any>((resolve, reject) => {
            pool.query(query, (err:any,rows:any,fields:any)=>{

                if(err) reject(err);
                let datastring = JSON.stringify(rows);
                let datajson = JSON.parse(datastring);
                resolve(datajson);
            });
        });
        
        const personData = (rut: number) => new Promise<any>((resolve, reject) => {
            pool.query('SELECT * FROM PERSONA WHERE RUT_PERSONA = "'+rut+'"',(err:any,rows:any,fields:any)=>{

                if(err) reject(err);
                resolve(rows);
            });
        });

        const insertAudit = () => new Promise<any>((resolve, reject) => {
            pool.query('',(err:any,rows:any,fields:any)=>{

                if(err) reject(err);
                resolve(rows);
            });
        });

        (async () => {
            try {
                const userdata = await userStatus();
                if(userdata){
                    
                    let rut = userdata[0].RUT_PERSONA_FK;
                    const datospersona = await personData(rut);
                    let NombrePersona = datospersona[0].NOMBRE_1 +' '+ datospersona[0].NOMBRE_2 +' '+ datospersona[0].APELLIDO_1 +' '+ datospersona[0].APELLIDO_2
                    let fecha = moment().format('YYYY-MM-DD');
                    let hora = moment().format('HH:mm:ss');
                    let modulo = 'Login';
                    let accion = 'ACCESO AL SISTEMA'
                    let descripcion = 'A entrado al sistema con perfil de: Nombre del perfil';
                    console.log();
                }else{
                    
                }
            } catch (err) {
                console.error(err);
            }
        })();
        
        
    }

    public createpersona (req: Request , res: Response){

       

    }

}
const loginController = new Login_controller;
export default loginController;


 // // el req.body tiene los datos mandados por el cliente..
        // const { user , pass } = req.body;
        // const query = 'Select * from usuarios where NOMBRE_USUARIO = "'+user+'" and CLAVE_USUARIO = '+ pass;
        // console.log(query)  

        // let promesa = new Promise ((resolve, reject)=>{

        //     let data = pool.query(query, function (err, result){

        //         if(err) throw err;
        //         let dataString = JSON.stringify(result[0]); //Convierto datos a string 
        //         let datajson = JSON.parse(dataString); //Convierto datos de string a Json queda [{ }]             
        //         console.log(datajson);
        //     });

        //     if(data){
        //         resolve(data);
        //     }else{
        //         reject('LOS DATOS NO SE PROCESARON');
        //     }

        // });
        
        // console.log(promesa);