const axios = require( 'axios' );
 
var body = {
    "documents" : [
        {
            "id" : "1",
            "text":'Este documento esta en español'
        },
        {
            "id": "2",
            "text":'This document is in english'
        },
        {
            "id": "3",
            "text":'こんにちは'
        }
    ]
}

var direccion ='https://servicioanalisistexto.cognitiveservices.azure.com/text/analytics/v3.0/languages';

axios.post( direccion, body, {
    headers :{
        "Content-Type" : "application/json",
        "Ocp-Apim-Subscription-Key" : "8b4c7829af844bc699425c01e131246a"
    }
})
//Para ir adentrandose
.then( respuesta => {
    console.log( "El idioma detectado es:"+ respuesta.data.documents[2].detectedLanguage.name);
})
.catch( error => { console.log( error ) } );
