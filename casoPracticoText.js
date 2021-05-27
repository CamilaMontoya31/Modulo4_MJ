//Crear un programa para que un profesor de español pueda tener
//un seguimiento de sus alunmos y saber si está realzando bien su trabajo

const axios = require( 'axios' );

const datosAlumnos = [ 
    { nombre : "Camila", id: "1", opinion: "El profesor da muy bien la clase" },
    { nombre: "Ana", id: "2", opinion: "Este profesor no sabe explicar me cae mal"},
    { nombre: "Luis", id: "3", opinion: "No lo hace mal, pero puede mejorar"}
];



var body = { 
    "documents":[
        {
            "language": "es",
            "id": "1",
            "text": datosAlumnos[0].opinion
        },
        {
            "language": "esr",
            "id": "2",
            "text": datosAlumnos[1].opinion
        },
        {"language": "es",
        "id": "3",
        "text": datosAlumnos[2].opinion
    }]}

function obtenerOpiniones( callback ){
//function obtenerOpiniones(){

// 1.La petición al servicio analisis de texto

var direccion = 'https://servicioanalisistexto.cognitiveservices.azure.com/text/analytics/v3.0/sentiment'
axios.post( direccion, body, {
    headers :{
        "Content-Type" : "application/json",
        "Ocp-Apim-Subscription-Key" : "8b4c7829af844bc699425c01e131246a"
    }
})
// 2.Mandar el resultado obtenido en la petición
.then( respuesta => {
    callback( respuesta.data.documents );  
   // console.log( respuesta.data.documents );
})
.catch( error => { console.log( error.response ) } );

    //callback( respuesta )
}


function obtenerResultado( arregloSentimientos )
{
    var vPositivo = 0; 
    var vNegativo = 0; 
    var vNeutro = 0;
    for( var i = 0; i < arregloSentimientos.length; i++ ){
        if( arregloSentimientos[i].sentiment == "negative"){
            vNegativo++;
        }
        else if( arregloSentimiento[i].sentiment == "positive"){
            vPositivo++;
        }
        else if( arregloSentimiento[i].sentiment == "neutral"){
            vNeutro++;
        } 

    }
    if ( (vNegativo > vPositivo) && (vNegativo > vNeutro) ){
        console.log( "Tus alumnos tiene opiniones negativas, tienes que mejorar al dar tus clases"); }
    
    else if ((vPositivo > vNegativo ) && (vPositivo > vNeutro)){
        console.log( "Tus alumnos tienen opiniones Positivas, lo haces bien pero no bajes la guardia");
    } }
obtenerOpiniones( obtenerResultado );