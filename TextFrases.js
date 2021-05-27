const axios = require( 'axios' );

var body = { 
    "documents":[
        {
            "language": "es",
            "id": "1",
            "text": "La casa es grande"
        },
        {
            "language": "fr",
            "id": "2",
            "text": "bonjour, madame"
        },
        {"language": "en",
        "id": "3",
        "text": "This house is big"
    }
    ]
}

var direccion ='https://servicioanalisistexto.cognitiveservices.azure.com/text/analytics/v3.0/KeyPhrases'

axios.post( direccion, body, {
    headers :{
        "Content-Type" : "application/json",
        "Ocp-Apim-Subscription-Key" : "8b4c7829af844bc699425c01e131246a"
    }
})
//Para ir adentrandose
.then( respuesta => {
    console.log( respuesta.data.documents );
})
.catch( error => { console.log( error ) } );