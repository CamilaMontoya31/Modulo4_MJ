const axios = require( 'axios' );

var resultado = ""

//Ingresar los datos del usuario
const datosAlumnos = [ 
    { nombre : "Camila", id: "1", respuesta: "Hoy he llorado mucho y no tengo motivación" },
    { nombre: "Ana", id: "2", respuesta: "Me he sentido muy feliz, porque tengo una nueva mascota"},
    { nombre: "Luis", id: "3", respuesta: "Me encuentro agotado y estresado"}
];

var body = { 
    "documents":[
        {
            "language": "es",
            "id": "1",
            "text": datosAlumnos[0].respuesta
        },
        {
            "language": "es",
            "id": "2",
            "text": "bonjour, madame"
        },
        {"language": "es",
        "id": "3",
        "text": "This house is big"
    }
    ]
}

var direccion = 'https://servicioanalisistexto.cognitiveservices.azure.com/text/analytics/v3.0/sentiment'

axios.post( direccion, body, {
    headers :{
        "Content-Type" : "application/json",
        "Ocp-Apim-Subscription-Key" : "8b4c7829af844bc699425c01e131246a"
    }
})
.then( respuesta => {
    resultado = respuesta.data.documents[0] 
   console.log( resultado );
})
.catch( error => { console.log( error.response.data ) } );