const axios = require('axios');

var enlaces = [];
//Datos de empleados
//enlaces[0] = '';
//enlaces[1] = '';
//enlaces[2] = '';


//guaradar datos then}, {datos},{datos}
var datosEmpleados = [{ nombre: "Luis", clave: 2525, foto:'' }]

var direccionDetecta = 'https://servicioface.cognitiveservices.azure.com//face/v1.0/detect?returnFaceId=true&return'
var dirrecionVerifica = 'https://servicioface.cognitiveservices.azure.com/face/v1.0/verify?=';

var datosDetecta = {url : "https://depor.com/resizer/h13fLpuV1iZJuqOsRYuRvXvfEFw=/580x330/smart/filters:format(jpeg"}

function peticion(){
    //Peticion Post - Servicio Face ( Detección de Rostros)
    axios.post( dirrecion, datos, {
    headers : {
        'Ocp-Apim-Subscription-Key': '326d364a0fbe4a39998455172d1a3b46',
        'Content-Type': 'application/json'
    }
})
.then( respuesta => console.log ( respuesta.data ))
.catch( error => console.log(error));  
}