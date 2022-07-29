var op1="Piedra";
var op2="Papel";
var op3="Tijera";

function operacion(){

if (op1 === op2){

    console.log(`Gana el ${op1}`)

}else if(op2 ===op3){

    console.log("Gana la Tijera")


}else if(op3 === op1){
    console.log("Gana la Piedra")
}else{
    console.log("Empate")
}
}