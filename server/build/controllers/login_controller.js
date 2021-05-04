"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const moment_1 = __importDefault(require("moment"));
class Login_controller {
    constructor() {
    }
    //crear Promesa...
    index(req, res) {
        const { user, pass } = req.body;
        const query = 'Select * from usuarios where NOMBRE_USUARIO = "' + user + '" and CLAVE_USUARIO = ' + pass;
        const userStatus = () => new Promise((resolve, reject) => {
            database_1.default.query(query, (err, rows, fields) => {
                if (err)
                    reject(err);
                let datastring = JSON.stringify(rows);
                let datajson = JSON.parse(datastring);
                resolve(datajson);
            });
        });
        const personData = (rut) => new Promise((resolve, reject) => {
            database_1.default.query('SELECT * FROM PERSONA WHERE RUT_PERSONA = "' + rut + '"', (err, rows, fields) => {
                if (err)
                    reject(err);
                resolve(rows);
            });
        });
        const insertAudit = () => new Promise((resolve, reject) => {
            database_1.default.query('', (err, rows, fields) => {
                if (err)
                    reject(err);
                resolve(rows);
            });
        });
        (() => __awaiter(this, void 0, void 0, function* () {
            try {
                const userdata = yield userStatus();
                if (userdata) {
                    let rut = userdata[0].RUT_PERSONA_FK;
                    const datospersona = yield personData(rut);
                    let NombrePersona = datospersona[0].NOMBRE_1 + ' ' + datospersona[0].NOMBRE_2 + ' ' + datospersona[0].APELLIDO_1 + ' ' + datospersona[0].APELLIDO_2;
                    let fecha = moment_1.default().format('YYYY-MM-DD');
                    let hora = moment_1.default().format('HH:mm:ss');
                    let modulo = 'Login';
                    let accion = 'ACCESO AL SISTEMA';
                    let descripcion = 'A entrado al sistema con perfil de: Nombre del perfil';
                    console.log();
                }
                else {
                }
            }
            catch (err) {
                console.error(err);
            }
        }))();
    }
    createpersona(req, res) {
    }
}
const loginController = new Login_controller;
exports.default = loginController;
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
