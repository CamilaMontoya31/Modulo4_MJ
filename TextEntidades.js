const axios = require( 'axios' );
const prompt = require('prompt-sync')();

var nombre = prompt( "Hola, ¿Cuál es tu nombre?");
console.log( 'Bienvenida' + nombre )

var mood = prompt( "¿Como te encuentras el día de hoy?");

var resultado = ""

const accionesRespuesta = [
    "Bailemos un poco",
    "Puedes marcar el número de algún amigo o familiar aquí",
    "Puedes ayudar a alguien hoy, aquí algunas opciones", 
    "Saltemos un poco", 
    "Resuelve este rompecabezas"
]

var body = {
    "documents":[
    { 
    "id" : "1",
    "language" : "es",
    "text" : mood
    },
    {
        "id":"2",
        "language": "es",
        "text": "Una persona pasaba enfrente de un gran edificio que estaba al lado de un supermercado"
    }
    ]
}
var direccion = 'https://servicioanalisistexto.cognitiveservices.azure.com/text/analytics/v3.0/entities/recognition/general';

axios.post( direccion,body, { 
    headers: {
        "Ocp-Apim-Subscription-Key" : "8b4c7829af844bc699425c01e131246a",
        "Content-Type" : "application/json"
    }
 })
 .then( respuesta => {
     resultado = respuesta.data.documents[0].id
    console.log( resultado );
})
 .catch( error =>{ console.log(error.response.data ) } );

 //console.log( "Segunda impresión" + resultado );

 function deteccion ( callback ) {

    for (  deteccion ;  ; ) {
    if ( resultado.text = "feliz", "emocionada", "contenta", "bien" ){
    console.log( accionesRespuesta[0] ) 
    }
    else if( resultado.text = "cansada", "molesta","estresada", "mal" ){
        console.log( accionesRespuesta[1] )
    }
 } };

 deteccion( callback );
