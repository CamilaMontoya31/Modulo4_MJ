
const axios = require( 'axios' );

var datos = [
    { "Text": "頭カラ" }
];

var dirreccion = 'https://api.cognitive.microsofttranslator.com/transliterate?api-version=3.0&language=zh-Hans&fromScript=zh-Hans&toScript=Latn'

axios.post( direccion, datos, {
    headers : { 
        'Ocp-Apim-Subscription-Key' : '58f9f4075c9c46bca61a78cfc71a45b6',
        'Ocp-Apim-Subscription-Region' : 'southcentralus',
        'Content-Type': 'application/json'
        
    }
    })
    .then ( respuesta => console.log( respuesta.data[0].translations[0].text ))
    .catch( error => console.log( error ))