var pregunta= prompt("Ingresa tu opciona: piedra, papel o tijera")
var p=pregunta.toLocaleLowerCase();
Options=["tijera","piedra","papel"];
var pc=Options[Math.floor(Math.random()*3)];

function operacion(p){
 switch(true) {
    case (p===pc):
        console.log("Empate");
        
        break;
    case(p==='tijera' && pc==='papel'  ): 

        console.log("Ganaste!");
        break;
    case( p==='piedra' && pc==='tijera'):

        console.log("Ganaste");
        break;

    case(p==='papel' && pc==='piedra'):
        console.log("Ganaste");
        break;
    default:
        console.log("Perdiste");
        break;
}}
