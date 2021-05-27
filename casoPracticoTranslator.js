//Crear un programa para que le robot Spencer pueda ayudar
//a los pasajeros dando intrucciones sobre donde 
//deben de ir dependiendo de la pregunta inicial,
//estas instrucciones deben estar en el idioma que 
//el pasajero usó para su pregunta inicial.

const axios = require( 'axios' );
//const prompt = ( 'prompt-sync' )();

const accionesRespuesta = [
    "Sube la escalera de nuestra derecha",
    "Puedes dejar tu equipaje en el area 2",
    "Los policias se encuentran el el area 3", 
    "La pista 5 se encuentra en el area 4",
    "Puedes transbordar en el area 1",
    "El baño está a nuestra izquierda"
]


//Saludos en distintos idiomas
console.log( "Hola, ¿Cuál es tu duda?")
console.log( "Hello, what is your question?" );
console.log( "Bonjour, quelle est ta question?" );
console.log( "こんにちは、あなたの質問は何ですか？" );

//var pregunta = prompt("--> ");
var pregunta = "Text";

//function deteccion( texto){
function deteccion( texto, callback ){
    var datosDeteccion = [{ "Text": texto }];
    var direccionDeteccion = ('https://api.cognitive.microsofttranslator.com/detect?api-version=3.0');

    axios.post( direccionDeteccion, datosDeteccion, {
        headers : { 
            'Ocp-Apim-Subscription-Key' : '58f9f4075c9c46bca61a78cfc71a45b6',
            'Ocp-Apim-Subscription-Region' : 'southcentralus',
            'Content-Type': 'application/json'
        }
    })
    .then ( respuesta => {callback( respuesta.data[0].language, texto ) } )
    .catch( error => console.log( error ));
}

function traduccion( idioma, texto ){

    switch( texto ){
        case "embarquer":
            var respuestaIdioma = [ { "Text": accionesRespuesta[4] } ];
            break;
        case "¿Donde está el baño?":
            var respuestaIdioma = [ { "Text": accionesRespuesta[5] } ];
            break;
    }

    var dirrecion = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to='+idioma;

    axios.post( direccionDeteccion, respuestaIdioma, {
        headers : { 
            'Ocp-Apim-Subscription-Key' : '58f9f4075c9c46bca61a78cfc71a45b6',
            'Ocp-Apim-Subscription-Region' : 'southcentralus',
            'Content-Type': 'application/json'
          } 
    }  )  
 //Accedemos al atributo que contiene la traducción, la cuál vamos a mostrar
 .then( respuesta => console.log( respuesta.data[0].translations[0].text ))
 //Obtenemos el error que puede existir en la petición
 .catch( error => console.log( error ));
}

//Llamada a la función general del servicio
deteccion( pregunta, traduccion );